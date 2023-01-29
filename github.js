class GitHub {
  constructor() {
    this.client_id = "64710e9c0ca6305e142a";
    this.client_secret = "6c078d4e64c6ae83b6fb7822e1148f23adb3d2ba";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    //get user profile 
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //get user repos
    const profileRepos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await profileRepos.json();

    return {profile, repos}
  }
}
