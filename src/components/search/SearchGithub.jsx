import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setUserName, getProfile, fetchRepos, setRepos } from '../../actions/gitHubActions';


const SearchGithub = () => {
  
  const userName = useSelector(state => state.userName);
 
  const dispatch = useDispatch();


  const handleChange= ({ target }) => {
    dispatch(setUserName(target.value));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    
    dispatch(getProfile(userName))
    dispatch(fetchRepos(userName))
   
  }

return(

  <form onSubmit ={handleSubmit}>
  <label htmlFor="name"><h2>Enter username to search:</h2></label>
  <input 
    id="name"
    type="text"
    name="name"
    value={userName.login}
    onChange={handleChange}
    />
    <button type="submit">SEARCH</button>

</form>
)

 
};

export default SearchGithub;


