const form = document.getElementById('form')
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(document.getElementById('difficoltà').value);
    difficoltà = document.getElementById('difficoltà').value
    game(difficoltà);
})

function game(n) {
    clearscreen()
    
    let gridId = ""
    let e = 0
    if(n==1){
        gridId = "grid1";
        e=100
    } else if(n==2){
        gridId = "grid2";
        e=81
    } else {
        gridId = "grid3";
        e=49
    }
    creategrid(gridId);
    grid = document.getElementById(gridId)
    const bombe = randomlist(e);
    let punteggio = 0
    console.log(bombe)
        for(i=0; i<e; i++){
        let square = createnewsquare();
        square.innerText = i+1
        if(bombe.includes(i+1)){
            square.addEventListener('click', function(){
                square.style.backgroundColor = "red";
                setTimeout(() => {
                    gameover(punteggio)
                }, 200);
        })
        }else {
            square.addEventListener('click', function(){
                square.style.backgroundColor = "lightblue"
                punteggio++
                if(punteggio==e-16){win()}
            })
        }

        grid.appendChild(square)

    }



    

}
function win(){
    clearscreen()
    alert("Congrutalazioni hai vinto")
}
function gameover(p){
    clearscreen();
    alert("hai perso il tuo punteggio è di: "+ p + " punti") 
}
function randomlist(i){
    const numbers = [];

    while (numbers.length < 16) {
 
    const randomNumber = Math.floor(Math.random() * i) + 1;

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}
function clearscreen(){
    var elements = document.getElementsByTagName('div');
    if (typeof(elements) != 'undefined' && elements != null)  
    {
        const elementsArray = Array.from(elements);

        elementsArray.forEach(element => {
            element.remove();
        });
    }
}
function creategrid(gridId) {
    const grid = document.createElement("div")
    grid.id = gridId
    document.body.append(grid)
    

}
function createnewsquare() {
    const currentelement = document.createElement('div')
    currentelement.classList.add('square')
    currentelement.addEventListener('click', function(){currentelement.style.backgroundColor = "lightblue"})
    return currentelement
}
