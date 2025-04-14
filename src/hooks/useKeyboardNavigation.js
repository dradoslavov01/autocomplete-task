import { useCallback } from 'react';

export const useKeyboardNavigation = ({
  results,
  isOpen,
  highlightIndex,
  setHighlightIndex,
  setIsOpen,
  handleSelectResultItem
}) => {
  return useCallback((e) => {
    if (!isOpen || results.length === 0) return;

    if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
      e.preventDefault();
    }

    switch (e.key) {
      case 'ArrowDown':
        setHighlightIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        setHighlightIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        if (highlightIndex >= 0) handleSelectResultItem(results[highlightIndex]);
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightIndex(-1);
        break;
      default:
        break;
    }
  }, [highlightIndex, isOpen, results, handleSelectResultItem, setHighlightIndex, setIsOpen]);
};
