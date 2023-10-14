import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import MainProfile from "./main-profile";
import Posts from "./posts";
import { useParams } from "react-router-dom";

const ProfileHelmet: FC = () => {
  const { username } = useParams();
  return (
    <Helmet>
      <title>{username} - Scribblify</title>
      <meta
        name="description"
        content="Loves reading and exploring new stuff."
      />
      <link rel="canonical" href="/@abduvoitov" />
    </Helmet>
  );
};

const Profile: FC = () => {
  return (
    <>
      <ProfileHelmet />
      <div className="mt-[30px] max-xl:w-full max-xl:px-[20px] w-[80%] 2xl:w-[1200px] m-auto flex gap-7 max-md:flex-col">
        <MainProfile />
        <Posts />
      </div>
    </>
  );
};

export default Profile;
