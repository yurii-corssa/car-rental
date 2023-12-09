import DetailsInfo from "components/DetailsInfo/DetailsInfo";
import {
  DetailsContainer,
  CloseBtn,
  CloseIcon,
  DetailsImg,
  MainDetailsWrapper,
  DetailsTitle,
  Descriptions,
  AccessoriesWrapper,
  BlockTitle,
  ConditionsWrapper,
  ConditionsElementsWrapper,
  ConditionsElements,
  DetailsBtn,
  TitleWrapper,
  DataWrapper,
} from "./AdvertDetails.styled";

const AdvertDetails = ({ data, onClose }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    description,
    mileage,
    rentalConditions,
  } = data;
  const rentalConditionsArr = rentalConditions.split("\n");
  const minimumAge = rentalConditionsArr[0].split(" ");
  const newMileage = mileage
    .toString()
    .split("")
    .map((el, i) => (i === 0 ? `${el},` : el))
    .join("");

  return (
    <DetailsContainer>
      <CloseBtn onClick={onClose}>
        <CloseIcon />
      </CloseBtn>

      <DetailsImg src={img} alt={`${make} ${model}`} loading="lazy" />

      <DataWrapper>
        <MainDetailsWrapper>
          <TitleWrapper>
            <DetailsTitle>
              {make} <span>{model}</span>, {year}
            </DetailsTitle>

            <DetailsInfo data={data} variant="modalInfo" />
          </TitleWrapper>

          <Descriptions>{description}</Descriptions>
        </MainDetailsWrapper>

        <AccessoriesWrapper>
          <BlockTitle>Accessories and functionalities:</BlockTitle>

          <DetailsInfo data={data} variant="modalAccessory" />
        </AccessoriesWrapper>

        <ConditionsWrapper>
          <BlockTitle>Rental Conditions:</BlockTitle>
          <ConditionsElementsWrapper>
            <ConditionsElements>
              Minimum age: <span>{minimumAge[2]}</span>
            </ConditionsElements>
            <ConditionsElements>{rentalConditionsArr[1]}</ConditionsElements>
            <ConditionsElements>{rentalConditionsArr[2]}</ConditionsElements>
            <ConditionsElements>
              Mileage: <span>{newMileage}</span>
            </ConditionsElements>
            <ConditionsElements>
              Price: <span>{rentalPrice}</span>
            </ConditionsElements>
          </ConditionsElementsWrapper>
        </ConditionsWrapper>
        <DetailsBtn as="a" href="tel:+380730000000">
          Rental car
        </DetailsBtn>
      </DataWrapper>
    </DetailsContainer>
  );
};

export default AdvertDetails;
