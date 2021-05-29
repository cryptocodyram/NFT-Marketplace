import './App.css';
import { Header } from './components/Header';
import { TokenPage } from './components/TokenPage';
import { Switch, Route ,BrowserRouter} from 'react-router-dom';
import { Collection } from './components/Collection';


function App() {
  return (
    <div className="App">
    <Header/>
      <BrowserRouter>
      <Switch>
       <Route path="/asset" component={TokenPage}  />
       <Route path="/collection" component={Collection}  />

       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
