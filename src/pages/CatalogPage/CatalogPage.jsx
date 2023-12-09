import React from "react";
import { CatalogPageContainer } from "./CatalogPage.styled";
import AdvertsList from "components/AdvertsList/AdvertsList";
import Filter from "components/Filter/Filter";

const CatalogPage = () => {
  return (
    <CatalogPageContainer>
      <Filter />
      <AdvertsList />
    </CatalogPageContainer>
  );
};

export default CatalogPage;
