import { useMemo } from "react";
import "./App.scss";
import { Banner, Navbar, Section } from "./components";

function App() {
  const items = useMemo(
    () => [
      "FAQ",
      "Оплата и доставка",
      "Возврат",
      "Исследования",
      "Личный кабинет",
      "8 8 (800) 600-09-90",
    ],
    []
  );

  return (
    <div className="App">
      <Navbar items={items} />
      <Banner />
      <Section />
    </div>
  );
}

export default App;
