//* Functions

//Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

//Function declaration
function divide(a: number, b: number): number {
  return a / b;
}

//Function that return nothing (special type: "void")
const logger = (message: string): void => {
  console.log(message);
};

//Function that never end success
const throwError = (message: string): never => {
  throw new Error(message);
};

//Destructuring function arguments (object)
const forecast = {
  date: new Date(),
  weather: 'sunny',
};

//Before
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//After
const logWeatherWithDestructuring = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

//Object's destructuring
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(newAge: number): void {
    this.age = newAge;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
