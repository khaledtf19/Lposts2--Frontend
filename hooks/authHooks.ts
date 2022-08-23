import { useEffect } from "react";
import { fetchUserData } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const UseGetUserDispatch = () => {
  const { data, loading, error } = useAppSelector(
    (state) => state.rootReducer.auth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return { data, loading, error };
};

export const useGetUser = () => {
  const { data, loading, error } = useAppSelector(
    (state) => state.rootReducer.auth
  );

  return { data, loading, error };
};
