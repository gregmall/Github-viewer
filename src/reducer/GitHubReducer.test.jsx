import reducer from './GitHubReducer';
import { setUser, setLoading, setRepos } from '../actions/gitHubActions';

describe('GitHub reducer', () => {
  it('handles the GET_USER action', () => {
    const state = {
      userName: '',
      profile: {},
      loading: false,
      repos: []
      
    };
    const action = setUser(
       {
        name: 'G.mall',
        image: 'https://avatars1.githubusercontent.com/u/61127092?v=4',
        followers: 5,
        following: 8,
        url: 'https://github.com/gregmall'
      }
    );

    const newState = reducer(state, action);

    expect (newState).toEqual({
      userName: '',
      profile: {
        name: 'G.mall',
        image: 'https://avatars1.githubusercontent.com/u/61127092?v=4',
        followers: 5,
        following: 8,
        url: 'https://github.com/gregmall'
      },
      loading: false,
      repos: []
    });

  });
  it('handles the SET_REPOS action', () =>{
    const state = {
      userName: 'gregmall',
      profile: {
        name: 'G.mall',
        image: 'https://avatars1.githubusercontent.com/u/61127092?v=4',
        followers: 5,
        following: 8,
        url: 'https://github.com/gregmall'
      },
      loading: false,
      repos:[]
      
    }

    const action = setRepos([
      {
        name: 'adventure-time',
        url: 'www.url.com'
      },
      {
        name: 'horned-creatures',
        url: 'www.site.com'
      },
      {
        name: 'quiz-game',
        url: 'www.fun.com'
      }

    ]
      
    );
    const newState = reducer(state, action);
    expect (newState).toEqual({
      userName: 'gregmall',
      profile: {
        name: 'G.mall',
        image: 'https://avatars1.githubusercontent.com/u/61127092?v=4',
        followers: 5,
        following: 8,
        url: 'https://github.com/gregmall'
      },
      loading: false,
      repos: [
        {
          name: 'adventure-time',
          url: 'www.url.com'
        },
        {
          name: 'horned-creatures',
          url: 'www.site.com'
        },
        {
          name: 'quiz-game',
          url: 'www.fun.com'
        }

      ]
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
  

});
