import React, { useEffect } from "react";
import { CatalogPageContainer } from "./CatalogPage.styled";
import Filter from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { resetAdvertsState } from "../../redux/adverts/advertsSlices";
import Catalog from "components/Catalog/Catalog";

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
      <Catalog />
    </CatalogPageContainer>
  );
};

export default CatalogPage;
