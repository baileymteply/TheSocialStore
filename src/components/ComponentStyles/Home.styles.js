import styled from 'styled-components';

export const Nav = styled.section`
    /* width: 100%;
    height: 15%;
    background-color: #5e6269; */
    background-color: gray;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    position: sticky;
    top: 0;
    box-shadow: 20px;
    `;
export const Wrapper = styled.section`
    width: 100%;
    height: 85%;
    background-color: #949597;
    color: #000;
    display: flex;
    position: relative;
    `;

export const LeftContainer = styled.section`
    width: 30%;
    padding: 30px;
    padding-right: 10px;
    `; 

export const RightContainer = styled.section`
    width: 70%;
    padding: 30px;
    padding-left: 15px;
    position: relative;
    `;
    
export const RTopDiv= styled.section`
    display: flex;
    padding-bottom: 20px;
    width: 100%;
    height: 10%;
    `;

export const RBottomDiv= styled.section`
    display: flex;
    padding-top: 10px;
    width: 100%;
    height: 90%;
    background-color: green;
    z-index: 0;
    `;
