class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);
    let loginName = user.login;
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${
          user.html_url
        }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge bg-primary">Public Repos: ${
          user.public_repos
        }</span>
        <span class="badge bg-secondary">Public Gists: ${
          user.public_gists
        }</span>
        <span class="badge bg-success">Followers: ${
          user.followers
        }</span>
        <span class="badge bg-info">Following: ${
          user.following
        }</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">Name: ${
            user.name === null
              ? loginName.charAt(0).toUpperCase() + loginName.slice(1)
              : user.name
          }</li>
          <li class="list-group-item">Website/Blog: ${
            user.blog === "" ? "No website currently" : user.blog
          }</li>
          <li class="list-group-item">Location: ${user.location === null ? "No location " : user.location}</li>
          <li class="list-group-item">Twitter: ${
            user.twitter_username == null
              ? "No Twitter account currently"
              : user.twitter_username
          }</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
 
 `;
  }

  clearProfile(){
    this.profile.innerHTML = "";
  }
}
