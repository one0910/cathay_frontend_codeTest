import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="container mx-auto">
      <div className="md:grid md:grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ">
          <Outlet />
        </div>
      </div>
    </section>

  );
}

export default App;