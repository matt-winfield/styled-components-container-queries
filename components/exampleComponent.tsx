import styled from 'styled-components';
import { ContainerBoundary } from './containerBoundary';

const sizes = {
    'small': {
        maxWidth: 399
    },
    'medium': {
        minWidth: 400,
        maxWidth: 799
    },
    'large': {
        minWidth: 800
    }
}

const Container = styled(ContainerBoundary)`
    background-color: orange;
    padding: 10px;
    flex-grow: 1;

    &.small {
        background-color: red;
    }

    &.medium {
        background-color: green;
    }

    &.large {
        background-color: blue;
    }
`;

export const ExampleComponent = () => {
    return (
        <Container query={sizes}>
            <h1>Example Component</h1>
        </Container>
    )
}