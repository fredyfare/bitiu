import { useFetch } from "../../useFetch";

function CoinModal({ name, price, coinId, toggleModal }) {
  const { data, loading, error } = useFetch(
    `https://openapiv1.coinstats.app/coins/${coinId}/charts?period=1m`
  );

  return (
    <>
      <div
        onClick={toggleModal}
        className="fixed inset-0 bg-black bg-opacity-70 z-1000"
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#b0b0b1] z-1000 p-8 rounded-lg">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-xl">Current price: ${price} M.N.</p>
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading...</p>}

        <button
          onClick={toggleModal}
          className="text-white bg-[#24185d] hover:bg-[#1980d8] px-4 py-2 rounded-full mt-4"
        >
          Close
        </button>
      </div>
    </>
  );
}

export default CoinModal;
