import * as React from 'react';
import './card.scss';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

interface Props {
    image: string;
    title: string;
    subtitle: string;
    description?: string;
}

export const MapCard = (props: Props) => {
    return (
        <Card
            style={{maxHeight: '300px'}}>
            <CardMedia
                overlay={
                    <CardTitle 
                        style={{ padding: '10px' }} 
                        title={props.title} 
                        subtitle={props.subtitle} />}
                overlayContentStyle={{ paddingTop: '0' }}
                overlayStyle={{ padding: '12px' }}
                mediaStyle={{maxHeight: '100%'}}>

                <img src={props.image}/>
            </CardMedia>
        </Card>
    );
}