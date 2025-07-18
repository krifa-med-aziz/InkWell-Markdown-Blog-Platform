import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import About from "../components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
