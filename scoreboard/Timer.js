// in the code below, it will be for the timer

export default class Timer{
    constructor(root){
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
            halves: root.querySelector(".timer__part--halves")

        };
        if(document.URL.includes("EditingPage.html")){
            this.interval = null;
            this.remainingSeconds = 0;
            //may need to add another main thing, being something like
            this.remainingHalves = 0;
        }
        else{
            this.interval = null;
            // need a second variable called "beginningSeconds" that is held constant to remember what the timer starts at 
            // helps when decreasing the halves/quarters
            this.beginningSeconds = this.remainingSeconds = localStorage.getItem("remainingSeconds");
            this.remainingHalves = localStorage.getItem("remainingHalves");

            this.updateInterfaceTime();
            // need to set it back to zero after construction so the value doesn't carry over to future sessions
            localStorage.setItem("remainingSeconds", 0);
            //may need to also do the same for remainingHalves, which is
            localStorage.setItem("remainingHalves", 0);
        }

        //This is to operate the start button 
        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
              } else {
                this.stop();
              }
        });

        //This process is so that we will be able to set the clock time
        this.el.reset.addEventListener("click", () => {
        if(document.URL.includes("EditingPage.html")){

            const inputMinutes = prompt("Please enter the number of minutes:");

            if (inputMinutes < 60) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                localStorage.setItem("remainingSeconds", this.remainingSeconds);
                this.updateInterfaceTime();
            }

            //here is where we will place the other if statement for the halves part
            const inputHalves = prompt("Please enter the amount of play periods:");
            if (inputHalves > 0){
                this.stop();
                this.remainingHalves = inputHalves * 1;
                localStorage.setItem("remainingHalves", this.remainingHalves);
                this.updateInterfaceTime();
            }
        }else {
            // do nothing
        }
        

        });
    } // the end of the constructor 


    //this code will update the interface time 

    updateInterfaceTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        //here we make the "const" for halves, which may look like:
        const halves = this.remainingHalves / 1;  //I place divide by 1 because if someone enters less than one
        //then it will not go through 

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
        //Here, we can do something like:
        this.el.halves.textContent = halves;
    }

    

    //this interface is refering to the start and the stop button

    updateInterfaceControls(){
        if(this.interval === null){
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");

        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`; //this part makes the pause button icon
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");

        }
    }

    start(){//will start the timer
      if(document.URL.includes("EditingPage.html")){
             //do nothing 
        } else {
            if(this.remainingSeconds == 0) return;

            //this decrements the remaining time that is left
            this.interval = setInterval(() => {
                this.remainingSeconds--;
                this.updateInterfaceTime();
        
            //when the time updates to zero, then this command should
            //activate
                if(this.remainingSeconds == 0 && this.remainingHalves > 0){
                    this.stop();
                    // make the quarters subtract 1
                    this.remainingHalves--;
                    // reset the timer
                    this.remainingSeconds = this.beginningSeconds;
                    this.updateInterfaceTime();
                }
                // this runs when the game "ends"
                if(this.remainingHalves == 0){
                    // stop the clock for good and set the remaining seconds to zero
                    this.remainingSeconds = 0;
                    this.stop();
                    this.updateInterfaceTime();

                    // update title block to say "game over"
                    // disable scoreboard
                    document.getElementById("ending-game").innerHTML = "Game <br> Over!";
                }
            }, 1000);//this allows us to run code on a timer

            this.updateInterfaceControls();
           
    }
}

    stop() { 

        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();

    }


    static getHTML(){
        return `
		<span class="timer__part timer__part--minutes">00</span>
		<span class="timer__part">:</span>
		<span class="timer__part timer__part--seconds">00</span>
        <span class="timer__part">|</span>
        <span class="timer__part--halves">0</span>

		<button type="button" class="timer__btn timer__btn--control timer__btn--start">
			<span class="material-icons">play_arrow</span>
		</button>

		<button type="button" class="timer__btn timer__btn--reset">
			<span class="material-icons">timer</span>
		</button> 
        `;
    }
}

new Timer(
    document.querySelector(".timer")
);