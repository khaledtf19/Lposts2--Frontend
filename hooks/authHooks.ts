import { useQuery } from "@tanstack/react-query";
import { User } from "../interfaces/utilsInterfaces";

export const useGetUser = () => {
  return useQuery(["user"], (): Promise<User | null> => {
    return fetch("http://localhost:3000/users/me", {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${JSON.parse(
            localStorage.getItem("Lposts2__token") || ""
          )}` || "",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          return "";
        }
        return data.data;
      });
  });
};
