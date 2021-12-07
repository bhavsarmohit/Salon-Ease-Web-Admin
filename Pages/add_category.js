



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("login_div").style.display = "none";

    window.location.href = "add_category.html";  


    var user = firebase.auth().currentUser;

    if(user != null){


      // window.location = 'http://www.example.com/newlocation';
      window.location.href = "add_category.html";  
      // href = "dashboard.html";

      // var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.
    window.location.href = "../index.html";  

    // document.getElementById("user_div").style.display = "none";
    // document.getElementById("login_div").style.display = "block";

  }
});

function logout(){
  firebase.auth().signOut();
}