document.addEventListener("keydown", function(event) {
    if (event.keyCode == 123){
        event.preventDefault();
        // TODO: Write Code here for what happens when F12 is pressed.
        document.body.style.backgroundColor = "#180153";
        document.querySelector("#wininfo").classList.add("hide");
        document.querySelector("#winlogo").classList.add("hide");
        document.querySelector("#loader").classList.add("hide");
    }
  });