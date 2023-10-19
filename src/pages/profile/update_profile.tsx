import React from "react";
import Head from "next/head";
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
  const user = useAppSelector(({ profile }) => profile.profile);

  const { profile, handleSubmit, onSubmit } = useUpdateProfile();

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

        <ProfileNav />

        <div className="flex items-center justify-center">
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
      </AppLayout>
    </PageLayout>
  );
};

export default UpdateProfile;
