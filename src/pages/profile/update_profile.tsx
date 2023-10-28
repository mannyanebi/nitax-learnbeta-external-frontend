import React from "react";
import Head from "next/head";
import { Box, Flex, BackgroundImage } from "@mantine/core";
import no_profile from "@/assets/imgs/no_profile.png";
import Image from "next/image";
import Input from "@/components/elements/forms/Input";
import PageLayout from "@/layouts/PageLayout";
import ProfileNav from "@/components/nav/ProfileNav";
import AppLayout from "@/layouts/AppLayout";
import { get_user_profile } from "@/services/user";
import { useAppDispatch, useAppSelector } from "@/store";
import Button from "@/components/elements/forms/Button";
import useUpdateProfile from "@/hooks/profile/useUpdateProfile";

const UpdateProfile = () => {
  const dispatch = useAppDispatch();

  const { profile, handleSubmit, onSubmit, handleFileSubmit } =
    useUpdateProfile();

  const onLoad = React.useCallback(() => {
    get_user_profile(dispatch);
  }, [dispatch]);

  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <PageLayout>
      <AppLayout>
        <Head>
          <title>Update Profile</title>
        </Head>

        {/* <ProfileNav /> */}

        <div className="w-full flex items-center h-[100vh] flex-col my-14">
          <div className="w-[85%] h-[30vh] mx-10 py-5 px-3">
            <div className="w-full flex justify-center ">
              <div className="bg-no-repeat relative h-[140px] bg-center bg-profile bg-cover rounded-xl w-full">
                <Image
                  src={no_profile}
                  alt="profile icon"
                  width={160}
                  height={160}
                  priority={true}
                  onClick={() =>
                    document.getElementById("profile_avatar")?.click()
                  }
                  className="object-cover w-[8rem] md:absolute md:-bottom-[50%] md:left-5 h-[8rem] shadow-md rounded-full mx-auto cursor-pointer"
                />
              </div>
            </div>
            <input
              hidden
              type="file"
              id="profile_avatar"
              value=""
              onChange={handleFileSubmit}
            />
          </div>

          <div className="flex items-center justify-center w-full my-7">
            <div className="md:w-[30%] max-xl:w-[20%] sm:w-[100%]">
              <form onSubmit={onSubmit} id="update_profile">
                <div>
                  <Input
                    name="name"
                    type="text"
                    value={profile.name}
                    onChange={handleSubmit}
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <Input
                    name="location"
                    type="text"
                    value={profile.location}
                    onChange={handleSubmit}
                    placeholder="Location"
                  />
                </div>

                <div className="my-3">
                  <Button
                    title="Update"
                    type="submit"
                    bg="#FBDEE2"
                    text="#EA596E"
                    h_text="#ffffff"
                    h_bg="#EA596E"
                    onClick={() => {
                      // if (document.getElementById("update_profile"))
                      // document.getElementById("update_profile").onsubmit();
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    </PageLayout>
  );
};

export default UpdateProfile;
