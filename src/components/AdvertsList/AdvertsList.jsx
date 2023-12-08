import AdvertItem from "components/AdvertItem/AdvertItem";
import { AdvertsListContainer, LoadMoreBtn } from "./AdvertsList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
  selectCount,
  selectFavorites,
} from "../../redux/adverts/advertsSelectors";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import {
  getAdverts,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";
import Modal from "components/Modal/Modal";
import AdvertDetails from "components/AdvertDetails/AdvertDetails";

const DEFAULT_COUNT = 12;

const AdvertsList = () => {
  const [limit, setLimit] = useState(DEFAULT_COUNT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAdvert, setOpenAdvert] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (limit <= DEFAULT_COUNT) {
      dispatch(getCountAdverts());
    }

    dispatch(getAdverts({ limit }));
  }, [dispatch, limit]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const count = useSelector(selectCount);
  const favorites = useSelector(selectFavorites);
  const showButton = limit < count;

  const handleLoadMore = () => {
    setLimit((state) => state + DEFAULT_COUNT);
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
        {count === limit}
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
