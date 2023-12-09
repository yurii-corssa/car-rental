import {
  AdvertItemCard,
  CardBtn,
  CardContent,
  CardImg,
  CardPrice,
  CardThumbImg,
  CardTitle,
  CardTitleWrapper,
  FavoriteBtn,
  FavoriteSvg,
} from "./AdvertItem.styled";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/adverts/advertsSlices";
import DetailsInfo from "components/DetailsInfo/DetailsInfo";

const AdvertItem = ({ data, isFavorite, onOpen }) => {
  const dispatch = useDispatch();

  const { id, img, make, model, year, rentalPrice } = data;

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  const handleLearnMoreClick = () => {
    onOpen(data);
  };

  return (
    <AdvertItemCard>
      <CardThumbImg>
        <CardImg src={img} alt={`${make} ${model}`} loading="lazy" />
      </CardThumbImg>

      <FavoriteBtn onClick={handleFavoriteClick} $isFavorite={isFavorite}>
        <FavoriteSvg />
      </FavoriteBtn>
      <CardContent>
        <CardTitleWrapper>
          <CardTitle>
            {make} <span>{model}</span>, {year}
          </CardTitle>

          <CardPrice>{rentalPrice}</CardPrice>
        </CardTitleWrapper>

        <DetailsInfo data={data} />
      </CardContent>

      <CardBtn type="button" onClick={handleLearnMoreClick}>
        Learn more
      </CardBtn>
    </AdvertItemCard>
  );
};

export default AdvertItem;
