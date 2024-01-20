function NoteCard({ title, img, link }) {
  return (
    <div className="flex flex-col w-96 p-4 mt-10 ml-10 bg-[#cfb4fc]">
      <img className="w-[360px] h-[270px] mr-4" src={img} alt="Note Image" />

      <h1 className="text-xl font-bold">{title}</h1>

      <div className="flex justify-end">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-white px-4 py-2 rounded-full bg-[#24185d] hover:bg-[#1980d8]"
        >
          Go to note
        </a>
      </div>
    </div>
  );
}

export default NoteCard;
