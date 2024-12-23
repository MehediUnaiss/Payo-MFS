/**
 * 1. add event listener to the add money button (form submit)
 * make sure to preventDefault s that page doesn't reloads.
 *
 * 2. get the money user want to add, get the pin number provided.
 *
 * 3. verify the pin number. for, wrong pin number => failed to add for right
 * pin number, allow to add the number to the account balance.
 *
 * 4.get the current balance.
 *
 * 5. add money to be added with the current balance.
 *
 * 6.Display/update the balance in the DOM/UI.
 */

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(addMoneyInput, pinNumberInput);
    if (pinNumberInput === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money. Please try again later");
    }
  });
