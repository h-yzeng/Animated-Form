function formLog(){
  let form = document.getElementsByName("name" + "email" + "phone");
  console.log(form);
}   

function formCompletion(){
  let name = document.forms["userForm"]["name"].value;
  let email = document.forms["userForm"]["email"].value;
  let phone = document.forms["userForm"]["phone"].value;
  if (name == "" || email == "" || phone == "") {
    alert("Please fill out each field correctly. Each field must be filled out.");
    return false;
  }else{
    alert("Thank you for completing the form! We will reply back to you within 3-5 business days!");
    return true;
  } 
} 



