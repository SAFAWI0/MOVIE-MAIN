import "./moreInformation.css";
import { useAppStore } from "../../store";
import { Modal } from "antd";

export const MoreInformation = () => {
  const { isOpenModal, setIsOpenModal, moreInf } = useAppStore();

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="moreInformation">
      <Modal
        title="Information About The Movie"
        onOk={handleCancel}
        open={isOpenModal}
        onCancel={handleCancel}
        footer={null}
      >
        {moreInf && (
          <div className="deta-mov">
            <div className="details">
              <span>Budget :</span>
              <p>{Number(moreInf.budget).toLocaleString("en")}</p>
            </div>
            <div className="details">
              <span>Runtime :</span>
              <p>{moreInf.runtime} m.</p>
            </div>
            <div className="details">
              <span>Original Country :</span>
              <p>{moreInf.origin_country}</p>
            </div>
            <div className="details">
              <span>Popularity :</span>
              <p>{moreInf.popularity} </p>
            </div>
            <div className="details">
              <span>Revenue :</span>
              <p>{Number(moreInf.revenue).toLocaleString("en")} </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
