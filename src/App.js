import "./styles/App.css";
import Router from "./components/Router";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const prodUrl="https://college-space-backend.herokuapp.com";
const localUrl="http://localhost:1500";

axios.defaults.baseURL = prodUrl+"/api/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
  "x-auth-token"
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
