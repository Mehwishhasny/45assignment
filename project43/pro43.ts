interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function carCreate(
  manufacturerName: string,
  modelName: string,
  ...args: { [key: string]: any }[]
): Car {
  const car: Car = {
    manufacturer: manufacturerName,
    model: modelName,
  };
  args.forEach((arg) => {
    const [key, value] = Object.entries(arg)[0];
    car[key] = value;
  });

  return car;
}

const myCar = carCreate(
  "Honda Civic",
  "GLI",
  { Color: "Metallic Grey" },
  { Year: 2020 },
  { Features: ["Sunroof", "Automatic"] }
);
console.log(myCar);
