import { SET_USER, SET_LOADING, SET_USERNAME, SET_REPOS} from '../actions/gitHubActions';

const initialState = {
  userName: '',
  profile: {},
  loading: false, 
  repos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        profile: action.payload
       
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
}
