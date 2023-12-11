import { useDispatch, useSelector } from "react-redux";
import { FavoritesPageContainer } from "./FavoritesPage.styled";
import {
  selectAdverts,
  selectFavorites,
} from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import AdvertsList from "components/AdvertsList/AdvertsList";
import { getAdverts } from "../../redux/adverts/advertsOperations";

const FavoritesPage = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const favorites = useSelector(selectFavorites);
  const advertsItems = useSelector(selectAdverts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdvertsData = async () => {
      await dispatch(getAdverts({ itemsPerPage: "" })).unwrap();
    };

    if (!advertsItems.length) fetchAdvertsData();

    const favoriteItems = advertsItems.filter((advert) =>
      favorites.includes(advert.id)
    );
    setFavoriteAdverts(favoriteItems);
  }, [advertsItems, dispatch, favorites]);

  return (
    <FavoritesPageContainer>
      <AdvertsList adverts={favoriteAdverts} />
    </FavoritesPageContainer>
  );
};

export default FavoritesPage;
