const cardArray = [
    {
        name: "ambion",
        img: "Images/ambion.png",
    },
    {
        name: "bulbasaur",
        img: "Images/bulbasaur.jpg",
    },
    {
        name: "charizard",
        img: "Images/charizard.jpg",
    },
    {
        name: "flareon",
        img: "Images/flareon.jpg",
    },
    {
        name: "lapras",
        img: "Images/lapras.jpg",
    },
    {
        name: "squirtle",
        img: "Images/squirtle.jpg",
    },
    {
        name: "ambion",
        img: "Images/ambion.png",
    },
    {
        name: "bulbasaur",
        img: "Images/bulbasaur.jpg",
    },
    {
        name: "charizard",
        img: "Images/charizard.jpg",
    },
    {
        name: "flareon",
        img: "Images/flareon.jpg",
    },
    {
        name: "lapras",
        img: "Images/lapras.jpg",
    },
    {
        name: "squirtle",
        img: "Images/squirtle.jpg",
    }
];
// arranging cardArray objects randomly using sort
cardArray.sort(() => Math.random() - 0.5);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result")
let cardChosen = []
let cardChosenId =[]
let cardWon =[]


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "Images/bg.jpg")
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img")
    console.log(cards)
    if(cardChosen[0]==cardChosen[1]){
        alert("You found the correct card.")
        cards[cardChosenId[0]].setAttribute("src","Images/whitebg.jpg")
        cards[cardChosenId[1]].setAttribute("src","Images/whitebg.jpg")
        cards[cardChosenId[0]].removeEventListener("click",flipCard)
        cards[cardChosenId[1]].removeEventListener("click",flipCard)
        cardWon.push(cardChosen)
    }else{
        cards[cardChosenId[0]].setAttribute("src","Images/bg.jpg")
        cards[cardChosenId[1]].setAttribute("src","Images/bg.jpg")
    }
    resultDisplay.innerHTML = cardWon.length
    cardChosen =[];
    cardChosenId =[]
    if(cardWon.length==cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations!!, You found all the cards.Reload the page to play again."
    }
}
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosenId.push(cardId)
    cardChosen.push(cardArray[cardId].name)
    console.log(cardArray)
    this.setAttribute("src",cardArray[cardId].img)
    if(cardChosen.length===2){
        setTimeout(checkMatch,1000);
    }

}





















