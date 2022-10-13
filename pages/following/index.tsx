import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { NextPage } from "next";
import LoadingPage from "../../components/loadingPage/LoadingPage";
import ViewManyPosts from "../../components/post/viewManyPosts/ViewManyPosts";
import { Post } from "../../interfaces/utils.Interface";

const Following: NextPage = () => {
  const { data, isLoading } = useQuery(
    ["following"],
    async (): Promise<Post[] | []> => {
      try {
        const res = await axios.get<Post[] | []>(
          "https://lposts-2.herokuapp.com/posts/following",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("Lposts2__token") || ""
              )}`,
            },
          }
        );
        return res.data;
      } catch (err) {
        return [];
      }
    }
  );
  return (
    <>
      {data ? (
        <ViewManyPosts posts={data} />
      ) : isLoading ? (
        <LoadingPage isLoading={isLoading} />
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Following;
