// List of allowed names
const allowedNames = ["jaynah", "nica", "kim", "halei", "ashley", "charls", "rizzia","steycie"];

let userName = "";

 error.innerText = "";

  if (!allowedNames.includes(input)) {
    error.innerText = "Name not found 💛";
    return;
  }

  userName = input.charAt(0).toUpperCase() + input.slice(1);

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  document.getElementById("welcomeText").innerText =
    "Hi " + userName + " 💛";

