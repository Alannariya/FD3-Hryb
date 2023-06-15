import React, { useState, useEffect } from 'react';

import "./filter.css";

import Controls from './Controls';
import List from './List';

const Filter = props => {

  const [words, setWords] = useState(props.words);

  function changesMade(isSorted, filter) {
    let newWords=props.words.slice();
    if (isSorted)
      newWords.sort();
    if (filter)
      newWords=newWords.filter(i =>i.includes(filter));
    setWords(newWords);
  };

  return (
    <div className='Filter'>
      <Controls changesMade={changesMade}/>
      <List words={words}/>
    </div>
  );
};

export default Filter;