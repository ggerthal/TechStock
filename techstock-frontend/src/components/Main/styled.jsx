import { styled } from "styled-components";

export const MainContainer = styled.main`
    width: 100vw;
    height: calc(100vh - 100px);
    padding: 32px;

    background: linear-gradient(45deg, #52316b, #d4c7bf);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #baafc4;
        font-size: 24px;
        margin: 16px 0;
        font-family: sans-serif;}

    h2 {
        color: #baafc4;
        font-size: 20px;
        margin: 16px 0;
        font-family: sans-serif;}
`

export const InfoContainer = styled.div`

    width: 100vw;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flexwrap: wrap;
    gap: 16px;
`

export const ListAllCard = styled.div`
    background: linear-gradient(45deg, #311f3f, #6a4180);

    width: 300px;
    height: auto;
    padding: 16px;

    border-radius: 8px;
    border-bottom: 4px solid #baafc4;
    border-right: 4px solid #baafc4;


    h1 {
        color: #baafc4;
        font-size: 24px;
        margin: 16px 0;
        font-family: sans-serif;}

    h2 {
        color: #baafc4;
        font-size: 20px;
        margin: 16px 0;
        font-family: sans-serif;}
`

export const ListAByIdCard = styled.div`
    background: linear-gradient(45deg, #311f3f, #6a4180);

    width: 100px;
    height: 100px;
    padding: 16px;

    border-radius: 8px;
    border-bottom: 4px solid #baafc4;
    border-right: 4px solid #baafc4;

    colopr: #baafc4;

    h1 {
        color: #baafc4;
        font-size: 24px;
        margin: 16px 0;
        font-family: sans-serif;}
`
