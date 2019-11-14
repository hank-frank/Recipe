import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import importedRecipe from "./recipes/recipes.json"

import Header from "./header.jsx"
import Main from "./Main.jsx"
// import Chart from "./chart.jsx"

function App () {
  const [chickenRecipe, setChickenRecipe] = useState([]);

  // useEffect( () => {
  //   setChickenRecipe(importedRecipe);
  //   // console.log(`from app: `, chickenRecipe.ingredients ? chickenRecipe.ingredients.section1 : "whoops")
  // });

  return (
    <>
    <Header />
    <Main 
      importedRecipe = { importedRecipe }
    />

    {/* <Chart
      importedRecipe = { importedRecipe }
    /> */}
      
    </>
    )

};

export default App;