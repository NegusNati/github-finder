const searchUser = document.getElementById("searchUser");
const github = new GitHub();
const ui = new UI(); 

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    console.log(userText);
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert User Not found
      } else {
        //Show user Profile
        ui.showProfile(data.profile)
      }
    })
  } else{
    //Clear Profile

  }
});
