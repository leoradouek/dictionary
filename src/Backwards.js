import { useState } from "react";
import "./Form.css";

const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Backwards = () => {
  const [word, setWord] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [reversedWord, setReversedWord] = useState("");
  const [definitions, setDefintions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page from refreshing when clicking submit
    setIsPending(true);

    let reverse = word.split("").reverse().join("");
    const response = await fetch(dictionaryAPI + reverse);
    const res = await response.json();
    res && setIsPending(false);
    if (res.length) {
      setReversedWord(reverse);
      setDefintions(res[0].meanings[0].definitions);
    } else {
      setReversedWord("");
      setDefintions([]);
    }

    // how to do then chaining:
    // fetch(dictionaryAPI + reverse)
    // .then((response) => response.json())
    // .then((data) => {
    //   data.length ? setReversedWord(reverse) : setReversedWord("");
    // });

    setWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label>Enter a word</label>
        <input
          required
          type="text"
          name="word"
          value={word}
          onChange={(e) => setWord(e.target.value)} // to keep track of value that is entered and store in state
        />
      </div>
      {!isPending ? (
        <button type="submit">Submit</button>
      ) : (
        <button disabled>Searching for Results..</button>
      )}
      {reversedWord.length ? (
        <>
          <p>You found a valid word!</p>
          <p>Word: {reversedWord}</p>
          <p>Definitions:</p>
          {definitions.map((definition) => (
            <p key={definition.id}>{definition.definition}</p>
          ))}
        </>
      ) : (
        <p>Try again!</p>
      )}
    </form>
  );
};

export default Backwards;
