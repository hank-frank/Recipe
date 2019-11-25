import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import importedRecipe from "./recipes/recipes.json"

import Header from "./header.jsx"
import Main from "./Main.jsx"
import Search from "./search.jsx"
// import Chart from "./chart.jsx"

function App () {
  const [chickenRecipe, setChickenRecipe] = useState([]);
  const [cocktail, setCocktail] = useState({});
  const [searchResult, setSearchResult] = useState([]);


  function apiTest () {
    console.log(searchResult)
    fetch(`/cocktails`)
    .then((response) => {
      return response = response.json()
    })
    .then((data) => {
      setCocktail(data);
    })
    .catch(err => console.log(`whoopsies`, err))
  };

  const test2 = (searchValue) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`)
    .then((response) => {
      return response = response.json()
    })
    .then ((data) => {
      setSearchResult(data.drinks)
      
    })
  }

  return (
    <>
    <Header />
    <button className="test-button" onClick={ ()=> apiTest()}>Testing!</button>
    <button className="test-button" onClick={ ()=> test2()}>Test 2</button>
    <Search 
    search = { test2 }
    resultArray = { searchResult }
    />
    <Main 
      importedRecipe = { importedRecipe }
    />      
    </>
    )

};

export default App;