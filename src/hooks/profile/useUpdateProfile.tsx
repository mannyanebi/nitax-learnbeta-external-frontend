import { update_profile } from "@/services/user";
import { useAppDispatch, useAppSelector } from "@/store";
import { IAuthResponse } from "@/store/@types/auth";
import { IUpdateProfile } from "@/store/@types/profile";
import { getCookieItem } from "@/utility/cookie";
import React from "react";

const useUpdateProfile = () => {
  const dispatch = useAppDispatch();
  const data: IAuthResponse | null = getCookieItem("learnbeta_user");
  const user = useAppSelector(({ profile }) => profile.profile);

  const [profile, profileSet] = React.useState<IUpdateProfile>({
    image: "",
    location: "",
    name: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    update_profile(profile, dispatch);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    profileSet((prev) => ({ ...prev, [name]: value }));
  };

  const onProfileSet = React.useCallback(() => {
    if (user && user?.data) {
      console.log(user);
      // const { full_image_path, name, location } = data.data.student;
      // profileSet((prev) => ({
      //   ...prev,
      //   name,
      //   location,
      //   // image: full_image_path || "",
      // }));
      // console.log(full_image_path, name, location);
    }
  }, [user]);

  console.log(data, user);
  return { profile, profileSet, handleSubmit, onSubmit };
};

export default useUpdateProfile;
