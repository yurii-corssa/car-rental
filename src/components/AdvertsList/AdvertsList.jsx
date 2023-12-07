import AdvertItem from "components/AdvertItem/AdvertItem";
import { AdvertsListContainer } from "./AdvertsList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectIsLoading,
} from "../../redux/adverts/advertsSelectors";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { getAdverts } from "../../redux/adverts/advertsOperations";

const AdvertsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <AdvertsListContainer>
      {adverts.map((advert) => {
        return <AdvertItem />;
      })}
    </AdvertsListContainer>
  );
};

export default AdvertsList;
