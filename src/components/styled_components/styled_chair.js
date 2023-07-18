
import styled from "styled-components"

const Box = styled.div`
    // width: 20%;
    width: ${props => Number(props.width)}rem;
    display: flex;
    height: auto;
    border: 1px solid gray;
    margin: 8px;
    border-radius: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
`
const Span = styled.span`
        margin: 0.2rem;
        
        background-color: ${(props) =>
        Array.isArray(props.selected) && props.selected.includes(props.number)
            ? 'green'
        : Array.isArray(props.t_reservation) && props.t_reservation.includes(props.number)
            ? '#eb9202'
        : Array.isArray(props.p_reservation) && props.p_reservation.includes(props.number)
            ? '#de1610'
        : '#dfe0f5'};
        color: ${(props) =>
        Array.isArray(props.selected) && props.selected.includes(props.number)
            ? '#fcfcfc'
        : Array.isArray(props.t_reservation) && props.t_reservation.includes(props.number)
            ? '#fcfcfc'
        : Array.isArray(props.p_reservation) && props.p_reservation.includes(props.number)
            ? '#fcfcfc'
        : 'black'};;
        padding: 0.7rem;
        width: 16px;
        text-align: center;
        font-size: 14px;
        height: 16px;
        /* margin: 0 auto; */
        border-radius: 0.25rem;
    


`

export { Box, Span }