import { useState } from "react";
import "./Backwards.css";
import dictionaryAPI from "../dictionaryAPI";

const Backwards = () => {
  const [word, setWord] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [reversedWord, setReversedWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page from refreshing when clicking submit
    setIsPending(true);

    let reverse = word.split("").reverse().join("");
    const response = await fetch(dictionaryAPI + reverse);
    const res = await response.json();
    res && setIsPending(false);
    if (res.length) {
      setReversedWord(reverse);
    } else {
      setReversedWord("");
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
      {reversedWord.length ? <p>{reversedWord} is a valid word</p> : <p></p>}
    </form>
  );
};

export default Backwards;
