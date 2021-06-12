let myBal = parseInt(document.getElementById("myBal").innerText);

function send() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 5000) {
        alert("Insufficient Balance.")
    } else {
        var user = enterName;
        var total = parseInt(document.getElementById(user).innerHTML) + enterAmount;
        var myBal = parseInt(document.getElementById("myBal").innerText) - enterAmount
        document.getElementById("myBal").innerText = myBal
        document.getElementById(user).innerHTML = total;
        alert(`Transaction Successful ${enterAmount} is sent to ${enterName}.`)
    }
}