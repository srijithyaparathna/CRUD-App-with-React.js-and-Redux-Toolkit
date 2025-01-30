
![image](https://github.com/user-attachments/assets/df9d4032-ebbe-4bd9-af7b-ae45b6f49358)

React Redux is the official library used to integrate Redux with React. Redux is a predictable state container for JavaScript applications, and React Redux provides the bindings that allow React components to interact with the Redux store. It makes it easier to manage the application’s global state, allowing components to access and modify the state without relying on passing props down through the component tree.

Key Concepts in React Redux:
Store: The central place where the application's state is stored. It holds the entire state of the app.
Actions: Plain JavaScript objects that describe an event or change that should happen in the store. Actions can be dispatched to the store.
Reducers: Functions that take the current state and an action as arguments and return a new state based on the action.
Dispatch: A function that sends an action to the Redux store to update the state.
Selector: Functions used to extract or "select" data from the Redux store.
Provider: A component from React Redux that wraps your entire app, making the Redux store available to all components.
In React, components subscribe to the Redux store and can dispatch actions to update the store. React Redux provides two important hooks:

useSelector: To access data from the Redux store.
useDispatch: To dispatch actions to the store.

![image](https://github.com/user-attachments/assets/dac408b3-ef94-4ec2-b2a7-19aa2b8b51cc)

![image](https://github.com/user-attachments/assets/e2342e10-3b9b-4cdd-b11e-566badc9e835)


![image](https://github.com/user-attachments/assets/183a7874-6978-4934-b463-af9c9bfb995d)
