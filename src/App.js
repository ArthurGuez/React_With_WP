import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pizzas from './components/Pizzas';
import PizzaPage from './components/PizzaPage';

function App() {
	return (
		<Router>
			<Fragment>
				<Route exact path="/" component={Pizzas} />
				<Route exact path="/post/:pizzaId" component={PizzaPage} />
			</Fragment>
		</Router>
	);
}

export default App;
