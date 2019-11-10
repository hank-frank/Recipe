var React = require('react');
var Component = React.Component;
import * as CanvasJSReact from '../canvasjs-2.3.2/canvasjs.react';
// var CanvasJSReact = require('../canvasjs-2.3.2/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chickenRecipeSauceArray: []
		};
		
	}

	componentDidUpdate () {
		let dataPointsArray = []
		console.log(`chicken: `, this.props.chickenRecipe.ingredients.section2.ingredients);
		this.props.chickenRecipe.ingredients.section2.ingredients.forEach( (each) => {
			dataPointsArray.push({ y: 1, label: each })
		})
		console.log(`dataPointsArray: `, dataPointsArray);
		if (this.state.chickenRecipeSauceArray.length === 0) {
		this.setState({
			chickenRecipeSauceArray: dataPointsArray
		})
	}
	}


	render() {
		const options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: this.props.chickenRecipe.name,
			exportEnabled: true,
			title:{
				text: this.props.chickenRecipe.name
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: this.state.chickenRecipeSauceArray
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
module.exports = Chart;   