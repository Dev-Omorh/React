import React from "react";
import "./App.css";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Note className="note" />
      <Footer />
    </>
  );
}

export default App;
