document
  .getElementById("btn-cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPIn = document.getElementById(
      "input-cash-out-pin-number"
    ).value;
    console.log(cashOut, cashOutPIn);
    if (cashOutPIn === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out, Please try again later");
    }
  });
