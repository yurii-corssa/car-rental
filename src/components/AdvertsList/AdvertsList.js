import { useSelector } from "react-redux";
import { AdvertsListContainer } from "./AdvertsList.styled";
import { selectFavorites } from "../../redux/adverts/advertsSelectors";
import AdvertItem from "components/AdvertItem/AdvertItem";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import AdvertDetails from "components/AdvertDetails/AdvertDetails";

const AdvertsList = ({ adverts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAdvert, setOpenAdvert] = useState(null);

  const favorites = useSelector(selectFavorites);

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
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AdvertDetails data={openAdvert} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default AdvertsList;
