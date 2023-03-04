console.log(10)
const x = document.getElementById('difficoltà').value
console.log(x)







function creategrid() {
    const grid = document.createElement('div')
    grid.setAttribute('id','grid')
    document.body.appendChild(grid)
    return grid

}

function createnewsquare() {
    const currentelement = document.createElement('div')
    currentelement.classList.add('square')
    return currentelement
}
