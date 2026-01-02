import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function APP() {
  return (
    <Provider store={store}>
      <>
        <Login />
        <SignUp />
      </>
    </Provider>
  );
}

export default APP;
