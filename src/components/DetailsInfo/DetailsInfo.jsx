import { Divider } from "components/AdvertDetails/AdvertDetails.styled";
import { InfoBlock } from "./DetailsInfo.styled";
import { nanoid } from "nanoid";

const DetailsInfo = ({ data, variant }) => {
  const addressParts = data.address.split(",").map((part) => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  const cardInfo = (
    <InfoBlock>
      <span>{city}</span>
      <Divider />
      <span>{country}</span>
      <Divider />
      <span>{data.rentalCompany}</span>
      <Divider />
      <span>{data.type}</span>
      <Divider />
      <span>{data.model}</span>
      <Divider />
      <span>{data.id}</span>
      <Divider />
      <span>{data.functionalities[0]}</span>
    </InfoBlock>
  );

  const modalInfo = (
    <div>
      <InfoBlock>
        <span>{city}</span>
        <Divider />
        <span>{country}</span>
        <Divider />
        <span>{`Id: ${data.id}`}</span>
        <Divider />
        <span>{`Year: ${data.year}`}</span>
        <Divider />
        <span>{`Type: ${data.type}`}</span>
      </InfoBlock>
      <InfoBlock>
        <span>{`Fuel Consumption: ${data.fuelConsumption}`}</span>
        <Divider />
        <span>{`Engine Size: ${data.engineSize}`}</span>
      </InfoBlock>
    </div>
  );

  const modalAccessory = (
    <div>
      <InfoBlock>
        {data.accessories.map((el, i, arr) => {
          return (
            <span key={nanoid()}>
              <span>{el}</span>
              {i !== arr.length - 1 && <Divider />}
            </span>
          );
        })}
      </InfoBlock>
      <InfoBlock>
        {data.functionalities.map((el, i, arr) => {
          return (
            <span key={nanoid()}>
              <span>{el}</span>
              {i !== arr.length - 1 && <Divider />}
            </span>
          );
        })}
      </InfoBlock>
    </div>
  );

  switch (variant) {
    case "modalInfo":
      return modalInfo;

    case "modalAccessory":
      return modalAccessory;

    default:
      return cardInfo;
  }
};

export default DetailsInfo;
