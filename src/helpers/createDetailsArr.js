export const createDetailsArr = (data) => {
  const addressParts = data.address.split(",").map((part) => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  return [
    city,
    country,
    `Id: ${data.id}`,
    `Year: ${data.year}`,
    `Type: ${data.type}`,
    `Fuel Consumption: ${data.fuelConsumption}`,
    `Engine Size: ${data.engineSize}`,
  ];
};
