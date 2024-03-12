import { useState } from "react";
import Holder from "./components/Holder";

import StampliCardTogether from "./assets/StampliCardTogether.png";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="Card">
          <img src={StampliCardTogether} alt="StampliCard"></img>
          <a href="https://www.bitpay.co.il/app/share-info?i=182332647287_19h0W1zx">
            לטעינה לחץ כאן
          </a>
        </div>

        <section>
          <Holder />
        </section>



      </main>
    </>
  );
}

export default App;
