import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Holder from "./components/Holder";
import TabButton from "./TabButton/TabButton.jsx";
import StampliCardTogether from "./assets/StampliCardTogether.png";
import "./App.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("gallery");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="Card">
          <img src={StampliCardTogether} alt="StampliCard"></img>
          <a href="https://www.bitpay.co.il/app/share-info?i=182332647287_19h0W1zx">
            לטעינה לחץ כאן
          </a>
        </section>
        <section id="tabs">
          <h2>החלק שלנו</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "gallery"}
              onSelect={() => handleSelect("gallery")}
            >
              גלריה
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Helplines"}
              onSelect={() => handleSelect("Helplines")}
            >
              קווי סיוע
            </TabButton>
          </menu>
          <div id="tab-content">
            <Holder selectedTopic={selectedTopic} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
