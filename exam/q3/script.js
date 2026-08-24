const signupButton = document.getElementById("signupbutton");
const message = document.getElementById("message");

signupButton.addEventListener("click", function () {
  signupButton.disabled = true;
  message.textContent = "Creating account...";
  const signuPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  signuPromise.then(() => {
    message.textContent = "Account created successfully!";
  });
});
