import * as React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

interface Props {
  mapList: Array<any>;
}

const styles: React.CSSProperties = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export const Categories = (props: Props) => {
  return (
    <div>
      <div style={styles.root}>
        <h3>Politics</h3>
        <GridList style={styles.gridList} cols={2.2}>
          {props.mapList.map((tile, i) => (
            <GridTile
              key={i}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
              <img src={tile.image} />
            </GridTile>
          ))}
        </GridList>
      </div>

      <div style={styles.root}>
        <h3>Work</h3>
        <GridList style={styles.gridList} cols={2.2}>
          {props.mapList.map((tile, i) => (
            <GridTile
              key={i}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
              <img src={tile.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}