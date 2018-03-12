import * as React from 'react';
import {Home} from './pages/home/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const App: React.StatelessComponent<{}> = () => (
  // <div className="container-fluid">
  //   <h1 className="jumbotron text-center">GAUGE CHART</h1>
  //   <GaugeChart />
  // </div>

<MuiThemeProvider>
 <Home/>
</MuiThemeProvider>
);

