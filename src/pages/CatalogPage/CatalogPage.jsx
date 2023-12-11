import React, { useEffect } from "react";
import { CatalogPageContainer } from "./CatalogPage.styled";
import AdvertsList from "components/AdvertsList/AdvertsList";
import Filter from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { resetAdvertsState } from "../../redux/adverts/advertsSlices";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetAdvertsState());
    };
  }, [dispatch]);

  return (
    <CatalogPageContainer>
      <Filter />
      <AdvertsList />
    </CatalogPageContainer>
  );
};

export default CatalogPage;
