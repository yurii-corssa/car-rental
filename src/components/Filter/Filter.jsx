import Dropdown from "components/Dropdown/Dropdown";
import { FilterContainer, SearchBtn } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllMake,
  selectFilter,
} from "../../redux/adverts/advertsSelectors";
import { useState } from "react";
import { setFilter } from "../../redux/adverts/advertsSlices";
import {
  getAdverts,
  getCountAdverts,
} from "../../redux/adverts/advertsOperations";

const Filter = () => {
  const [make, setMake] = useState("");

  const allMake = useSelector(selectAllMake);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleClick = async () => {
    await dispatch(getCountAdverts({ make })).unwrap();
    dispatch(getAdverts({ make }));
  };

  return (
    <FilterContainer>
      <Dropdown
        options={allMake}
        placeholder={filter.make ? filter.make : "Enter the text"}
        onSelect={setMake}
      />

      <SearchBtn type="button" onClick={handleClick}>
        Search
      </SearchBtn>
    </FilterContainer>
  );
};

export default Filter;
