const passwordRandom = document.querySelector("#input-field");
const button = document.querySelector(".btn");
const copyPassword= document.querySelector("img");

button.addEventListener("click", () => {
  const minLength = 8;
  const maxLength = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&";
  const passwordLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  passwordRandom.value = password;

  console.log(password);
});

copyPassword.addEventListener("click", ()=>{
    passwordRandom.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
})

