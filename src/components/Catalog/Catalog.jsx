import { LoadMoreBtn, LoadMoreWrapper } from "./Catalog.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectCount,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/adverts/advertsSelectors";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import {
  getAdverts,
  getAllMake,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";
import { setItemsPerPage } from "../../redux/adverts/advertsSlices";
import AdvertsList from "components/AdvertsList/AdvertsList";

const DEFAULT_COUNT = 12;

const Catalog = () => {
  const [make] = useState(useSelector(selectFilter).make);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdvertsData = async () => {
      if (itemsPerPage <= DEFAULT_COUNT) {
        dispatch(getAllMake());
        await dispatch(getCountAdverts({ make })).unwrap();
      }
      dispatch(getAdverts({ itemsPerPage, make }));
    };

    fetchAdvertsData();
  }, [dispatch, itemsPerPage, make]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const count = useSelector(selectCount);
  const showButton = itemsPerPage < count;

  const handleLoadMore = () => {
    dispatch(setItemsPerPage(itemsPerPage + DEFAULT_COUNT));
  };

  return (
    <>
      <AdvertsList adverts={adverts} />

      {isLoading && <Loader />}

      <LoadMoreWrapper>
        {showButton && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreBtn>
        )}
      </LoadMoreWrapper>
    </>
  );
};

export default Catalog;
