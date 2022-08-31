import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { User } from "../interfaces/utils.Interface";

export const useGetUser = () => {
  return useQuery(["user"], async (): Promise<User | undefined> => {
    try {
      const res = await axios.get<{ data: User }>(
        "https://lposts-2.herokuapp.com/users/me",
        {
          headers: {
            Authorization:
              `Bearer ${JSON.parse(
                localStorage.getItem("Lposts2__token") || ""
              )}` || "",
            "Content-Type": "application/json",
          },
        }
      );
      const data = res;
      return data.data.data;
    } catch (error) {
      return undefined;
    }
  });
};
