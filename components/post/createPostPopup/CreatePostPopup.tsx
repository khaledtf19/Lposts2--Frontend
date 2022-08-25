import { FC } from "react";
import { CreatePostPopupProps } from "../../../interfaces/utilsInterfaces";
import BackDrop from "../../dorpBack/BackDrop";

const CreatePostPopup: FC<CreatePostPopupProps> = ({ open, setOpen }) => {
  // useEffect(() => {
  //   window.onscroll = () => {
  //     window.scroll(0, 0);
  //   };
  // }, []);

  return (
    <>
      {open && (
        <BackDrop onClick={() => setOpen(false)}>
          <div>hi</div>
        </BackDrop>
      )}
    </>
  );
};

export default CreatePostPopup;
