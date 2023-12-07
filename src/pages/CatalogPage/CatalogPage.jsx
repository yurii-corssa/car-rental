import React from "react";
import { CatalogPageContainer } from "./CatalogPage.styled";
import AdvertsList from "components/AdvertsList/AdvertsList";

const CatalogPage = () => {
  return (
    <CatalogPageContainer>
      <AdvertsList />
    </CatalogPageContainer>
  );
};

export default CatalogPage;
