import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
/*

In this code, the Provider component from react-redux plays a crucial role in making the Redux store accessible to your React application. Let's break it down:

1. What is Provider?
The Provider component is a part of the react-redux library, which is the official React binding for Redux. It allows React components to access the Redux store, meaning that any component inside the Provider can interact with the global Redux state.

2. How does Provider work?
The Provider component wraps your entire React app (<App /> in this case), passing the Redux store down to all components that need to access or modify the state.
It makes the Redux store available globally via React-Redux hooks like useDispatch and useSelector. These hooks allow you to interact with the store without having to manually pass the store or data through props.
3. What is store?
The store in Redux is the central object that holds the entire state of your application. It is created using createStore (or other Redux toolkit methods) and holds the current state and provides methods to update the state (via actions and reducers).

4. Why do we need Provider?
In a Redux-based application, we need to be able to access the global state and dispatch actions across different components.
Normally, React components can only access data that is passed to them via props. However, in a large application with many components, it becomes cumbersome to pass props down the tree (also known as "prop drilling").
The Provider makes the Redux store available throughout the entire component tree, so you don't need to pass the store or state manually to each component. Instead, components can use hooks like useSelector to access the state and useDispatch to dispatch actions, no matter how deeply nested the component is.
*/