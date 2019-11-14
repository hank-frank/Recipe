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

	componentDidMount () {
		let dataPointsArray = []
		console.log(`chicken: `, this.props.importedRecipe);
		this.props.importedRecipe.ingredients.forEach( (each) => {
			dataPointsArray.push({ y: each.grams, label: each.ingredient })
		})
		// console.log(`dataPointsArray: `, dataPointsArray);
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
			exportFileName: this.props.importedRecipe.name,
			exportEnabled: true,
			title:{
				text: this.props.importedRecipe.name
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
		<div className="row-centered-content">
			<div className="chart-test">
				<CanvasJSChart options = {options}
					/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		</div>
		);
	}
}
module.exports = Chart;   