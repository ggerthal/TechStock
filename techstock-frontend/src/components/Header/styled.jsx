import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #baafc4;

    width: 100vw;
    height: 100px;

    display: flex;
    align-items: center;

    padding-left: 32px;

    h1 {
        font-size: 40px;
        color: #3b234a;

        font-family: sans-serif;
        shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
`

export const LogoContainer = styled.div`
    height: 32%;
    width: 32%;

    h2 {
        font-size: 24px;
        color: #3b234a;
    }
`