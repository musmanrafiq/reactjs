import { Provider } from "mobx-react";
import "./App.css";
import UserComponent from "./components/userComponent";
import userStore from "./stores/userStore";

function App() {
  return (
    <Provider userStore={userStore}>
      <div className="App">
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <UserComponent />
      </div>
    </Provider>
  );
}

export default App;
