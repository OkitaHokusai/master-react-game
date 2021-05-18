
import GameArea from './components/GameArea';
import allReducers from './reducers';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import './index.css';

const gameStore = createStore (
  allReducers
);


function App() {
  return (
    <Provider store={gameStore}>
      <div className="App">
          <h2>Wagon</h2>
          <GameArea/>
      </div>
    </Provider>
  );
}

export default App;
