import React, { useReducer, useEffect } from 'react';
import { Div, Main } from './styled_components/styled_hall';
import axios from 'axios';
import Chair from "./Chair"

const initState = {
  A: [],
  B: [],
  C: [],
  D: [],
  TotalPrice: 0,
  TotalChairNumber: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Hall = () => {
  const [data, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('./chairs.json').then((response) => {
      const Achair = response.data.filter((item) => item.section === 'A');
      const Bchair = response.data.filter((item) => item.section === 'B');
      const Cchair = response.data.filter((item) => item.section === 'C');
      const Dchair = response.data.filter((item) => item.section === 'D');
      dispatch({
        type: 'UPDATE_STATE',
        payload: { A: Achair, B: Bchair, C: Cchair, D: Dchair },
      });
    });
  };

  const handleClick = (chairNumber, price) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: { TotalPrice: data.TotalPrice + price, TotalChairNumber: data.TotalChairNumber + 1 },
    });
  };

  return (
    <>
      <Div>
        <h1>Stage</h1>
        <div>
          <h2>Count: <span>{data.TotalChairNumber} </span> </h2>
          <h2>Sum: <span>{data.TotalPrice}</span> </h2>
        </div>
      </Div>

      <Main>
        <Chair part={data.B} width='15' handleClick={handleClick} />
        <Chair part={data.A} width='23' handleClick={handleClick} />
        <Chair part={data.C} width='15' handleClick={handleClick} />
        <Chair part={data.D} width='34' handleClick={handleClick} />
      </Main>
    </>
  );
};

export default Hall;