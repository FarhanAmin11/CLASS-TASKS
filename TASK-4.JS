// DISPLAYING WELCOME MESSAGE

/* function displaywelcomemessage() {
    let username = prompt("ENTER YOUR NAME");
    alert("welcome "+username);
}
displaywelcomemessage(); */

// GENERATING RANDOM QUOTE

/* let quotesOfIqbalAndQuaid = [
    "1- Nations are born in the hearts of poets,they prosper and die in the hands of politicians - ALLAMA IQBAL",
    "2- There is no power on earth that can undo pakistan - QUAID-E-AZAM",
    "3- Spend money to make character but dont spend character to make money - ALLAMA IQBAL",
    "4- Success consits in moving from failure to failure without loss of enthusiasm - QUAID-E-AZAM ",
    "5- With faith, discipline and selfless devotion to duty ,there is nothing worthwile that you cannot achieve - ALLAMA IQBAL",
    "6- No nation can rise to the height of glory unless your women are side by side with you - QUAID-E-AZAM "
];

function generateQuote() {
    const random = Math.floor(Math.random() * quotesOfIqbalAndQuaid.length);
    return quotesOfIqbalAndQuaid[random];
}
    document.getElementById('quotesOfIqbalAndQuaid').innerText = generateQuote(); */
    
// GENERATING A RANDOM NUMBER BETWEEN 1 - 100 
function generatenumber() {
    const randomnumber = Math.floor(Math.random()*100);
    document.write(randomnumber)
    return randomnumber;
    }

generatenumber();