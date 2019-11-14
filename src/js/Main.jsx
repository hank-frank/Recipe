import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import Chart from "./chart.jsx"

function Main(props) {
const [recipeObj, setRecipeObj] = useState({});

// useEffect( () => {
//     let recipe = props 
//     console.log(recipe);
//     setRecipeObj(props.chickenRecipe);
// },[props.chickenRecipe]);

console.log(`from Main: `, props.importedRecipe.instructions );
console.log(`from Main: `, props.importedRecipe );

return (
    <>
    <div className="row-centered-content">
        <h1 className="recipe-title">{ props.importedRecipe.name }</h1>
    </div>
    <div className="divider-border" />
    <div className="row-centered-content">
        <p className="description">{ props.importedRecipe.description }</p>
    </div>
    <div className="row-centered-content">
        <h4 className="section-title">For the { props.importedRecipe.ingredients.section2.name }:</h4>
    </div>
    <div className="row-spaced-evenly">
        <div className="col-ingredients">
            <p className="ingredient-title">Ingredients:</p>
            {
                props.importedRecipe.ingredients.section2.ingredients.map( (each) => {
                return  <p className="ingredient">{each.amount} { each.ingredient }</p>
            })
            }
        </div>
        <div className="col-ingredients">
            <p className="instructions-title">Instructions:</p>
            {
                props.importedRecipe.ingredients.section2.instructions.map( (each) => {
                    console.log(each);
                    return <p className="ingredients">{ each }</p>
                    
                })
            }
        </div>
    </div>
        <Chart class="chart-test"
            importedRecipe = { props.importedRecipe.ingredients.section2 }
        />
        <div className="row-centered-content">{ props.importedRecipe.ingredients.section1.name }</div>
        <div className="row-spaced-evenly">
        <div className="col-ingredients">
            <p className="ingredient-title">Ingredients:</p>
            {
                props.importedRecipe.ingredients.section1.ingredients.map( (each) => {
                return  <p className="ingredient">{ each.amount } { each.ingredient }</p>
            })
            }
        </div>
        <div className="col-ingredients">
            <p className="instructions-title">Instructions:</p>
            {
                props.importedRecipe.ingredients.section1.instructions.map( (each) => {
                    return <p className="ingredients">{ each }</p>
                    
                })
            }
        </div>
    </div>
        <Chart 
            importedRecipe = { props.importedRecipe.ingredients.section1 }
        />
    </>
    )
};

export default Main;
