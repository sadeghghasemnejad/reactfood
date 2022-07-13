import React from "react";
import Header from "./components/header";
import Main from "./components/main";
const App = () => {
  // const ctx = useContext(DataContext);
  // const [amount, setAmount] = useState(0);
  // const changeAmountHandler = () => {
  //   setAmount(
  //     ctx.cartData.map((e) => e.amount).reduce((acc, e) => +e + acc, 0)
  //   );
  // };
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
