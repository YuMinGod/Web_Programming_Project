import styled from 'styled-components';
import mediaSize from './mediaSize';
export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    position: relative;
    @media only screen and (max-width: ${mediaSize.W1220}){
        width: 100%;
    }
`;

