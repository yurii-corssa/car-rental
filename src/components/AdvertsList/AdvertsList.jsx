import AdvertItem from "components/AdvertItem/AdvertItem";
import { AdvertsListContainer, LoadMoreBtn } from "./AdvertsList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectCount,
  selectFavorites,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/adverts/advertsSelectors";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import {
  getAdverts,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";
import Modal from "components/Modal/Modal";
import AdvertDetails from "components/AdvertDetails/AdvertDetails";
import { setItemsPerPage } from "../../redux/adverts/advertsSlices";

const DEFAULT_COUNT = 12;

const AdvertsList = () => {
  // const [limit, setLimit] = useState(DEFAULT_COUNT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAdvert, setOpenAdvert] = useState(null);
  // const { make } = useSelector(selectFilter);
  const [make] = useState(useSelector(selectFilter).make);
  const itemsPerPage = useSelector(selectItemsPerPage);

  // console.log(make);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdvertsData = async () => {
      if (itemsPerPage <= DEFAULT_COUNT) {
        await dispatch(getCountAdverts({ make })).unwrap();
      }
      dispatch(getAdverts({ itemsPerPage, make }));
    };

    fetchAdvertsData();
  }, [dispatch, itemsPerPage, make]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const count = useSelector(selectCount);
  const favorites = useSelector(selectFavorites);
  const showButton = itemsPerPage < count;

  const handleLoadMore = () => {
    dispatch(setItemsPerPage(itemsPerPage + DEFAULT_COUNT));
    // setLimit((state) => state + DEFAULT_COUNT);
  };

  const openModal = (dataAdvert) => {
    setIsModalOpen(true);
    setOpenAdvert(dataAdvert);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOpenAdvert(null);
  };

  return (
    <>
      <AdvertsListContainer>
        {adverts.map((advert) => {
          const isFavorite = favorites.includes(advert.id);
          return (
            <AdvertItem
              key={advert.id}
              data={advert}
              isFavorite={isFavorite}
              onOpen={openModal}
            />
          );
        })}
        {isLoading && <Loader />}
        {count === itemsPerPage}
        {showButton && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load More
          </LoadMoreBtn>
        )}
      </AdvertsListContainer>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AdvertDetails data={openAdvert} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AdvertsList;
