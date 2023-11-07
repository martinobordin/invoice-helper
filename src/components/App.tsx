import { useState } from "react";
import logo from "../assets/logo.svg";
import Settings from "./Settings";
import Invoice from "./Invoice";
import { AppSettings } from "../models/AppSettings";

function App() {
  const initialState = new AppSettings();
  const [appSettings, setAppSettings] = useState(initialState);

  return (
    <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-xl mx-auto mt-8">
      <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
        <img src={logo} className="h-10 inline-block" alt="Invoice Helper" />
        Invoice Helper
      </h1>

      <hr className="mb-2" />
      <Settings
        appSettings={appSettings}
        setAppSettings={setAppSettings}
      ></Settings>

      <hr className="mb-2" />

      <h1 className="text-lg font-bold">Invoice</h1>
      <Invoice appSettings={appSettings}></Invoice>

      <p className="text-center text-gray-500 text-xs">
        &copy;{new Date().getFullYear()} Martino Bordin. All rights reserved.
      </p>
    </div>
  );
}

export default App;
