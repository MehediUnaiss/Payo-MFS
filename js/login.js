// // step-1: Set event handler
// document
//   .getElementById("button-login")
//   .addEventListener("click", function (event) {
//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); /* Unnecessary complexity for beginner */
//     // step-3: get the phone number.
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber, pinNumber);

//     // This is temporary way.
//     if (phoneNumber === "5" && pinNumber === "1234") {
//       console.log("you are logged in");
//     } else {
//       alert("Wrong phone or pin");
//     }
//   });

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "home.html";
    } else {
      alert("Wrong phone or pin");
    }
  });
