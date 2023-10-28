import { ILoading, IServiceReponse } from "./misc";

export type IProfileState = {
  profile: IProfile | null;
} & ILoading;

export type IUpdateProfile = {
  name: string;
  location: string;
  image: File | string;
};

export type IProfile = {
  data: {
    id: string;
    name: string;
    email: string;
    location: string;
    image: string;
    full_image_path: string;
    grade_level_name: string;
    subscription: string;
    phone_number: string;
  };
  message: string;
  status: string;
};
