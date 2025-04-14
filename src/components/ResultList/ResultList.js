import React from 'react'
import styles from './ResultList.module.scss'

const ResultList = ({ results, highlightIndex, handleSelect }) => {
  return (
    <ul id="autocomplete-list" className={styles.results} role="listbox">
      {results.map((result, index) => (
        <li
          key={result.id}
          className={`${styles.result} ${highlightIndex === index ? styles.highlighted : ''}`}
          role="option"
          aria-selected={highlightIndex === index}
          onClick={() => handleSelect(result)}
        >
          {result.text}
        </li>
      ))}
    </ul>
  )
}

export default ResultList