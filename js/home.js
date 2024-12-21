// add money to the account
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    console.log("money add button clicked");
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log("Amount:", typeof addMoneyInput);

    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log("Pin:", pinNumberInput);

    if (pinNumberInput === "1234") {
      console.log("adding money to your account");
      const balance = document.getElementById("account-balance").innerText;
      console.log(typeof balance);
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
