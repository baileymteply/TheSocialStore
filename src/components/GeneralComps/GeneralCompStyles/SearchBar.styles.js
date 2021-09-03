import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-width: 4px;
    border-color: rgb(212, 212, 212);
    margin-right: 10px;
    `;

export const SearchBarComps = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    `;

export const TextField = styled.input`
    background-color: white;
    position: relative;
    padding: 10px;
    height: 100%;   
    width: 100%;
    color: black;
    align-items: center;
    font-size: 28px;
    /* border-color: rgb(212, 212, 212); */
`;

export const SearchIcon = styled.image`
    width: 5%;
    background-color: white;
    height: 100%;
    position: relative;
    display: flex;
    `;

export const ClearIcon = styled.button`
    width: 5%;
    background-color: white;
    height: 100%;
    position: relative;
    display: flex;
`;

export const SearchResults = styled.div`
    width: 101%;
    height: 200px;
    border-bottom: 4px solid;
    border-left: 4px solid;
    border-right: 4px solid;
    border-color: rgb(212, 212, 212);

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    `;

export const ResultItem = styled.a`
    width: 100%;
    height: 50px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    color: black;
    z-index: 10;
    font-size: 25px;
    `;
