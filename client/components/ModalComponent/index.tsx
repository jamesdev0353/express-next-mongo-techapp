import ImageComp from "../ImageComp";
import styles from "./Modal.module.scss";

interface IModalProps {
  hideModal: boolean;
  toggleModal: (image: any, title: any, description: any) => void;
  src: string | StaticImageData;
  modalContentBody: string;
  modalHeader: string;
}

const ModalComponent = (props: IModalProps) => {
  if (props.hideModal) return null;
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            {props.src && (
              <ImageComp
                cardImg={styles.cardImg}
                src={props.src}
                height={"380px"}
                width={"500px"}
                alt={"dashboard"}
              />
            )}
            <h3>{props.modalHeader}</h3>
          </div>
          <div className={styles.modalBody}>
            <p>{props.modalContentBody}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
