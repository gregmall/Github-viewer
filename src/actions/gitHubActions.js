import { getByName, getUserRepos } from "../services/gitHubApi";

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading =>({
  type: SET_LOADING,
  payload: loading

});

export const SET_USERNAME = 'SET_USERNAME';
export const setUserName = userName => ({
  type: SET_USERNAME,
  payload: userName,

});

export const SET_REPOS = 'SET_REPOS';
export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
})

export const getProfile = userName => dispatch => {
  dispatch(setLoading(true));
 
  getByName(userName)
    .then(data => {
      dispatch(setUser(data))
    })
    .finally(() => dispatch(setLoading(false)));
}

export const fetchRepos = userName => dispatch => {
  dispatch(setLoading(true));
  
  getUserRepos(userName)
    .then(data => {
      dispatch(setRepos(data))
    })
    .finally(() => dispatch(setLoading(false)));

};
