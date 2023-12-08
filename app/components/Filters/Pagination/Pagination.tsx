import { useStoreActions } from "@/app/hooks/useStoreActions";
import { FcNext, FcPrevious } from "react-icons/fc";
type PaginationPropsType = {
  page: number;
  perPage: number;
  totalItemsCount?: string;
};

const Pagination: React.FC<PaginationPropsType> = ({
  page: currentPage,
  perPage,
  totalItemsCount,
}) => {
  const { setFilters } = useStoreActions();
  const totalPages = Math.ceil(Number(totalItemsCount) / perPage);
  return (
    <div className="flex flex-row space-x-4 justify-center">
      {currentPage !== 1 && (
        <button
          onClick={() =>
            setFilters({
              page: currentPage - 1,
              perPage: 10,
            })
          }
        >
          <div className="border px-[6px] py-[4px] border-blue-400 rounded-md shadow-sm shadow-slate-400">
            <FcPrevious />
          </div>
        </button>
      )}
      <h3 className="border px-[10px] py-[2px] border-blue-400 rounded-md shadow-sm shadow-slate-400">
        {currentPage}
      </h3>
      {currentPage < totalPages && (
        <button
          onClick={() =>
            setFilters({
              page: currentPage + 1,
              perPage: 10,
            })
          }
        >
          <div className="border px-[6px] py-[4px] border-blue-400 rounded-md shadow-sm shadow-slate-400">
            <FcNext />
          </div>
        </button>
      )}
    </div>
  );
};

export default Pagination;
