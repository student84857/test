function add_User(){
username = document.getElementById("User_name").value;
localStorage.setItem("User_name",username);
window.Location = "Kwitter_room.html";
}
