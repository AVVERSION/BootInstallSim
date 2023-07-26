function remhide() {
    document.querySelector(".rufus").classList.remove("hide");
    document.querySelector("#rlog").classList.remove("highlight")
}

const progressBar = document.createElement("progress");
progressBar.value = 0;
progressBar.max = 100;
progressBar.style.width = "100%";
progressBar.style.height = "20px";
progressBar.style.border = "1px solid #ccc";
progressBar.style.borderRadius = "5px";
progressBar.style.backgroundColor = "#8bc34a";
document.querySelector(".content").appendChild(progressBar);

const progressText = document.createElement("div");
progressText.style.textAlign = "center";
progressText.style.marginTop = "5px";
progressText.textContent = "0%";
document.querySelector(".content").appendChild(progressText);

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  let progress = 0;
  const intervalId = setInterval(() => {
    progress += 10;
    progressBar.value = progress;
    progressText.textContent = `${progress}%`;
    if (progress >= 100) {
      clearInterval(intervalId);
      document.querySelector("#eject-btn").classList.remove("hide");
    }
  }, 300);
});

const ejectButton = document.querySelector("#eject-btn");
ejectButton.addEventListener("click", () => {
  document.querySelector(".rufus").classList.add("hide");
  document.querySelector("#winbtn").classList.add("highlight");
  progressBar.value = 0;
  progressText.textContent = "0%";
  ejectButton.classList.add("hide");
})

const winbtn = document.querySelector("#winbtn");
winbtn.addEventListener("click", () => {
  document.querySelector(".startMenu").classList.remove("hide");
  winbtn.classList.remove("highlight");
})