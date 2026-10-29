import type { CourseConfig } from "./types";

export type { CourseConfig, CourseLesson, CourseModule, CourseQuest } from "./types";

const courseModules = import.meta.glob<{ default: CourseConfig }>(
  "./courses/*.ts",
  { eager: true },
);

export const courses: CourseConfig[] = Object.values(courseModules).map(
  (courseModule) => courseModule.default,
);

export function getCourse(slug: string): CourseConfig | undefined {
  return courses.find((course) => course.slug === slug);
}
