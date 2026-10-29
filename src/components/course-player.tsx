"use client";

import { useEffect, useMemo, useState } from "react";
import type { CourseConfig, CourseLesson } from "@/lib/courses/curriculum";

interface CourseProgress {
  version: 1;
  completedLessons: string[];
  completedQuests: string[];
  xp: number;
  streakEnabled: boolean;
  currentStreak: number;
  bestStreak: number;
  lastStudyDate: string | null;
}

const EMPTY_PROGRESS: CourseProgress = {
  version: 1,
  completedLessons: [],
  completedQuests: [],
  xp: 0,
  streakEnabled: false,
  currentStreak: 0,
  bestStreak: 0,
  lastStudyDate: null,
};

function isCourseProgress(value: unknown): value is CourseProgress {
  if (!value || typeof value !== "object") return false;
  const progress = value as Record<string, unknown>;
  return (
    progress.version === 1 &&
    Array.isArray(progress.completedLessons) &&
    progress.completedLessons.every((id) => typeof id === "string") &&
    Array.isArray(progress.completedQuests) &&
    progress.completedQuests.every((id) => typeof id === "string") &&
    typeof progress.xp === "number" &&
    Number.isFinite(progress.xp) &&
    progress.xp >= 0 &&
    typeof progress.streakEnabled === "boolean" &&
    typeof progress.currentStreak === "number" &&
    Number.isInteger(progress.currentStreak) &&
    progress.currentStreak >= 0 &&
    typeof progress.bestStreak === "number" &&
    Number.isInteger(progress.bestStreak) &&
    progress.bestStreak >= 0 &&
    (typeof progress.lastStudyDate === "string" ||
      progress.lastStudyDate === null)
  );
}

function localDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dayDifference(previous: string, current: string): number {
  const previousDate = new Date(`${previous}T00:00:00.000Z`);
  const currentDate = new Date(`${current}T00:00:00.000Z`);
  return Math.round((currentDate.getTime() - previousDate.getTime()) / 86_400_000);
}

function recordStudy(progress: CourseProgress, xp: number): CourseProgress {
  const updated = { ...progress, xp: progress.xp + xp };
  if (!progress.streakEnabled) return updated;

  const today = localDateKey();
  const daysSinceLastStudy = progress.lastStudyDate
    ? dayDifference(progress.lastStudyDate, today)
    : null;
  if (daysSinceLastStudy === 0) return updated;

  const currentStreak =
    daysSinceLastStudy === 1 ? progress.currentStreak + 1 : 1;
  return {
    ...updated,
    currentStreak,
    bestStreak: Math.max(progress.bestStreak, currentStreak),
    lastStudyDate: today,
  };
}

function getBadgeNames(lessonCount: number, questCount: number): string[] {
  const badges: string[] = [];
  if (lessonCount >= 1) badges.push("First steps");
  if (lessonCount >= 3) badges.push("Curious learner");
  if (lessonCount >= 9) badges.push("Steady builder");
  if (lessonCount >= 18) badges.push("Course explorer");
  if (questCount >= 3) badges.push("Quest starter");
  if (questCount >= 9) badges.push("Sharp thinker");
  if (questCount >= 18) badges.push("Quest champion");
  return badges;
}

