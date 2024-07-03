window.onload = function () {
  const userInput = prompt("Nhập giá trị:");
  if (userInput === "861998") {
    document.querySelector("main").style.display = "block";
  } else {
    document.querySelector("main").style.display = "none";
  }
};
