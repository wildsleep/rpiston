import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import ConnectionLogPage from './containers/ConnectionLogPage';
import ControlPage from './containers/ControlPage';
import LayoutPage from './containers/LayoutPage';
import ParametricControlPage from './containers/ParametricControlPage';
import RecordPage from './containers/RecordPage';

require('./main.css');

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<LayoutPage>
				<Switch>
					<Route path='/connectionLog' component={ConnectionLogPage} />
					<Route path='/parametric' component={ParametricControlPage} />
					<Route path='/record' component={RecordPage} />
					<Route path='/' component={ControlPage} />
				</Switch>
			</LayoutPage>
		</Router>
	</Provider>,
	document.getElementById('app')
);
