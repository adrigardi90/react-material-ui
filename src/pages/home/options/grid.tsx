import * as React from 'react';

import { MapCard } from './../../../component/card/card';

import { GridList, GridTile } from 'material-ui/GridList';
import Slider from 'material-ui/Slider';

interface Props {
    mapList: Array<any>;
    cols: number;
    padding: number;
    onChangePadding: (value: number) => void;
    onChangeCols: (value: number) => void;
}

const style: React.CSSProperties = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '80px'
    },
    gridList: {
        width: '90%',
        overflowY: 'auto',
    },
};

const handlePaddingEvent = (props: Props) => (event, value) => props.onChangePadding(value);

const handleColsEvent = (props: Props) => (event, value) => props.onChangeCols(value);

export const Grid = (props: Props) => {
    return (
        <div>

            <h3>Padding: {props.padding}</h3>
            <Slider
                sliderStyle={{ width: '60%', margin: '0 auto' }}
                min={0}
                max={100}
                step={1}
                value={props.padding}
                onChange={handlePaddingEvent(props)} />

            <h3>Columns: {props.cols}</h3>
            <Slider
                sliderStyle={{ width: '60%', margin: '0 auto' }}
                min={3}
                max={5}
                step={1}
                value={props.cols}
                onChange={handleColsEvent(props)} />

            <div style={style.root}>
                <GridList
                    cols={props.cols}
                    padding={props.padding}
                    cellHeight='auto'
                    style={style.gridList}>

                    {props.mapList.map((map, i) => (
                        <MapCard
                            key={i}
                            title={map.title}
                            image={map.image}
                            subtitle={map.subtitle} />
                    ))}
                </GridList>
            </div>
        </div>
    );
}