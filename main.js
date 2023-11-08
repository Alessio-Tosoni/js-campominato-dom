
let generator = document.getElementById("generator")
generator.addEventListener("click", function(){
    let difficult = document.getElementById("difficult-selector").value;
    if (difficult == "facile"){
        let numcelle = 100;
        let grid = document.getElementById("grid")
        	
        
        
        
        
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-facile");
            grid.appendChild(cella)
            cella.innerText = i
            //generatore bombe
            
            
            cella.addEventListener("click", function(){
                console.log("cella cliccata " + i)
                cella.classList.toggle("evidenziata")
            })
            const random = []
            for (let i = 0; i < 16; i++) {
                random.push(Math.floor(Math.random() * (100 - 1) + 1))
                return random
            }
            
        }
    } else if (difficult == "medio"){
        let numcelle = 81;
        let grid = document.getElementById("grid")
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-medio");
            grid.appendChild(cella)
            cella.innerText = i
             //generatore bombe

            cella.addEventListener("click", function(){
                console.log("cella cliccata", i)
                cella.classList.toggle("evidenziata")
            })
        }
    } else{
        let numcelle = 49;
        let grid = document.getElementById("grid")
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-difficile");
            grid.appendChild(cella)
            cella.innerText = i
             //generatore bombe

            cella.addEventListener("click", function(){
                console.log("cella cliccata", i)
                cella.classList.toggle("evidenziata")
            })
        }

    }
})


// 