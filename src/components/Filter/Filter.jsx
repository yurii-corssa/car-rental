import Dropdown from "components/Dropdown/Dropdown";
import {
  DropdownLabel,
  DropdownWrapper,
  FilterContainer,
  SearchBtn,
} from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllMake,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/adverts/advertsSelectors";
import { useState } from "react";
import {
  getAdverts,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";

const Filter = () => {
  const [make, setMake] = useState("");

  const itemsPerPage = useSelector(selectItemsPerPage);
  const allMake = useSelector(selectAllMake);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleClick = async () => {
    await dispatch(getCountAdverts({ make })).unwrap();
    dispatch(getAdverts({ itemsPerPage, make }));
  };

  return (
    <FilterContainer>
      <DropdownWrapper>
        <DropdownLabel>Car brand</DropdownLabel>

        <Dropdown
          options={allMake}
          placeholder={filter.make ? filter.make : "Enter the text"}
          onSelect={setMake}
        />
      </DropdownWrapper>

      <SearchBtn type="button" onClick={handleClick}>
        Search
      </SearchBtn>
    </FilterContainer>
  );
};

export default Filter;
