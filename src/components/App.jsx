import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }
  function handleClick(event) {
    setFullName(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
