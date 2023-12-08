import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";
import styles from "./Music.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { MdAccessTime } from "react-icons/md";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import MusicData from "./MusicData";
import Sort from "../../Filters/Sort/Sort";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IFilter } from "@/app/store/filters/filter.interface";
import Pagination from "../../Filters/Pagination/Pagination";
import { EMusicFilters } from "@/app/types/music/song-object.interface";

const Music: React.FC = () => {
  const {} = useStoreActions();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { filter } = useTypedSelector((state) => state);
  const { data, status } = useMusicQuery(filter);

  useEffect(() => {
    updateQueryParams(filter);
  }, [filter]);

  const updateQueryParams = (filter: IFilter) => {
    const {
      page = 1,
      perPage = 10,
      search,
      sort = EMusicFilters.OLDEST,
    } = filter;
    const params = new URLSearchParams(searchParams?.toString());

    params.set("sort", sort);
    if (search !== undefined) params.set("search", search);
    params.set("page", page.toString());
    params.set("perPage", perPage.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  {
    status === "loading" && "Loading";
  }
  {
    status === "error" && "Error";
  }

  return (
    <div className={styles.main}>
      <div className="flex justify-end mr-8 mt-2 mb-2">
        <Sort />
      </div>
      <div className={styles.fields}>
        <p className={styles.order}>#</p>
        <p className={styles.avatar}></p>
        <p className={styles.titleTitle}>Title</p>
        <p className={styles.album}>Album</p>
        <p className={styles.add}></p>
        <p className={styles.time}>
          <MdAccessTime className={styles.timeIcon} />
        </p>
      </div>
      <div>
        <MusicData data={data} />
      </div>
      <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2">
        <Pagination
          page={filter.page}
          perPage={filter.perPage}
          totalItemsCount={data?.length}
        />
      </div>
    </div>
  );
};

export default Music;
