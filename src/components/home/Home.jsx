import { useFetch } from "../../useFetch";
import CoinCard from "./CoinCard";

function Home() {
  const { data, loading, error } = useFetch(
    "https://openapiv1.coinstats.app/coins"
  );

  return (
    <div class="ml-10 mr-10 mb-10 flex flex-wrap justify-between">
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      {data &&
        data.map((coin) => (
          <CoinCard
            key={coin.id}
            coinId={coin.id}
            icon={coin.icon}
            name={coin.name}
            price={coin.price}
          />
        ))}
    </div>
  );
}

export default Home;