function CourseLessonView({
  lesson,
  moduleTitle,
  completed,
  questCompleted,
  onComplete,
  onQuestComplete,
}: {
  lesson: CourseLesson;
  moduleTitle: string;
  completed: boolean;
  questCompleted: boolean;
  onComplete: () => void;
  onQuestComplete: () => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questMessage, setQuestMessage] = useState("");

  function checkAnswer() {
    if (selectedAnswer === null) {
      setQuestMessage("Choose an answer before checking.");
      return;
    }
    if (selectedAnswer === lesson.quest.answer) {
      onQuestComplete();
      setQuestMessage(
        questCompleted
          ? "Correct. You have already earned the quest XP for this question."
          : `Correct! ${lesson.quest.explanation}`,
      );
    } else {
      setQuestMessage("Not quite. Revisit the lesson and try another answer.");
    }
  }

  return (
    <article aria-labelledby="lesson-title" className="min-w-0">
      <p className="text-sm font-semibold text-primary">{moduleTitle}</p>
      <h2 id="lesson-title" className="mt-1 break-words text-2xl font-bold tracking-tight sm:text-3xl">
        {lesson.title}
      </h2>
      <p className="mt-3 text-lg leading-7 text-muted-foreground">
        {lesson.summary}
      </p>
      <div className="mt-6 space-y-4">
        {lesson.content.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>
      <section aria-labelledby="example-title" className="mt-7">
        <h3 id="example-title" className="text-lg font-semibold">
          Guided example
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Read through this example; code examples are for learning and are not executed on this site.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-card-border bg-muted p-4 text-sm leading-6">
          <code>{lesson.example}</code>
        </pre>
      </section>
      <section
        aria-labelledby="quest-title"
        className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 lg:p-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              Relevance quest · +10 XP
            </p>
            <h3 id="quest-title" className="mt-2 text-lg font-semibold">
              {lesson.quest.prompt}
            </h3>
          </div>
          {questCompleted && (
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              Quest complete
            </span>
          )}
        </div>
        <fieldset className="mt-4 space-y-2">
          <legend className="sr-only">Choose your answer</legend>
          {lesson.quest.choices.map((choice, index) => (
            <label
              key={choice}
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm ${
                selectedAnswer === index
                  ? "border-primary bg-card"
                  : "border-card-border bg-card/70 hover:bg-card"
              }`}
            >
              <input
                type="radio"
                name={`quest-${lesson.id}`}
                value={index}
                checked={selectedAnswer === index}
                onChange={() => {
                  setSelectedAnswer(index);
                  setQuestMessage("");
                }}
                className="accent-primary"
              />
              <span className="min-w-0 break-words">{choice}</span>
            </label>
          ))}
        </fieldset>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={checkAnswer}
            className="min-h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            Check answer
          </button>
          <p aria-live="polite" className="text-sm text-muted-foreground">
            {questMessage}
          </p>
        </div>
      </section>
      <div className="mt-6 flex flex-col items-stretch gap-3 border-t border-card-border pt-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm leading-6 text-muted-foreground">
          {completed ? "Lesson complete · +20 XP earned" : "Mark this lesson complete when you are ready."}
        </p>
        <button
          type="button"
          onClick={onComplete}
          disabled={completed}
          className="min-h-11 w-full rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:bg-primary-hover disabled:cursor-default disabled:bg-success lg:w-auto"
        >
          {completed ? "Completed ✓" : "Complete lesson · +20 XP"}
        </button>
      </div>
    </article>
  );
}

export default function CoursePlayer({ course }: { course: CourseConfig }) {
  const storageKey = `iamnoobs-course-progress-v1:${course.slug}`;
  const [progress, setProgress] = useState<CourseProgress>(EMPTY_PROGRESS);
  const [activeLessonId, setActiveLessonId] = useState(
    course.modules[0]?.lessons[0]?.id ?? "",
  );
  const [storageState, setStorageState] = useState<
    "loading" | "ready" | "unavailable"
  >("loading");
  const [storageMessage, setStorageMessage] = useState("");

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (!active) return;
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved === null) {
          setStorageState("ready");
          return;
        }
        const parsed: unknown = JSON.parse(saved);
        if (!isCourseProgress(parsed)) {
          setStorageMessage(
            "Saved progress is in an unrecognized format. This session will work, but progress will not be overwritten or saved.",
          );
          setStorageState("unavailable");
          return;
        }
        setProgress(parsed);
        setStorageState("ready");
      } catch {
        setStorageMessage(
          "Browser storage is unavailable or saved progress could not be read. You can continue, but progress will only last for this visit.",
        );
        setStorageState("unavailable");
      }
    });
    return () => {
      active = false;
    };
  }, [storageKey]);

  useEffect(() => {
    if (storageState !== "ready") return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // Report an external storage write failure instead of claiming progress was saved.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStorageMessage(
        "Progress could not be saved in this browser. You can continue for this visit, but it may not be here next time.",
      );
      setStorageState("unavailable");
    }
  }, [progress, storageKey, storageState]);

  const lessons = useMemo(
    () =>
      course.modules.flatMap((module) =>
        module.lessons.map((lesson) => ({ module, lesson })),
      ),
    [course.modules],
  );
  const active = lessons.find(({ lesson }) => lesson.id === activeLessonId) ?? lessons[0];
  if (!active) return null;

  const completedLessons = new Set(progress.completedLessons);
  const completedQuests = new Set(progress.completedQuests);
  const badges = getBadgeNames(
    completedLessons.size,
    completedQuests.size,
  );
  const coursePercent = Math.round(
    (completedLessons.size / Math.max(lessons.length, 1)) * 100,
  );

  function completeLesson(lessonId: string) {
    setProgress((current) => {
      if (current.completedLessons.includes(lessonId)) return current;
      return recordStudy(
        {
          ...current,
          completedLessons: [...current.completedLessons, lessonId],
        },
        20,
      );
    });
  }

  function completeQuest(lessonId: string) {
    setProgress((current) => {
      if (current.completedQuests.includes(lessonId)) return current;
      return recordStudy(
        {
          ...current,
          completedQuests: [...current.completedQuests, lessonId],
        },
        10,
      );
    });
  }

  function toggleStreak(enabled: boolean) {
    setProgress((current) => ({ ...current, streakEnabled: enabled }));
  }

  return (
    <section aria-label={`${course.language} course learning player`} className="mt-8">
      <div className="grid gap-5 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="h-fit min-w-0 rounded-2xl border border-card-border bg-card p-3 lg:sticky lg:top-20 lg:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Your learning map
              </p>
              <p className="mt-1 text-2xl font-bold">{progress.xp} XP</p>
            </div>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
              {coursePercent}% complete
            </span>
          </div>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label="Course completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={coursePercent}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width]"
              style={{ width: `${coursePercent}%` }}
            />
          </div>
          <div className="mt-4 rounded-xl bg-muted p-3">
            <label className="flex cursor-pointer items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={progress.streakEnabled}
                onChange={(event) => toggleStreak(event.target.checked)}
                className="mt-0.5 accent-primary"
              />
              <span>
                <span className="block font-medium">Optional study streak</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                  No lost progress or penalties for taking a break.
                </span>
              </span>
            </label>
            {progress.streakEnabled && (
              <p className="mt-3 text-xs font-medium text-primary" aria-live="polite">
                🔥 {progress.currentStreak} day{progress.currentStreak === 1 ? "" : "s"} · best {progress.bestStreak}
              </p>
            )}
          </div>
          {storageMessage && (
            <p
              role="status"
              className="mt-3 rounded-lg border border-danger/30 bg-danger/5 p-3 text-xs leading-5 text-danger"
            >
              {storageMessage}
            </p>
          )}
          {storageState === "loading" && (
            <p className="mt-3 text-xs text-muted-foreground" role="status">
              Loading saved progress…
            </p>
          )}
          <nav aria-label="Course lessons" className="mt-4 max-h-[35vh] space-y-4 overflow-y-auto pr-1 lg:mt-5 lg:max-h-[50vh]">
            {course.modules.map((module, moduleIndex) => {
              const moduleCompleted = module.lessons.every((lesson) =>
                completedLessons.has(lesson.id),
              );
              return (
                <section key={module.id} aria-labelledby={`module-${module.id}`}>
                  <h3
                    id={`module-${module.id}`}
                    className="mb-2 flex items-start justify-between gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
                  >
                    <span className="min-w-0 break-words">{moduleIndex + 1}. {module.title}</span>
                    {moduleCompleted && (
                      <span className="text-success" aria-label="Module complete">✓</span>
                    )}
                  </h3>
                  <ol className="space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const selected = lesson.id === activeLessonId;
                      const complete = completedLessons.has(lesson.id);
                      return (
                        <li key={lesson.id}>
                          <button
                            type="button"
                            aria-current={selected ? "step" : undefined}
                            onClick={() => setActiveLessonId(lesson.id)}
                            className={`flex min-h-10 w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm ${
                              selected
                                ? "bg-primary/10 font-semibold text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                                complete ? "bg-success/10 text-success" : "bg-muted"
                              }`}
                              aria-hidden="true"
                            >
                              {complete ? "✓" : lessonIndex + 1}
                            </span>
                            <span className="min-w-0 break-words">{lesson.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              );
            })}
          </nav>
          <div className="mt-5 border-t border-card-border pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Badges earned
            </h3>
            {badges.length ? (
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">
                Complete a lesson or quest to earn your first badge.
              </p>
            )}
          </div>
        </aside>
        <div className="min-w-0 rounded-2xl border border-card-border bg-card p-4 lg:p-8">
          <CourseLessonView
            key={active.lesson.id}
            lesson={active.lesson}
            moduleTitle={active.module.title}
            completed={completedLessons.has(active.lesson.id)}
            questCompleted={completedQuests.has(active.lesson.id)}
            onComplete={() => completeLesson(active.lesson.id)}
            onQuestComplete={() => completeQuest(active.lesson.id)}
          />
          <section className="mt-10 border-t border-card-border pt-6">
            <h2 className="text-lg font-semibold">
              Module checkpoint: {active.module.title}
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              {active.module.checkpoint}
            </p>
            <h3 className="mt-5 text-sm font-semibold">After this module, you can:</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-muted-foreground">
              {active.module.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
