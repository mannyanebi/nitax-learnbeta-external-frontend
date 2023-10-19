import { IServiceReponse } from "./misc";

export type IProfileState = {
  profile: IProfile | null;
};

export type IUpdateProfile = {
  name: string;
  location: string;
  image: File | string;
};

export type IProfile = {
  data: {
    data: {
      id: string;
      name: string;
      email: string;
      location: string;
      image: null;
      full_image_path: string;
      grade_level_name: string;
      subscription: string;
    };
    message: string;
    status: string;
  };
};
