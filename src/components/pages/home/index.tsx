import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import MyFeed from "./my-feed";
import FeaturedAuthors from "./featured-authors";
import Footer from "./footer";
import { useAuth } from "@/tools/auth";

const HomeHelmet: FC = () => {
  return (
    <Helmet>
      <title>Scribblify</title>
      <meta
        name="description"
        content="Scribbligy - is an online publishing platform that allows writers to share their stories and perspectives with a global audience."
      />
      <link rel="canonical" href="/" />
    </Helmet>
  );
};

const Home: FC = () => {
  const { isAuthed } = useAuth();

  return (
    <div>
      <HomeHelmet />
      {!isAuthed ? (
        <>
          <MyFeed />
          <FeaturedAuthors />
          <Footer />
        </>
      ) : (
        <>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
