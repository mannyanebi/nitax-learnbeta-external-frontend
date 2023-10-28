import { ILoading } from "./misc";

export type ISubjectTypes = {
  description: string;
  full_image_path: string;
  grade_level_name: string;
  has_access: boolean;
  id: string;
  image: string;
  lessons: string;
  name: string;
  progress: string;
};

export type ISubjectState = {
  subjects: ISubjectTypes[];
  error: boolean;
} & ILoading;
