import React, { useMemo, useState } from "react";

const Filter = ({ error, isLoaded, items }) => {
  const [letter, setLetter] = useState("");

  const data = useMemo(() => {
    return items.filter((item) => item.name.startsWith(letter));
  }, [items, letter]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <label htmlFor="letters">Choose a letter:</label>

        <select
          name="letters"
          id="letters"
          onChange={(e) => setLetter(e.target.value)}
        >
          <option value=""> All </option>
          <option value="E">By E</option>
          <option value="C">By C</option>
          <option value="L">By L</option>
        </select>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id} - {item.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default Filter;
