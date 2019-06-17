import React, {forwardRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5%;
    height: 65vh;
`;

const Greeting = forwardRef((_, ref) => {
    return (
        <Container ref={ref}>
            <div>
                <h1>Greeting</h1>
                <h2>Welcome to App</h2>
            </div>
        </Container>
    );
});

export default Greeting;
