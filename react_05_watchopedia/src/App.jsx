import Counter from "./Components/Counter";
import MoviePage from "./Components/MovieComponents/MoviePage";

const App = () => {
  return (
    <div className="p-2 m-2 row text-center">
      <Counter />
      <MoviePage />
    </div>
  );
};

export default App;
