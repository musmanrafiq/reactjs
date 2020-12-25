import { Provider } from "mobx-react";

import "./App.css";
import UserComponent from "./components/userComponent";
import userStore from "./stores/userStore";

function App() {
  return (
    <Provider userStore={userStore}>
      <div className="App">
        <UserComponent />
      </div>
    </Provider>
  );
}

export default App;
