const selectButton = document.querySelectorAll(".add");

for (i = 0; i < selectButton.length; i++) {
  selectButton[i].addEventListener("click", function () {
    event.target.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i> Item added`;
    event.target.style.backgroundColor = "green";
  });
}
