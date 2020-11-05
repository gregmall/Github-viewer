import reducer from './GitHubReducer';
import { setUser, setLoading } from '../actions/gitHubActions';

describe('GitHub reducer', () => {
  it('handles the GET_USER action', () => {
    const state = {
      user: ''
      
    }
    const action = setUser(
      
     'gregmall'
      
    );
    const newState = reducer(state, action);

    expect (newState).toEqual({
      user: 'gregmall'
    });

  });
  it('handles the SET_LOADING action', () =>{
    const state = {
      loading: false
    }

    const action = setLoading(
      true
    );
    const newState = reducer(state, action);
    expect (newState).toEqual({
      loading: true
    });

  });
  it('handles the SET_SEARCH action', () => {
    const state = {
      search: '',
    };

    const action = setSearch(
      
    )
  });

});
