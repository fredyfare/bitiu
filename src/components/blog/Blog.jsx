import { useFetch } from "../../useFetch";
import NoteCard from "./NoteCard";

function Blog() {
  const { data, loading, error } = useFetch(
    "https://openapiv1.coinstats.app/news"
  );

  return (
    <div class="ml-10 mr-10 mb-10 flex flex-wrap justify-between">
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      {data &&
        data.map((news) => (
          <NoteCard
            key={news.id}
            img={news.imgUrl}
            title={news.title}
            link={news.link}
          />
        ))}
    </div>
  );
}

export default Blog;
