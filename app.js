const searchUser = document.getElementById("searchUser");
const github = new GitHub();
const ui = new UI();

searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
