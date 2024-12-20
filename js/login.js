// step-1: Set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); /* Unnecessary complexity for beginner */
    // step-3: get the phone number.
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
