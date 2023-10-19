export type IAuthResponse = {
  data: {
    access_token: string;
    refresh_token: string;
    student: {
      email: string;
      full_image_path: string;
      grade_level_name: string;
      id: string;
      image: string;
      location: string;
      name: string;
      phone_number: string;
      subscription: null | string;
    };
  };
  expiry: Date;
  message: string;
  status: string;
};
