document.addEventListener("keydown", (e) => {
	const keyCode = e.code;

	const ele = document.querySelector(`.key[data-key="${keyCode}"]`),
		audioElm = document.querySelector(`audio[data-key="${keyCode}"]`);

	if (!ele) {
		return;
	}
	audioElm.currentTime = 0;
	audioElm.play();

	ele.classList.add("playing");
});

const keyAll = [...document.querySelectorAll(".key")];

keyAll.forEach((keyEL) => {
	keyEL.addEventListener("transitionend", (e) => {
		e.target.classList.remove("playing");
	});
});
