window.onload = function () {
	document.body.style.cursor = "none";
};
document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("keydown", function (event) {
		if (event.code == "F12") {
			event.preventDefault();
			document.body.style.backgroundColor = "#1e1e1e";
			document.querySelector("#wininfo").classList.add("hide");
			document.querySelector("#winlogo").classList.add("hide");
			document.querySelector("#loader").classList.add("hide");
			document.querySelector("#bootselector").classList.remove("hide");
			alert("The Boot Selector may not look the same in your computer, but it will work the same way. Use the Arrow Keys to Navigate and Enter to Select.");
			alert("It can also be oriented in landscape instead of the portrait form here.")
		}
	});
	const options = document.querySelectorAll(".option");
	console.log(options);
	let activeOptionIndex = 0;
	// Set the initial active option
	options[activeOptionIndex].classList.add("active");
	updateSelected();
	// Update the selected label with the active option
	function updateSelected() {
		const selected = document.querySelector(".selected");
		selected.textContent = `Selected: ${
			options[activeOptionIndex].querySelector(".option-text").textContent
		}`;
	}
	// Handle keyboard navigation
	document.addEventListener("keydown", (event) => {
		if (event.code === "ArrowDown") {
			// Move to the next option
			options[activeOptionIndex].classList.remove("active");
			activeOptionIndex = (activeOptionIndex + 1) % options.length;
			options[activeOptionIndex].classList.add("active");
			updateSelected();
		} else if (event.code === "ArrowUp") {
			// Move to the previous option
			options[activeOptionIndex].classList.remove("active");
			activeOptionIndex =
				(activeOptionIndex - 1 + options.length) % options.length;
			options[activeOptionIndex].classList.add("active");
			updateSelected();
		} else if (event.code === "Enter") {
			if (activeOptionIndex === 0) {
				window.location.replace("win4.html");
			} else {
				Notification.requestPermission().then((perm) => {
					if (perm === "granted") {
						new Notification("AVVERSION", {
							body: "Hey! Remember we created a Bootable USB? Boot Using that to Install Windows!",
							icon: "../assets/img/avversion.png",
						});
					} else {
						alert(
							"Remember we created a Bootable USB? Boot Using that to Install Windows!"
						);
					}
				});
			}
		}
	});
});
