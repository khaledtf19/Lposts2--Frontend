import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { increment, selectCount } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectCount);
  return (
    <div className={styles.container}>
      <h1>hi</h1>
      {state}
      <button onClick={() => dispatch(increment())}>++</button>
    </div>
  );
};

export default Home;
