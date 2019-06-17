import React from 'react';
import styled from 'styled-components';
import random from 'lodash/random';
import chart from './chart.png';
import chart2 from './chart2.png';
import chart3 from './chart3.png';
import chart4 from './chart4.png';

const urls = [
    chart, chart2, chart3, chart4
];

const charts = Array.from(new Array(20).keys())
    .map(() => urls[random(0, 3)])

const Chart = styled.div`
    margin: 2%;
    flex: 0 0 45%;
    height: 30vh;
    background-image: url(${props => props.chart});
    background-size: cover;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0);
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
        box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.1);
    }
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Aside = styled.div`
    flex: 0 0 20%;
`;

const List = styled.div`
    flex: 0 0 80%;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    overflow: ${props => props.withScroll ? 'scroll' : 'hidden'};
`;

export default function Boards(props) {
    return (
        <Container>
            <Aside/>
            <List withScroll={props.active}>
                {charts.map((url, i) => <Chart key={i} chart={url}/>)}
            </List>
        </Container>
    );
}