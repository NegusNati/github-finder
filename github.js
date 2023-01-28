class GitHub {
  constructor() {
    this.client_id = "64710e9c0ca6305e142a";
    this.client_secret = "6c078d4e64c6ae83b6fb7822e1148f23adb3d2ba";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {profile}
  }
}
