import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"

<<<<<<< HEAD
const app = (
=======
export const Appp = (
>>>>>>> master
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

<<<<<<< HEAD
ReactDOM.render(app, document.getElementById("root"))
=======
ReactDOM.render(Appp, document.getElementById("root"))
>>>>>>> master
serviceWorker.unregister()
