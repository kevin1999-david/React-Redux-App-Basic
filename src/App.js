import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Players from "./components/Players";
import TeamSelected from "./components/TeamSelected";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDmanager</h1>
      <Players />
      <TeamSelected />
    </main>
  </Provider>
)


export default App;
