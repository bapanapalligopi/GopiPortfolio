import movie from "../images/movie/movie1.png";
import tictac from "../images/tictac/tic1.png";
import todo from "../images/todoapp/todo1.png";

const project1 = {
  id: 1,
  title: "Todo App",
  description:
    "I developed a todo app using React, enabling users to efficiently organize their tasks with intuitive features. The application provides a user-friendly interface for creating, tracking, and managing tasks seamlessly. Leveraging React's capabilities, the todo app offers a responsive and dynamic experience for enhanced productivity.",
  url: todo,
};

const project2 = {
  id: 2,
  title: "Movie Review Application",
  description:
    "I've developed a movie review application using Spring Boot, offering users a comprehensive platform to explore new movies, access ratings, and utilize sorting functionalities. With features enabling sorting by rating, release date, and genre, users can easily navigate and discover movies based on their preferences.",
  url: movie,
};

const project3 = {
  id: 3,
  title: "Tic Tac Toe Game",
  description:
    "I've created a Tic Tac Toe game using React, providing users with an engaging and interactive gaming experience. The game offers a classic tic-tac-toe grid where players can take turns marking their moves.the game includes logic to determine the winner, ensuring an immersive and enjoyable gameplay for all users.",
  url: tictac,
};

const Projectsone = [project1, project2, project3];
export default Projectsone;
