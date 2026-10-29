export interface CourseQuest {
  prompt: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  summary: string;
  content: string[];
  example: string;
  quest: CourseQuest;
}

export interface CourseModule {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  outcomes: string[];
  lessons: CourseLesson[];
  checkpoint: string;
}

export interface CourseConfig {
  slug: string;
  language: string;
  title: string;
  icon: string;
  iconImage?: string;
  levelLabel: string;
  description: string;
  metaDescription: string;
  audience: string;
  prerequisites: string;
  modules: CourseModule[];
  capstone: {
    title: string;
    brief: string;
    milestones: string[];
  };
}
