"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { GameLanguage } from "@/lib/games/bug-hunt";
import { gameLanguages } from "@/lib/games/bug-hunt";

const progressStorageKey = "iamnoobs-bug-hunt-progress-v1";

type SavedProgress = Record<string, number[]>;

function isSavedProgress(value: unknown): value is SavedProgress {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  return Object.entries(value).every(([slug, levels]) => {
    const language = gameLanguages.find((item) => item.slug === slug);
    return (
      language !== undefined &&
      Array.isArray(levels) &&
      levels.every(
        (level) =>
          Number.isInteger(level) && level >= 1 && level <= language.levels.length,
      )
    );
  });
}

export default function BugHuntGame({ language }: { language: GameLanguage }) {
  const [activeLevelIndex, setActiveLevelIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState<SavedProgress>({});
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [progressError, setProgressError] = useState<string | null>(null);
  const level = language.levels[activeLevelIndex];
  const completedLevels = progress[language.slug] ?? [];
  const isCorrect = submitted && selectedAnswer === level.answerIndex;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(progressStorageKey);
      if (saved !== null) {
        const parsed: unknown = JSON.parse(saved);
        if (!isSavedProgress(parsed)) {
          throw new Error("Saved game progress has an unexpected format.");
        }
        setProgress(parsed);
      }
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : "The browser storage request failed.";
      setProgressError(
        `Saved progress could not be loaded. You can still play, but progress may not persist. ${detail}`,
      );
    } finally {
      setProgressLoaded(true);
    }
  }, []);

  function chooseLevel(index: number) {
    setActiveLevelIndex(index);
    setSelectedAnswer(null);
    setSubmitted(false);
  }

  function submitAnswer() {
    if (selectedAnswer === null) return;

    setSubmitted(true);
    if (selectedAnswer !== level.answerIndex || completedLevels.includes(level.id)) {
      return;
    }

    const updatedProgress = {
      ...progress,
      [language.slug]: [...completedLevels, level.id].sort((a, b) => a - b),
    };
    setProgress(updatedProgress);

    try {
      window.localStorage.setItem(
        progressStorageKey,
        JSON.stringify(updatedProgress),
      );
      setProgressError(null);
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : "The browser storage request failed.";
      setProgressError(
        `Your answer is recorded for this visit, but progress could not be saved. ${detail}`,
      );
    }
  }

  function resetSavedProgress() {
    try {
      window.localStorage.removeItem(progressStorageKey);
      setProgress({});
      setProgressError(null);
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : "The browser storage request failed.";
      setProgressError(`Saved progress could not be reset. ${detail}`);
    }
  }

  return (
    <div className="space-y-6">
      {progressError && (
        <div
          className="flex flex-col gap-3 rounded-xl border border-danger/40 bg-danger/5 p-4 text-sm sm:flex-row sm:items-center sm:justify-between"
          role="alert"
        >
          <p>{progressError}</p>
          <button
            type="button"
            onClick={resetSavedProgress}
            className="shrink-0 rounded-lg border border-card-border px-3 py-2 font-medium hover:bg-muted"
          >
            Reset saved progress
          </button>
        </div>
      )}

      <section
        aria-label={`${language.name} progress`}
        className="rounded-xl border border-card-border bg-card p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Your progress</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {progressLoaded
                ? `${completedLevels.length} of ${language.levels.length} levels completed`
                : "Loading saved progress…"}
            </p>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-muted sm:w-48"
            role="progressbar"
            aria-label={`${language.name} levels completed`}
            aria-valuemin={0}
            aria-valuemax={language.levels.length}
            aria-valuenow={completedLevels.length}
          >
            <div
              className="h-full rounded-full bg-success transition-[width]"
              style={{
                width: `${(completedLevels.length / language.levels.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section
          aria-labelledby="challenge-title"
          className="min-w-0 rounded-xl border border-card-border bg-card p-5 shadow-sm sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {level.type}
            </span>
            {completedLevels.includes(level.id) && (
              <span className="text-sm font-medium text-success">Completed</span>
            )}
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Level {level.id} of {language.levels.length}
          </p>
          <h2 id="challenge-title" className="mt-1 text-2xl font-bold tracking-tight">
            {level.title}
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">{level.prompt}</p>

          {level.code && (
            <pre className="mt-5 overflow-x-auto rounded-xl border border-card-border bg-muted p-4 text-sm leading-6">
              <code>{level.code}</code>
            </pre>
          )}

          <fieldset className="mt-6 space-y-3">
            <legend className="mb-3 text-sm font-semibold">Choose your answer</legend>
            {level.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const answerIsCorrect = submitted && index === level.answerIndex;
              const answerIsIncorrect = submitted && isSelected && !isCorrect;

              return (
                <label
                  key={option}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors ${
                    answerIsCorrect
                      ? "border-success bg-success/10"
                      : answerIsIncorrect
                        ? "border-danger bg-danger/10"
                        : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-card-border hover:bg-muted"
                  } ${submitted ? "cursor-default" : ""}`}
                >
                  <input
                    type="radio"
                    name={`level-${level.id}-answer`}
                    value={index}
                    checked={isSelected}
                    disabled={submitted}
                    onChange={() => setSelectedAnswer(index)}
                    className="mt-0.5 accent-primary"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </fieldset>

          {submitted && (
            <div
              className={`mt-5 rounded-xl border p-4 ${
                isCorrect
                  ? "border-success/40 bg-success/5"
                  : "border-danger/40 bg-danger/5"
              }`}
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold">
                {isCorrect ? "That’s right!" : "Not quite—here’s why."}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {level.explanation}
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            {!submitted ? (
              <button
                type="button"
                onClick={submitAnswer}
                disabled={selectedAnswer === null}
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                Check answer
              </button>
            ) : isCorrect && activeLevelIndex < language.levels.length - 1 ? (
              <button
                type="button"
                onClick={() => chooseLevel(activeLevelIndex + 1)}
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Next level
                <span aria-hidden="true"> →</span>
              </button>
            ) : isCorrect ? (
              <p className="rounded-lg bg-success/10 px-4 py-3 text-sm font-semibold text-success">
                You completed this language path!
              </p>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSelectedAnswer(null);
                  setSubmitted(false);
                }}
                className="rounded-lg border border-card-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Try again
              </button>
            )}
            <Link
              href="/games"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Change language
            </Link>
          </div>
        </section>

        <nav
          aria-label={`${language.name} levels`}
          className="rounded-xl border border-card-border bg-card p-4"
        >
          <h2 className="font-semibold">Levels</h2>
          <ol className="mt-3 grid grid-cols-5 gap-2 lg:grid-cols-2">
            {language.levels.map((item, index) => {
              const isActive = index === activeLevelIndex;
              const isComplete = completedLevels.includes(item.id);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`Level ${item.id}: ${item.title}${isComplete ? ", completed" : ""}`}
                    onClick={() => chooseLevel(index)}
                    className={`flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border px-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary"
                        : isComplete
                          ? "border-success/40 bg-success/5 text-success"
                          : "border-card-border hover:bg-muted"
                    }`}
                  >
                    {item.id}
                    {isComplete && <span aria-hidden="true">✓</span>}
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Pick any level to practice again. Completed levels are saved on this device.
          </p>
        </nav>
      </div>
    </div>
  );
}
