import { createDetailsArr } from "helpers/createDetailsArr";
import {
  DetailsContainer,
  CloseBtn,
  CloseIcon,
  DetailsImg,
  MainDetailsWrapper,
  DetailsTitle,
  BlockInfo,
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
import { addDividers } from "helpers/addDividers";

const AdvertDetails = ({ data, onClose }) => {
  console.log(data);
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    description,
    mileage,
    accessories,
    functionalities,
  } = data;

  const detailsStr = addDividers(createDetailsArr(data), 5);
  const accessoryFeaturesStr = addDividers(
    [...accessories, ...functionalities],
    0
  );

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

            <BlockInfo>{detailsStr}</BlockInfo>
          </TitleWrapper>

          <Descriptions>{description}</Descriptions>
        </MainDetailsWrapper>

        <AccessoriesWrapper>
          <BlockTitle>Accessories and functionalities:</BlockTitle>

          <BlockInfo>{accessoryFeaturesStr}</BlockInfo>
        </AccessoriesWrapper>

        <ConditionsWrapper>
          <BlockTitle>Rental Conditions:</BlockTitle>
          <ConditionsElementsWrapper>
            <ConditionsElements>
              Minimum age : <span>25</span>
            </ConditionsElements>
            <ConditionsElements>
              Valid driver&rsquo;s license
            </ConditionsElements>
            <ConditionsElements>Security deposite required</ConditionsElements>
            <ConditionsElements>
              Mileage: <span>{mileage}</span>
            </ConditionsElements>
            <ConditionsElements>
              Price: <span>{rentalPrice}</span>
            </ConditionsElements>
          </ConditionsElementsWrapper>
        </ConditionsWrapper>
        <DetailsBtn>Rental car</DetailsBtn>
      </DataWrapper>
    </DetailsContainer>
  );
};

export default AdvertDetails;
