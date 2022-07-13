import React, { useEffect, useState } from "react";

const DataContext = React.createContext({ foodName: [], cart: [], amount: 0 });

export const DataProvider = (props) => {
  const data = [
    {
      id: 0,
      name: "Sushi",
      descrip: "Finest fish and veggies",
      price: "22.99",
    },
    {
      id: 1,
      name: "Schnitzel",
      descrip: "A german specialty!",
      price: "16.50",
    },
    {
      id: 2,
      name: "Barbecue Burger",
      descrip: "American, raw, meaty",
      price: "12.99",
    },
    {
      id: 3,
      name: "Green Bowl",
      descrip: "Healthy...and green...",
      price: "18.99",
    },
  ];
  const cartData = [];
  const [amount, setAmount] = useState(0);
  const [cData, setCData] = useState([]);
  const rAndAHandler = (newAmount, id) => {
    cData[id].amount = +newAmount;
    setCData(cData);
  };
  const changeAmountHandler = (newData) => {
    cData.forEach((e) => {
      if (e.name === newData.name) {
        e.amount += newData.amount;
      }
    });
    setAmount((prevData) => {
      return prevData + cartData.reduce((acc, e) => +e.amount + acc, 0);
    });
    if (cData.some((e) => e.name === newData.name)) return;
    setCData((prevData) => {
      return [...prevData, newData];
    });
  };
  return (
    <DataContext.Provider
      value={{
        data,
        cData,
        cartData,
        changeAmountHandler,
        amount,
        rAndAHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
