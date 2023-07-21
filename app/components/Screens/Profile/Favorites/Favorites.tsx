import { ISong } from "@/app/types/music/song.interface";

type FavoritesType = {
  favorites: ISong[] | null | undefined;
};

const Favorites: React.FC<FavoritesType> = ({ favorites }) => {
  return <div className="flex justify-center pt-10">Favorites</div>;
};

export default Favorites;
