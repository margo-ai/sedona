var hotelLink = document.querySelector(".hotel-search-botton");
var popup = document.querySelector(".hotel-search");

hotelLink.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  popup.classList.toggle("modal-show");

  if (popup.classList.contains("modal-show")) {
    popup.classList.add("modal-show");
  } else {
    popup.classList.remove("modal-show");
  }
});

