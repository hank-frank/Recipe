import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import importedRecipe from "./recipes/recipes.json"

import Chart from "./chart.jsx"

function App () {
  const [chickenRecipe, setChickenRecipe] = useState([]);

  useEffect( () => {
    setChickenRecipe(importedRecipe);
  });

  return (
    <>
      <div>

      </div>

      <Chart
        chickenRecipe = { chickenRecipe }
      ></Chart>
      
    </>
    )

};

export default App;