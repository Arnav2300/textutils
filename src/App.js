import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import { Navbar } from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "#FFFFFF";
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#121212";
      showAlert("Dark Mode disabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Below"
                mode={mode}
              />
            }
            exact
          />
          <Route path="/about" element={<About mode={mode} />} exact />
        </Routes>
      </div>
    </>
  );
}

export default App;
