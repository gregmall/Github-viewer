import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SearchResults.css'

const SearchedResults = () => {
  const profile = useSelector(state=> state.profile);
  const loading = useSelector(state => state.loading);
  const repos = useSelector(state => state.repos);
  


  if (loading) {
    return <h1>PLEASE WAIT....LOADING....</h1>
   }
  const repoElements =repos.map(repo=> (
    <div className={styles.repo}>
    <li key={repo.name}>
      <p>{repo.name}</p>
      <p><a href={repo.url} target="blank">LINK TO REPO</a></p>
    </li>
    </div>
  ));

return(
<div className={styles.Results}>
  <div>
    <p>NAME: {profile.name}</p>
    <img src={profile.image}/>
    <p>FOLLOWER COUNT: {profile.followers}</p>
    <p>FOLLOWING COUNT: {profile.following}</p>
    <p>LINK: <a href={profile.url} target="blank">{profile.url}</a></p>
    <p>REPOS:</p>
    
    </div>
    <div>
    <ul>
      
      {repoElements}
    </ul>
  
    </div>
  </div>
  );
};

export default SearchedResults;
