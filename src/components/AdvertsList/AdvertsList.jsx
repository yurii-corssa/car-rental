import AdvertItem from "components/AdvertItem/AdvertItem";
import {
  AdvertsListContainer,
  LoadMoreBtn,
  LoadMoreWrapper,
} from "./AdvertsList.styled";
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
  getAllMake,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";
import Modal from "components/Modal/Modal";
import AdvertDetails from "components/AdvertDetails/AdvertDetails";
import { setItemsPerPage } from "../../redux/adverts/advertsSlices";

const DEFAULT_COUNT = 12;

const AdvertsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAdvert, setOpenAdvert] = useState(null);
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
  const favorites = useSelector(selectFavorites);
  const showButton = itemsPerPage < count;

  const handleLoadMore = () => {
    dispatch(setItemsPerPage(itemsPerPage + DEFAULT_COUNT));
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
      </AdvertsListContainer>
      {isLoading && <Loader />}
      <LoadMoreWrapper>
        {showButton && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreBtn>
        )}
      </LoadMoreWrapper>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AdvertDetails data={openAdvert} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AdvertsList;
