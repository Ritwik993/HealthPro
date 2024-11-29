import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator.jsx";
import Navbar from "./components/Navbar/Navbar";
import Result from "./components/Result/Result.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const [percentage, setPercentage] = useState(0);

  const AppLayout = () => {
    return (
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Calculator setPercentage={setPercentage} />,
        },
        {
          path: "/result",
          element: <Result percentage={percentage} />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
