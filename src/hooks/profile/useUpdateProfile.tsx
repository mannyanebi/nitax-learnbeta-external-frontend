import { update_profile } from "@/services/user";
import { useAppDispatch, useAppSelector } from "@/store";
import { IAuthResponse } from "@/store/@types/auth";
import { IUpdateProfile } from "@/store/@types/profile";
import { getCookieItem } from "@/utility/cookie";
import React from "react";

const useUpdateProfile = () => {
  const dispatch = useAppDispatch();
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

  const handleFileSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) profileSet((prev) => ({ ...prev, image: files[0] }));
  };

  const onProfileSet = React.useCallback(() => {
    if (user && user?.data) {
      const { full_image_path, name, location } = user.data;
      profileSet((prev) => ({
        ...prev,
        name,
        location,
        image: full_image_path,
      }));
    }
  }, [user]);

  React.useEffect(() => {
    onProfileSet();
  }, [onProfileSet]);

  return { profile, profileSet, handleSubmit, handleFileSubmit, onSubmit };
};

export default useUpdateProfile;
