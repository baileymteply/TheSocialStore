import styled from "styled-components";

export const Wrapper = styled.nav`
    height: 80%;
    display: grid;
    grid-column: auto;
    align-items: center;
    font-size: 2.5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0 24px;
    width: 100%;
    box-shadow: 20px;
    /* font-size: 40px;
    color: white;
    display: grid;
    height: 100%;
    grid-column: auto;
    box-shadow: 20px; */
    `;

export const HomeButton = styled.button`
    grid-column-start: 1;
    grid-column-end: 1;
    `;

export const StoreButton = styled.button`
    grid-column-start: 2;
    grid-column-end: 2;
    `;

export const ProfilePicture = styled.img`
    grid-column-start: 8;
    grid-column-end: 8;
    border-radius: 50%;
    border-width: 2px;
    border-color: white;
    height: 100px;
    width: 100px;
    margin: 0 auto;
    `;