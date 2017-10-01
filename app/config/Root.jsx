import React from 'react';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { HashRouter as Router } from 'react-router-dom';

import { green600 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './Routes';

const Root = () => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: green600,
    }
  });

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        { renderRoutes(routes) }
      </Router>
    </MuiThemeProvider>
  );
};

export default Root;

