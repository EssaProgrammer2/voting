fetch(`https://4ae6c0bc-c2a7-49f7-9216-c9c1ec36299e-00-2i7z4x2g7uuho.picard.replit.dev/voteygada/voteid=${localStorage.getItem("idvote")}`)
.then(response => response.json())
.then((data)=>{
    for (let iu = 0; iu < data.milih[0].length; iu ++){
    const newel = document.createElement("button")
    newel.textContent = data.milih[0][iu]
    const newellllll = document.createElement("div")
    let gaktauapa = 0
    let persen = []
    let gaktaudwadawda = 0
    for (let iuu = 0; iuu < data.voting.length; iuu ++){
        gaktaudwadawda = gaktaudwadawda + data.voting[iuu]
    }
    for (let iii = 0; iii <data.voting.length; iii ++){
        persen.push(((data.voting[iii] / gaktaudwadawda) * 100).toFixed(0))
    }
    console.log(persen)
    newellllll.textContent =  persen[iu] + "%"
    newel.addEventListener("click", () => {
        const dataaaa = new Date
        if (localStorage.getItem("udah") != dataaaa.getDate())
        fetch(`https://4ae6c0bc-c2a7-49f7-9216-c9c1ec36299e-00-2i7z4x2g7uuho.picard.replit.dev/vote/voteid=${localStorage.getItem("idvote")}&pilih=${iu + 1}&namaid=0`)
        .then(response => response.json())
        .then((data)=>{
            window.location.reload()
            localStorage.setItem("udah", dataaaa.getDate())
        })
    })
    document.querySelector(".containerpilih").append(newel, newellllll)
    }

})