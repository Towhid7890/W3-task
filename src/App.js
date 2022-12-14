import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Notice from "./components/Notice/Notice";
import Request from "./components/Request/Request";

function App() {
  return (
    <div>
      <Header></Header>
      <Notice></Notice>
      <Request></Request>

      <Footer></Footer>
    </div>
  );
}

export default App;
