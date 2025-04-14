import React from 'react';
import { Autocomplete } from '@components';
import styles from './App.module.scss'

function App() {

  const gitHubUsersApi = 'https://api.github.com/search/users?q={query}&per_page={numOfResults}';

  const handleSelect = (id) => {
    console.log('Selected Item ID:', id);
  };

  return (
    <div className={styles.content}>
      <Autocomplete title='State:' onSelect={handleSelect} />
      <Autocomplete title="GitHub Users:" onSelect={handleSelect} dataEndPoint={gitHubUsersApi} />
    </div>
  );
}

export default App;
