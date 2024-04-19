let Scont = document.querySelector(".countdown .second .count"),
    Sst = document.querySelector(".countdown .second .count .st .num"),
    Sen = document.querySelector(".countdown .second .count .en .num"),
    Snum = Number(document.querySelector(".countdown .second .count .main").firstElementChild.innerHTML) - 1,

    Mcont = document.querySelector(".countdown .minute .count"),
    Mst = document.querySelector(".countdown .minute .count .st .num"),
    Men = document.querySelector(".countdown .minute .count .en .num"),
    Mnum = Number(document.querySelector(".countdown .minute .count .main").firstElementChild.innerHTML) - 1,

    Hcont = document.querySelector(".countdown .hour .count"),
    Hst = document.querySelector(".countdown .hour .count .st .num"),
    Hen = document.querySelector(".countdown .hour .count .en .num"),
    Hnum = Number(document.querySelector(".countdown .hour .count .main").firstElementChild.innerHTML) - 1,

    Dcont = document.querySelector(".countdown .day .count"),
    Dst = document.querySelector(".countdown .day .count .st .num"),
    Den = document.querySelector(".countdown .day .count .en .num"),
    Dnum = Number(document.querySelector(".countdown .day .count .main").firstElementChild.innerHTML) - 1,

    social = document.querySelectorAll(".social svg"),

    Stop = 0
social.forEach(s => s.addEventListener("mouseover", function () { s.firstElementChild.attributes[0].value = "#fb6087" }))
social.forEach(s => s.addEventListener("mouseleave", function () { s.firstElementChild.attributes[0].value = "#8385A9" }))

function StopAll() { clearInterval(sec) }

let sec = setInterval(function () {
    let Smain = document.querySelector(".countdown .second .count .main"),
        newmain = document.createElement("div"),
        newnum = document.createElement("div")

    newmain.classList.add("main", "cards")
    newnum.classList.add("num")

    if (Snum <= 0) {
        newnum.innerHTML = Sen.innerHTML = "00"
        if (Stop === 3) {
            StopAll()
        } else {
            Sst.innerHTML = "59"
            Snum = 60
            MoveMin()
        }
    }
    else if (Snum < 10) {
        newnum.innerHTML = Sen.innerHTML = "0" + Snum
        Sst.innerHTML = "0" + (Snum - 1)
    }
    else {
        newnum.innerHTML = Sen.innerHTML = Snum
        if (Snum === 10) { Sst.innerHTML = "09" }
        else { Sst.innerHTML = Snum - 1 }
    }
    Snum -= 1

    Smain.remove()
    newmain.append(newnum)
    Scont.append(newmain)
}, 1000)

function MoveMin() {
    let Mmain = document.querySelector(".countdown .minute .count .main"),
        newmain = document.createElement("div"),
        newnum = document.createElement("div")
    newmain.classList.add("main", "cards")
    newnum.classList.add("num")
    setTimeout(function () {
        if (Mnum <= 0) {
            newnum.innerHTML = Men.innerHTML = "00"
            if (Stop === 2) {
                Stop = 3
            } else {
                Mst.innerHTML = "59"
                Mnum = 60
                MoveHour()
            }
        }
        else if (Mnum < 10) {
            newnum.innerHTML = Men.innerHTML = "0" + Mnum
            Mst.innerHTML = "0" + (Mnum - 1)
        }
        else {
            newnum.innerHTML = Men.innerHTML = Mnum
            if (Mnum === 10) { Mst.innerHTML = "09" } else { Mst.innerHTML = Mnum - 1 }
        }
        Mnum -= 1
    }, 1000)
    if (Mnum === 59) { newnum.innerHTML = "00" }
    else if (Mnum < 10) { if (Mnum === 9) { newnum.innerHTML = 10 } else { newnum.innerHTML = "0" + (Mnum + 1) } }
    else { newnum.innerHTML = Mnum + 1 }
    Mmain.remove()
    newmain.append(newnum)
    Mcont.append(newmain)
}

function MoveHour() {
    let Hmain = document.querySelector(".countdown .hour .count .main"),
        newmain = document.createElement("div"),
        newnum = document.createElement("div")
    newmain.classList.add("main", "cards")
    newnum.classList.add("num")
    setTimeout(function () {
        if (Hnum <= 0) {
            newnum.innerHTML = Hen.innerHTML = "00"
            if (Stop === 1) {
                Stop = 2
            } else {
                Hst.innerHTML = "23"
                Hnum = 24
                MoveDay()
            }
        }
        else if (Hnum < 10) {
            newnum.innerHTML = Hen.innerHTML = "0" + Hnum
            Hst.innerHTML = "0" + (Hnum - 1)
        }
        else {
            newnum.innerHTML = Hen.innerHTML = Hnum
            if (Hnum === 10) { Hst.innerHTML = "09" } else { Hst.innerHTML = Hnum - 1 }
        }
        Hnum -= 1
    }, 1000)
    if (Hnum === 23) { newnum.innerHTML = "00" }
    else if (Hnum < 10) { if (Hnum === 9) { newnum.innerHTML = 10 } else { newnum.innerHTML = "0" + (Hnum + 1) } }
    else { newnum.innerHTML = Hnum + 1 }
    Hmain.remove()
    newmain.append(newnum)
    Hcont.append(newmain)
}

function MoveDay() {
    let Dmain = document.querySelector(".countdown .day .count .main"),
        newmain = document.createElement("div"),
        newnum = document.createElement("div")
    newmain.classList.add("main", "cards")
    newnum.classList.add("num")
    setTimeout(function () {
        if (Dnum <= 0) {
            newnum.innerHTML = Den.innerHTML = Dst.innerHTML = "00"
            Stop = 1
        }
        else if (Dnum < 10) {
            newnum.innerHTML = Den.innerHTML = "0" + Dnum
            Dst.innerHTML = "0" + (Dnum - 1)
        }
        else {
            newnum.innerHTML = Den.innerHTML = Dnum
            if (Dnum === 10) { Dst.innerHTML = "09" } else { Dst.innerHTML = Dnum - 1 }
        }
        Dnum -= 1
    }, 1000)
    if (Dnum < 10) { if (Dnum === 9) { newnum.innerHTML = 10 } else { newnum.innerHTML = "0" + (Dnum + 1) } }
    else { newnum.innerHTML = Dnum + 1 }
    Dmain.remove()
    newmain.append(newnum)
    Dcont.append(newmain)
}