
 /*class Generator{
    
    constructor(root) {
        
        this.Generator = new Generator();
    }
    */
      function generateLink(){
        baseURL = 'https://www.soccerScoreboard.com/';
        link = Math.floor(Math.random() * 10000 + 1);
    
        currentLink = new URL(link, baseURL);
        return currentLink;
    }
    





console.log(currentLink);