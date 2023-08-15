const containerAll = document.getElementById("container");
const containerSuccess = document.getElementById("container-success");
document.getElementById("email-btn").addEventListener("click", function () {
  function validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
  }

  const emailInput = document.getElementById("email-input").value;

  if (validateEmail(emailInput)) {
    //

    //
    containerAll.classList.add("display");
    containerSuccess.classList.add("remove");
  } else {
    const emailBox = document.querySelector(".email-box");
    //
    const input = document.querySelector("input");
    input.classList.add("error");
    //
    let newSpan = document.createElement("span");
    let textSpan = document.createTextNode("valid email required");
    newSpan.setAttribute("class", "spann");
    newSpan.appendChild(textSpan);
    emailBox.insertBefore(newSpan, input);
  }
});
const dismisBtn = document.getElementById("dismiss-btn");

dismisBtn.addEventListener("click", function () {
  containerAll.classList.remove("display");
  containerSuccess.classList.remove("remove");
});
