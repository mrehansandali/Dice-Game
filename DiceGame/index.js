document.getElementById("p1win").style.display = "none"
document.getElementById("p2win").style.display = "none"

const start = () => {
    let ranRes1;
    let ranRes2;
    const p1func = () => {
        let randomNum = Math.ceil((Math.random())*6)
        ranRes1 = `images/Dice-${randomNum}.png`
        let p1res = document.getElementsByClassName("p1res")[0].childNodes[3].src = ranRes1
    } 
    p1func()
    
    const p2func = () => {
        let randomNum = Math.ceil((Math.random())*6)
        ranRes2 = `images/Dice-${randomNum}.png`
        let p2res = document.getElementsByClassName("p2res")[0].childNodes[3].src = ranRes2
    }
    p2func()

    if(ranRes1 === ranRes2) {
        document.getElementById("p1win").style.display = "none"
        document.getElementById("p2win").style.display = "none"
        document.getElementById("winner").firstChild.nextSibling.innerText = "Draw"      
    }
    else if(ranRes1 > ranRes2) {
        document.getElementById("winner").firstChild.nextSibling.innerText = ""      
        document.getElementById("p2win").style.display = "none"
        document.getElementById("p1win").style.display = "flex"
    }
    else{ 
        document.getElementById("winner").firstChild.nextSibling.innerText = ""      
        document.getElementById("p1win").style.display = "none"
        document.getElementById("p2win").style.display = "flex"   
    }
}