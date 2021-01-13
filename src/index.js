import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

//Compose va etre utilisé pour passer à la fois le ReduxDevTools et Thunk dans createStore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Thunk gere les appels asynchrones avec Redux
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//Local Storage
const saveToLocalStorage = (state) => {
  try{
    const serializedState = JSON.stringify(state.allTrends.watchlist);
    localStorage.setItem('watchlist', serializedState);
  }
  catch(error){
    console.log(error);
  }
};

store.subscribe(() => saveToLocalStorage(store.getState()));

//FIN Local Storage

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

