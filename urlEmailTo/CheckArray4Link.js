//import {generateLink} from "/URLGenerator.js"



const linkMap = new Map();

function generateLink(){
    date = new Date();
    baseURL = 'https://www.peeweesoccerScoreboard.com/inProgress/';
    link = Math.floor(Math.random() * 10000 + 1);
    extension= `${link}.html`;
    fullLink = new URL(extension, baseURL)
    day = date.getDay().toString();
    linkMap.set( fullLink, day );
    return fullLink;
}



function generateLink2(){
    date = new Date();
    baseURL = 'https://www.peeweesoccerScoreboard.com/inProgress/';
    link = Math.floor(Math.random() * 10000 + 1);
    extension= `${link}.html`;
    fullLink = new URL(extension, baseURL)
    day = (date.getDay() + 1).toString();
    linkMap.set( fullLink, day );
    //return newLink;
}

function generateLink3(){
    date = new Date();
    baseURL = 'https://www.peeweesoccerScoreboard.com/inProgress/';
    link = Math.floor(Math.random() * 10000 + 1);
    extension= `${link}.html`;
    fullLink = new URL(extension, baseURL)
    day = (date.getDay() + 2).toString();
    linkMap.set( fullLink, day );
    //return newLink;
}

function mapSearchDelete(map){
    
    checkDate = new Date();
    map.forEach(function(value, key) {
        
        //console.log(key + " = " + value);
        if (value == checkDate.getDay() ) {
            map.delete(key);
        }
    })
}

function showLink() {

}



    generateLink();
    generateLink2();
    generateLink3();
    generateLink2();
    generateLink();
    generateLink();
    generateLink3();
    generateLink3();
    generateLink2();


    console.log(linkMap.size);
    console.log([linkMap.entries()])
    mapSearchDelete(linkMap);
    console.log(linkMap.size);
    console.log([linkMap.entries()])
    /*linkArray.push(generateLink());
    linkArray.push(generateLink());
    linkArray.push(generateLink());
        .toString().concat("-" + (date.getDay() + 1).toString())
    

    linkArray.splice(0,1).toString();

    console.log(linkArray);
    console.log(linkArray);
    arraySearchDelete(first);
    console.log(linkArray);*/


