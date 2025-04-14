# 🔍 React Autocomplete Component

A flexible and reusable **Autocomplete** component built with React. It supports both **dynamic API-based searches** (e.g., GitHub users) and **static datasets** (e.g., U.S. states). Designed with usability and performance in mind, it includes keyboard navigation, debounced input handling, and a built-in search history.

---

## 📦 Features

- 🔄 **Flexible Data Sources**  
  Supports both API-based dynamic data fetching and local static data.

- ⌨️ **Keyboard Navigation**  
  Navigate suggestions using `ArrowUp`, `ArrowDown`, select with `Enter`, and dismiss with `Escape`.

- 🧠 **Search History**  
  Remembers recent selections for quick access.

- ⏳ **Debounced Input**  
  Prevents excessive fetching by delaying search until the user pauses typing.

- 🧑‍🦯 **Accessible by Design**  
  Implements ARIA roles and best practices for screen readers and keyboard users.

- 🎯 **Customizable Result Limit**  
  Configure how many results to show when using static data.

- 🧩 **Custom Hooks**  
  Modular hooks like `useDebounce`, `useKeyboardNavigation` improve maintainability and reuse.

- 🛠 **Utility Functions**  
  Includes utilities for fetching API/static data, filtering results, and formatting inputs.

---

## 🚀 Getting Started

### 1. **Install Dependencies**

```bash
npm install
```

### 2. **Start the project**

```bash
npm start
```
