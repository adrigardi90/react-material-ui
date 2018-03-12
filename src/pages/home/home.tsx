import * as React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';

import { Grid } from './options/grid';
import { Categories } from './options/categories'

import { mapList } from './../../api/data';


interface State {
  padding: number;
  cols: number;
}

export class Home extends React.Component<{}, State>{

  constructor() {
    super();
    this.state = {
      padding: 10,
      cols: 3
    }
  }

  handlePadding = (value) => this.setState({ padding: value })

  handleCols = (value) => this.setState({ cols: value })

  render() {
    return (
      <div>
        <h2>Choose different card lists</h2>

        <Tabs>
          <Tab label="GRID LIST" >
            <div>
              <Grid
                mapList={mapList()}
                cols={this.state.cols}
                padding={this.state.padding}
                onChangePadding={this.handlePadding}
                onChangeCols={this.handleCols} />
            </div>
          </Tab>

          <Tab label="BY CATEGORIES" >
            <div>
              <Categories
                mapList={mapList()} />
            </div>
          </Tab>

          <Tab
            label="onActive"
            data-route="/home">

          </Tab>
        </Tabs>
      </div>
    );
  }
}
