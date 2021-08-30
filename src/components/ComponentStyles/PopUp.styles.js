import styled from 'styled-components';

export const PopUp1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 40%;
    `;

export const PopUpInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: white;
    `;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    `;