import React, { useState, useCallback } from 'react';
import { SearchHistory, ResultList, SearchInput } from '@components';
import { fetchFilteredData } from '@utils';
import { useDebouncedEffect, useKeyboardNavigation } from '@hooks';
import styles from './Autocomplete.module.scss'

const Autocomplete = ({ dataEndPoint, title, numOfResults = 10, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [results, setResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const updateResults = useCallback(async () => {
    if (!query) return setResults([]);

    try {
      const filtered = await fetchFilteredData({ query, dataEndPoint, numOfResults });
      setResults(filtered);
    } catch (error) {
      console.error("Fetch failed:", error);
      setResults([]);
    }
  }, [query, dataEndPoint, numOfResults]);

  useDebouncedEffect(updateResults, 500);

  const handleSelectResultItem = (item) => {
    setIsOpen(false);
    setSelectedItem(item.text);
    setHighlightIndex(-1);
    onSelect(item.id)

    setSearchHistory(prev => {
      const updated = [item, ...prev.filter(i => i !== item.text)];
      return updated.slice(0, numOfResults);
    });
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setSelectedItem(val);
    setIsOpen(val.length > 0);
  };

  const handleKeyDown = useKeyboardNavigation({
    results,
    isOpen,
    highlightIndex,
    setHighlightIndex,
    setIsOpen,
    handleSelectResultItem
  });

  return (

    <div className={styles.autocomplete}>
      <SearchInput
        title={title}
        isOpen={isOpen}
        selectedItem={selectedItem}
        handleKeyDown={handleKeyDown}
        handleInputChange={handleInputChange}
      />
      {isOpen && results.length > 0 && (
        <ResultList
          results={results}
          highlightIndex={highlightIndex}
          handleSelect={handleSelectResultItem}
        />
      )}
      <SearchHistory history={searchHistory} />
    </div>

  );
};

export default Autocomplete;