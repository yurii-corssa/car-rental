import { ButtonStyled } from "components/GlobalStyles";
import Heart from "components/Icons/Heart";
import { styled } from "styled-components";

export const AdvertItemCard = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  width: 18px;
  height: 18px;
  cursor: pointer;

  svg {
    stroke: ${({ $isFavorite }) => {
      return $isFavorite ? "var(--accent)" : "var(--white)";
    }};
    fill: ${({ $isFavorite }) => {
      return $isFavorite ? "var(--accent)" : "transparent";
    }};
    stroke-opacity: ${({ $isFavorite }) => ($isFavorite ? 1 : 0.8)};

    transition: stroke var(--transition), stroke-opacity var(--transition),
      fill var(--transition);
  }

  &:hover,
  :focus {
    svg {
      fill: ${({ $isFavorite }) => {
        return $isFavorite ? "var(--accentActive)" : "var(--white)";
      }};
      stroke: ${({ $isFavorite }) => {
        return $isFavorite ? "var(--accentActive)" : "var(--white)";
      }};
      stroke-opacity: 1;
    }
  }
`;

export const FavoriteSvg = styled(Heart)`
  width: 100%;
  height: 100%;
`;

export const CardThumbImg = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  flex-shrink: 0;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform var(--transition);
`;

export const CardContent = styled.div`
  //
`;

export const CardTitle = styled.h2`
  //
`;

export const CardPrice = styled.p`
  //
`;

export const CardInfo = styled.p`
  //
`;

export const CardBtn = styled(ButtonStyled)`
  width: 274px;
`;
