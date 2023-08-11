import React, { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

function App() {
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  });

  const handleDelete = (counterId) => {
    const counters = state.counters.filter((c) => c.id !== counterId);
    setState({ counters });
  };

  const handleIncrement = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setState({ counters });
  };

  const handleReset = () => {
    const counters = state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setState({ counters });
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={state.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          counters={state.counters}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
