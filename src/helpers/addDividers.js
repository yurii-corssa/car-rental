import { Divider } from "components/AdvertDetails/AdvertDetails.styled";

export const addDividers = (arr, itemsPerRow) => {
  return arr.map((el, index, arr) => (
    <>
      <span key={el}>{el}</span>
      {index === itemsPerRow - 1 ? (
        <br />
      ) : index !== arr.length - 1 ? (
        <Divider />
      ) : null}
    </>
  ));
};
