import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: linear-gradient(45deg, #311f3f, #6a4180);


    width: 100vw;
    height: 100px;

    display: flex;
    align-items: center;

    padding-left: 32px;
    border-bottom: 4px solid #baafc4;

    h1 {
        font-size: 40px;
        color: #baafc4;

        font-family: sans-serif;
        shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        border-bottom: 2px solid #baafc4;
    }
`

export const LogoContainer = styled.div`
    height: 32%;
    width: 32%;

    h2 {
        font-size: 24px;
        color: #baafc4;
        fontfamily: sans-serif;
    }
`