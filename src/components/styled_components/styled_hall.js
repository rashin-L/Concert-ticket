import styled from "styled-components"

const Div = styled.div`

    h1{
        background-color: #9ce3e6;
        color: #085c61;
        width: 50%;
        margin: 0 auto;
        text-align: center;
        border-radius: 0.25rem;
        font-size: 1.3rem;
        padding: 0.5rem 0;
        font-weight: 600;

    }
    div{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    h2{
        color: #474d49;
        background-color: #e0f7f9;
        padding: 0.5rem 3rem;
        border-radius: 0.25rem;
        font-size: 1.1rem;
        text-align: center;
        font-weight: 600;


    }


`
const Main = styled.div`

    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    margin: 0 auto;

`

export {Div, Main}