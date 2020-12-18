import React from 'react';
import { Homepage } from "./components/Organisms/pages/Homepage";
import { MyPokemons } from "./components/Organisms/pages/MyPokemons"
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Molecules/navigation/NavBar";


function App() {

  return (
      <>
        <NavBar />
        <Switch>
            <Route path="/mypokemons">
                <MyPokemons />
            </Route>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route path="/">
                404 Page Not Found, sorry
            </Route>
        </Switch>
      </>
  )
}

export default App;
