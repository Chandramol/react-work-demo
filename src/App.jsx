import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomeIndex from "./views/index";
import Sales from "./views/sales";
import Chats from "./views/chats";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeIndex />} />
            <Route path="sales" element={<Sales />} />
            <Route path="chats" element={<Chats />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
