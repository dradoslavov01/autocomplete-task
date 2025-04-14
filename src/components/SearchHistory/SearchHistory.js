import React from 'react'
import styles from './SearchHistory.module.scss'

const SearchHistory = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className={styles.searchHistory}>
      <h4 className={styles.headline}>Recent Searches</h4>
      <ul className={styles.list}>
        {history.map((item, index) => (
          <li
            key={item.id}
            className={styles.listItem}
          >
            {`${index + 1}. ${item.text}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchHistory