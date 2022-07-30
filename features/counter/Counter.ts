import { useAppSelector, userAppDispatch } from "../../hooks/reduxHooks";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = userAppDispatch();
};
