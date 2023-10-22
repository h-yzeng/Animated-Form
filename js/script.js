//JavaScript Function Checker
console.log('JavaScript file loaded');

//Records the values entered by the user
function formLog(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
}   

//Refreshes the page after the form is submitted and the values are logged
function setTimeout(){
  location.reload(1000);
}

//Rejects submission if each field is empty or doesn't fit the field requirements and alerts user about submission in external chatbox
function formCompletion(){
  let name = document.forms["userForm"]["name"].value;
  let email = document.forms["userForm"]["email"].value;
  let phone = document.forms["userForm"]["phone"].value;
  if (name == "" || email == "" || phone == "") {
    alert("Please fill out each field correctly. Each field must be filled out.");
    return false;
  }else{
    alert("Thank you for completing the form! Your information is recorded and we will reply back to you within 3-5 business days!");
    return true;
  } 
} 