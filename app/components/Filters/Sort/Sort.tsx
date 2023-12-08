import { useStoreActions } from "@/app/hooks/useStoreActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { EMusicFilters } from "@/app/types/music/song-object.interface";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Sort: React.FC = () => {
  const [openSortTypes, setOpenSortTypes] = useState<boolean>(false);
  const { setFilters } = useStoreActions();
  const { sort } = useTypedSelector((state) => state.filter);
  const sortTypes = ["most-popular", "less-popular", "newest", "oldest"];

  const selectSortType = (type: EMusicFilters) => {
    setFilters({ sort: type, page: 1, perPage: 10 });
  };

  return (
    <div className="relative flex flex-col space-x-2">
      <div className="flex flex-row border border-gray-400 rounded-md shadow-slate-300 shadow-md py-[6px] px-3 space-x-2">
        <h3 className="flex flex-row font-light">Sort By</h3>
        <div
          className="flex flex-row cursor-pointer"
          onClick={() => setOpenSortTypes((state) => !state)}
        >
          <h3 className="w-[102px] text-center">{sort}</h3>
          <MdOutlineArrowDropDown className="mt-[5px]" />
        </div>
      </div>

      {openSortTypes && (
        <div
          className="absolute top-[38px] right-0 bg-white border border-gray-400 rounded-md p-3 space-y-1"
          onClick={() => setOpenSortTypes((state) => !state)}
        >
          {sortTypes.map((type, i) => (
            <div
              className="cursor-pointer hover:text-violet-500"
              onClick={() => selectSortType(type as EMusicFilters)}
              key={i}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
