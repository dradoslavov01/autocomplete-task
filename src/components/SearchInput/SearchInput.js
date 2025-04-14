import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = ({ title, selectedItem, handleInputChange, handleKeyDown, isOpen }) => {
  return (
    <>
      <label className={styles.label}>{title}</label>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        autoComplete="off"
        value={selectedItem}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="autocomplete-list"
      />
    </>
  )
}

export default SearchInput