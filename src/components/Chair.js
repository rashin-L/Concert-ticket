import React, { useReducer, useEffect, useCallback } from 'react';
import { Box, Span } from './styled_components/styled_chair';

const initState = {
    Selected: [],
    T_reservation: [],
    P_reservation: [],
    TotalPrice: 0,
    TotalChairNumber: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Selected':
            return { ...state, Selected: action.Selected };
        case 'T_reservation':
            return { ...state, T_reservation: action.T_reservation };
        case 'P_reservation':
            return { ...state, P_reservation: action.P_reservation };
        case 'TotalPrice':
            return { ...state, TotalPrice: action.TotalPrice };
        case 'TotalChairNumber':
            return { ...state, TotalChairNumber: action.TotalChairNumber };
        default:
            return state;
    }
};

function Chair({ part, width, handleClick }) {
    const [data, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        console.log('Total Price:', data.TotalPrice);
        console.log('Total Chair Number:', data.TotalChairNumber);
    }, [data.TotalPrice, data.TotalChairNumber]);

    const handleChairClick = (chairNumber, price) => {
        const updatedSelected = [...data.Selected];
        const updatedT_reservation = [...data.T_reservation];
        const updatedP_reservation = [...data.P_reservation];
        let shouldExecuteTimeout = false;

        if (
            !updatedSelected.includes(chairNumber) &&
            !updatedT_reservation.includes(chairNumber) &&
            !updatedP_reservation.includes(chairNumber)
        ) {
            updatedSelected.push(chairNumber);
        } else if (updatedSelected.includes(chairNumber) && !updatedT_reservation.includes(chairNumber)) {
            updatedT_reservation.push(chairNumber);
            const index = updatedSelected.indexOf(chairNumber);
            updatedSelected.splice(index, 1);

            if (updatedT_reservation.includes(chairNumber) && !updatedP_reservation.includes(chairNumber)) {
                shouldExecuteTimeout = true;
            }
        } else if (updatedT_reservation.includes(chairNumber) && !updatedP_reservation.includes(chairNumber)) {

            updatedP_reservation.push(chairNumber);
            const index = updatedT_reservation.indexOf(chairNumber);
            updatedT_reservation.splice(index, 1);
            handleClick(chairNumber, price);

        } else {
            alert('این میز قبلا رزرو شده');
        }

        dispatch({ type: 'Selected', Selected: updatedSelected });
        dispatch({ type: 'T_reservation', T_reservation: updatedT_reservation });
        dispatch({ type: 'P_reservation', P_reservation: updatedP_reservation });

        lateClick(shouldExecuteTimeout, chairNumber, updatedT_reservation, updatedSelected, updatedP_reservation);
    };
// ---------------------------------------------------------------------------
    const lateClick = useCallback(
        (shouldExecuteTimeout, chairNumber, updatedT_reservation, updatedSelected, updatedP_reservation) => {
            if (shouldExecuteTimeout) {
                setTimeout(() => {
                    if (updatedT_reservation.includes(chairNumber) && !updatedP_reservation.includes(chairNumber)) {
                        // alert("get back");
                        const index_t = updatedT_reservation.indexOf(chairNumber);
                        const index_s = updatedSelected.indexOf(chairNumber);
                        updatedT_reservation.splice(index_t, 1);
                        updatedSelected.splice(index_s, 1);
                    }
                }, 2000);
            }
        },
        []
    );
// ---------------------------------------------------------------------------------
    return (
        <>
            <Box width={width}>
                {part.map((x) => (
                    <Span
                        selected={data.Selected}
                        t_reservation={data.T_reservation}
                        p_reservation={data.P_reservation}
                        number={x.number}
                        onClick={() => handleChairClick(x.number, x.price)}
                        key={x.number}
                    >
                        {x.number}
                    </Span>
                ))}
            </Box>
        </>
    );
}

export default Chair;