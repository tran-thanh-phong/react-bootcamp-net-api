import Counter from './app/components/Counter'
import DestinationList from './app/components/DestinationList';
import ResetApp from './app/components/ResetApp';
const App = () => {
  return (
    <div className="p-2 m-2 row text-center text-white">
      <ResetApp/>
      <Counter/>
      <DestinationList/>
    </div>
  );
};

export default App;
