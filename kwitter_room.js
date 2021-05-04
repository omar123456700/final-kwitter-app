//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDl_pVfhYzbOtTN2u5SOPlLRXHD37lRSUs",
      authDomain: "kwitter-6d209.firebaseapp.com",
      databaseURL: "https://kwitter-6d209-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d209",
      storageBucket: "kwitter-6d209.appspot.com",
      messagingSenderId: "854615164834",
      appId: "1:854615164834:web:6c802b16ac4adff53c54fb",
      measurementId: "G-MSNH5FZCFZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addRoom ()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}