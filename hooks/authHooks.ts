import { useEffect } from "react";
import { fetchUserData } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const UseGetUser = () => {
  const { data, loading, error } = useAppSelector(
    (state) => state.rootReducer.auth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return { data, loading, error };
};
