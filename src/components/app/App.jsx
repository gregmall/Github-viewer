import React from 'react';
import SearchGithub from '../search/SearchGithub';
import SearchedResults from '../search/SearchResult';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <SearchGithub />
      <SearchedResults />
    </div>
  )
}
