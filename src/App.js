import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import QueenList from "./components/QueenList";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <main>
        <QueenList />
      </main>
    </>
  );
}

export default App;
