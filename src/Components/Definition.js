import { useState } from "react";
import dictionaryAPI from "../dictionaryAPI";

const Definition = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [definitions, setDefintions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(dictionaryAPI + data);
    const res = await response.json();
    if (res.length) {
      setWord(data);
      setDefintions(res[0].meanings[0].definitions);
    } else {
      setWord("");
      setDefintions([]);
    }

    setData("");
  };

  return (
    <div>
      <h1>Definitions</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label>Enter a word</label>
          <input
            required
            type="text"
            name="word"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <p>Word: {word}</p>
        <p>Definitions:</p>
        {definitions.map((definition) => (
          <p key={definition.id}>{definition.definition}</p>
        ))}
      </form>
    </div>
  );
};

export default Definition;
