import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from './store/configureStore';
import LayoutPage from './containers/LayoutPage';
import ControlPage from './containers/ControlPage';
import RecordPage from './containers/RecordPage';
import ParametricControlPage from './containers/ParametricControlPage';
import ConnectionLogPage from './containers/ConnectionLogPage';

require('./main.less');

const history = createBrowserHistory();
const store = configureStore();

React.render(
	<Provider store={store}>
		{() =>
			<Router history={history}>
				<Route path='/' component={LayoutPage}>
					<IndexRoute component={ControlPage} />
					<Route path='/record' component={RecordPage} />
					<Route path='/parametric' component={ParametricControlPage} />
					<Route path='/connectionLog' component={ConnectionLogPage} />
				</Route>
			</Router>
		}
	</Provider>,
	document.getElementById('app')
);
