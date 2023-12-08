import { useState } from "react";
import {
  AdvertItemCard,
  CardBtn,
  CardContent,
  CardImg,
  CardInfo,
  CardPrice,
  CardThumbImg,
  CardTitle,
  FavoriteBtn,
  FavoriteSvg,
} from "./AdvertItem.styled";

const AdvertItem = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { img, make, model, year, rentalPrice } = data;

  const cardInfo = "";

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleLearnMoreClick = () => {};

  return (
    <AdvertItemCard>
      <FavoriteBtn onClick={handleFavoriteClick} $isFavorite={isFavorite}>
        <FavoriteSvg />
      </FavoriteBtn>
      <CardThumbImg>
        <CardImg src={img} alt={`${make} ${model}`} loading="lazy" />
      </CardThumbImg>
      <CardContent>
        <CardTitle>
          {make} <span>{model}</span>, {year}
        </CardTitle>
        <CardPrice>{rentalPrice}</CardPrice>
        <CardInfo>{cardInfo}</CardInfo>
      </CardContent>
      <CardBtn type="button" onClick={handleLearnMoreClick}>
        Learn more
      </CardBtn>
    </AdvertItemCard>
  );
};

export default AdvertItem;
