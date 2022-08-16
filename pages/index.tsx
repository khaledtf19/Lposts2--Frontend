import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useEffect, Suspense } from "react";

import ProtectedPage from "../components/protectedPage/ProtectedPage";
import { useGetPosts } from "../hooks/fetchHooks";

const DynamicViewPosts = dynamic(
  () => import("../components/post/viewPosts/ViewPosts"),
  {
    suspense: true,
  }
);

const Home: NextPage = () => {
  const { posts, loading } = useGetPosts();

  return (
    <ProtectedPage>
      <Suspense fallback={`...Loading...`}>
        <DynamicViewPosts posts={posts} loading={loading} />
      </Suspense>
    </ProtectedPage>
  );
};

export default Home;
