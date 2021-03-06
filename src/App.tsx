import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  );
}

export default App;
