import { FC } from "react";

import BackDrop from "../dorpBack/BackDrop";
import { closeError } from "../../features/error/errorSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import styles from "./ErrorPopup.module.scss";
import { Button } from "../utilities/Utilities";

const ErrorPopup: FC = () => {
  const { isOpen, messages } = useAppSelector(
    (state) => state.rootReducer.error.value
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {isOpen && (
        <BackDrop
          onClick={() => {
            dispatch(closeError());
          }}
        >
          <div className={styles.error__container}>
            <h1>Error</h1>
            {messages.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <div>
              <Button
                text="Close"
                onClick={() => {
                  dispatch(closeError());
                }}
              />
            </div>
          </div>
        </BackDrop>
      )}
    </>
  );
};

export default ErrorPopup;
