export const getByName =(user) => {
  console.log(user)
  return fetch(`https://api.github.com/users/${user}`)
    .then(res=>res.json())
    .then(profile  => ({
      name: profile.name,
      image: profile.avatar_url,
      followers: profile.followers,
      following: profile.following,
      url: profile.html_url


    }))
    
};

export const getUserRepos = (user) => {
  console.log(user)
  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(res=>res.json())
    .then(json => json.map(repo =>({
      name: repo.name,
      url: repo.html_url


    })));
    
}
