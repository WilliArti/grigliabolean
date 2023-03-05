


const form = document.getElementById('form')
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(document.getElementById('difficoltà').value);
    difficoltà = document.getElementById('difficoltà').value
    game(difficoltà);
})

function game(n) {
    var element1 =  document.getElementById('grid1');
    if (typeof(element1) != 'undefined' && element1 != null)  
    {
        element1.remove();
    }
    var element2 =  document.getElementById('grid2');
    if (typeof(element2) != 'undefined' && element2 != null)  
    {
        element2.remove();
    }
    var element3 =  document.getElementById('grid3');
    if (typeof(element3) != 'undefined' && element3 != null)  
    {
        element3.remove();
    }
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
    for(i=0; i<e; i++){
        let square = createnewsquare();
        square.innerText = i+1
        grid.appendChild(square)

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
    return currentelement
}
