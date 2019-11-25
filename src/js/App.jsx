import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import importedRecipe from "./recipes/recipes.json"

import Header from "./header.jsx"
import Main from "./Main.jsx"
// import Chart from "./chart.jsx"

function App () {
  const [chickenRecipe, setChickenRecipe] = useState([]);
  const[cocktail, setCocktail] = useState({});


  function apiTest () {
    fetch(`/cocktails`)
    .then((response) => {
      return response = response.json()
    })
    .then((data) => {
      setCocktail(data);
    })
    .catch(err => console.log(`whoopsies`, err))
  };

  return (
    <>
    <Header />
    <button className="test-button" onClick={ ()=> apiTest()}>Testing!</button>
    <Main 
      importedRecipe = { importedRecipe }
    />      
    </>
    )

};

export default App;