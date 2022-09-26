import { FC, PropsWithChildren } from "react";
import { closeModal } from "../../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import BackDrop from "../dorpBack/BackDrop";
import { Button } from "../utilities/Utilities";

import styles from "./Modal.module.scss";

const Modal: FC<PropsWithChildren> = () => {
  const { isOpen, message, btnFun, btnMessage } = useAppSelector(
    (state) => state.rootReducer.modal.value
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {isOpen && (
        <BackDrop
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <div className={styles.container}>
            <div className={styles.message}>{message}</div>
            <div className={styles.buttons}>
              {btnFun && (
                <Button
                  text={btnMessage ? btnMessage : "close"}
                  onClick={btnFun}
                />
              )}
              <Button
                text="close"
                onClick={() => {
                  dispatch(closeModal());
                }}
              />
            </div>
          </div>
        </BackDrop>
      )}
    </>
  );
};

export default Modal;
