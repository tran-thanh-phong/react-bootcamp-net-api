import CyclOPediaClassPage from "./Components/Layout/Cycl/CyclOPediaClassPage";
import CyclOPediaFuncPage from "./Components/Layout/Cycl/CyclOPediaFuncPage";

const App = () => {
  return (
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-cent">Class Component</span>
        <CyclOPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-cent">Function Component</span>
        <CyclOPediaFuncPage />
      </div>
    </div>
  );
};

export default App;
