import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";

const Music: React.FC = () => {
  const { data, status, setStateSongDataType } = useMusicQuery();

  {
    status === "loading" && "Loading";
  }
  {
    status === "error" && "Error";
  }

  return (
    <div>
      {data?.map((song) => (
        <div key={song.id}>{song.title}</div>
      ))}
    </div>
  );
};

export default Music;
