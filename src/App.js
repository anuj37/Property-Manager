import './App.css';
import Forms from './components/form';
import { Provider } from 'react-redux';
import store from './storage/store';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/home';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
          {/* <Route path="/" exact render={(props) => <Header {...props}/>}/> */}
          <Switch >
              
              <Route path="/add" exact render={(props) => <Forms {...props}/>}/>
              <Route path="/admin"  render={(props) => <Home {...props}/>}/>
              <Redirect exact from="/" to="/admin"/>
              {/* <Route path="/not-found" exact component={NotFound}/>
              <Redirect to="/not-found"/> */}
          </Switch>
          
      </div>
    </Provider>
    
  );
}

export default App;
