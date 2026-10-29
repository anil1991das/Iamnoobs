import type { CourseConfig } from "./types";

export type { CourseConfig, CourseLesson, CourseModule, CourseQuest } from "./types";

const courseModules = import.meta.glob<{ default: CourseConfig }>(
  "./courses/*.ts",
  { eager: true },
);
const courseIconModules = import.meta.glob<{ default: string }>(
  "./courses/icon/*.png",
  { eager: true, query: "?url" },
);

export const courses: CourseConfig[] = Object.entries(courseModules).map(
  ([coursePath, courseModule]) => {
    const courseName = coursePath.slice("./courses/".length, -".ts".length);
    const iconPath = `./courses/icon/${courseName}.png`;
    const iconImage = courseIconModules[iconPath]?.default;

    return {
      ...courseModule.default,
      ...(iconImage ? { iconImage } : {}),
    };
  },
);

export function getCourse(slug: string): CourseConfig | undefined {
  return courses.find((course) => course.slug === slug);
}
