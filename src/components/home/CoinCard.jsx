import { useState } from "react";
import CoinModal from "./CoinModal";
import infoIcon from "../../assets/info-circle.svg";

function CoinCard({ coinId, icon, name, price }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-row w-96 p-4 mt-8 bg-[#cfb4fc]">
      <div>
        <img className="size-14 mr-8" src={icon} alt="Cripto Coins Image" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-xl">${price} M.N.</p>
        <button
          onClick={toggleModal}
          className="flex items-center justify-center text-sm text-white px-4 py-2 ml-28 rounded-full bg-[#24185d] hover:bg-[#1980d8]"
        >
          Details
          <span className="ml-2">
            <img src={infoIcon} alt="Details Icon" />
          </span>
        </button>
      </div>

      {modal && <CoinModal name={name} price={price} coinId={coinId} toggleModal={toggleModal} />}
    </div>
  );
}

export default CoinCard;
