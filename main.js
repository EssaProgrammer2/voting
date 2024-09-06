fetch("https://4ae6c0bc-c2a7-49f7-9216-c9c1ec36299e-00-2i7z4x2g7uuho.picard.replit.dev/votevote")
.then(response => response.json())
.then((data)=>{
    let conttainers = 0
    for (let i = 0; i < data.judul.length; i ++){
        const newel = document.createElement("div")
        newel.style.flexDirection = "row"
        newel.className = "container text-center"
        const newellagi = document.createElement("div")
        newellagi.className = "row"
        newellagi.style.display = "flex"
        newellagi.style.alignItems = "center"
        newellagi.style.justifyContent = "center"
        newel.append(newellagi)
        document.querySelector(".containerss").append(newel)
        for (let iu = 0; iu < 6; iu ++){
            conttainers ++
            const newelll = document.createElement("div")
            newelll.className = "alert alert-primary"
            newelll.style.flexDirection = "column"
            newelll.style.margin = "15px"
            newelll.style.height = "150px"
            newelll.style.width = "150px"
            const pengisian = document.createElement("div")
            pengisian.style.display = "flex"
            pengisian.style.flexDirection = "column"
            const btnell = document.createElement("button")
            btnell.className = "btn btn-primary"
            btnell.textContent = "Vote"
            btnell.addEventListener("click", () => {
                localStorage.setItem("idvote", data.id[iu])
                document.location.replace("voting.html")
            })
            const elll = document.createElement("a")
            elll.style.marginBottom = "20px"
            elll.textContent = textContent = data.judul[i]
            pengisian.append(elll, btnell)
            newelll.append(pengisian)
            newellagi.append(newelll)
            i ++
        }
        i --
    }
})