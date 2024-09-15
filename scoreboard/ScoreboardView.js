/**
 * In this file, it will basically the necessary code to 
 * handle all of our user interface information (so like the HTML and etc)
 * It will also respond to when the user presses on buttons 
 * (mainly talking about the plus and minus sign button)
 */
 export default class ScoreboardView {
	constructor(root, playerOneName, playerTwoName, onControlButtonClick) {
		this.root = root;
		this.root.innerHTML = `
			<div class="scoreboard">
				<div class="scoreboard__name scoreboard__name--one" data-for-player="one">${playerOneName}</div>
				<div class="scoreboard__name scoreboard__name--two" data-for-player="two">${playerTwoName}</div>
				<div class="scoreboard__score" data-for-player="one">0</div>
				<div class="scoreboard__score" data-for-player="two">0</div>

				<div class="scoreboard__controls" data-for-player="one">
					<button class="scoreboard__control-button">-</button>
					<button class="scoreboard__control-button">+</button>
				</div>

				<div class="scoreboard__controls" data-for-player="two">
					<button class="scoreboard__control-button">-</button>
					<button class="scoreboard__control-button">+</button>
				</div>
			</div>

			
		`;

		this.root.querySelectorAll(".scoreboard__control-button").forEach(controlButton => {
			controlButton.addEventListener("click", () => {
				const direction = controlButton.textContent === "-" ? "minus" : "plus";
				const player = controlButton.closest(".scoreboard__controls").dataset.forPlayer;
			if(document.URL.includes("EditingPage.html")){
				//onControlButtonClick(player, direction);
			} else {
				onControlButtonClick(player, direction);
			}
				
			});
		});

		//this part is for getting the names
		this.root.querySelectorAll(".scoreboard__name").forEach(playerName => {
			playerName.addEventListener("click", () => {
				const player1 = playerName.closest(".scoreboard__name").dataset.forPlayer;
				const player2 = playerName.closest(".scoreboard__name").dataset.forPlayer;

			if(document.URL.includes("inProgress.html")){
				//onControlButtonClick(player1, player2);
			} else{
				onControlButtonClick(player1, player2);
			}
				
			});
		});
		
	}

	update(playerOneScore, playerTwoScore) {
		this.root.querySelector(".scoreboard__score[data-for-player='one']").textContent = playerOneScore;
		this.root.querySelector(".scoreboard__score[data-for-player='two']").textContent = playerTwoScore;
	}
	updateName(playerOneName, playerTwoName){
		this.root.querySelector(".scoreboard__name--one[data-for-player='one']").textContent = playerOneName;
		this.root.querySelector(".scoreboard__name--two[data-for-player='two']").textContent = playerTwoName;
	}
}
