import React from "react"
import ReactDOM from "react-dom"
import {Appp} from "./src/index"
import * as serviceWorker from "./src/serviceWorker"


// import store from "./store"

const app = (
  <Appp />
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
