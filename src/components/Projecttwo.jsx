import calci from "../images/calculator/calculator1.png";
import recipe from "../images/recipemaker/recipe1.png";
import weather from "../images/weather/weather1.png";

const project1 = {
  id: 4,
  title: "Calculator App",
  description:
    "The React Calculator app is a user-friendly web application designed to perform arithmetic operations such as addition, subtraction, multiplication, and division. With its intuitive interface, users can input numerical values and execute calculations effortlessly. The app supports both basic and advanced mathematical operations, providing a versatile tool for various calculation needs.",
  url: calci,
};

const project2 = {
  id: 5,
  title: "Recipe Maker",
  description:
    "The React Recipe Maker app is a convenient and user-friendly web application designed to help users discover and explore a wide variety of recipes. Leveraging the power of React and a food API, this app provides users with an extensive database of recipes from various cuisines around the world.",
  url: recipe,
};

const project3 = {
  id: 6,
  title: "Weather App",
  description:
    "The React Weather App is a dynamic and user-friendly web application designed to provide users with real-time weather information for any location around the world. Leveraging the power of React and a weather API, this app delivers accurate and up-to-date weather forecasts, enabling users to plan their activities and stay informed about weather conditions.",
  url: weather,
};

const Projecttwo = [project1, project2, project3];
export default Projecttwo;
