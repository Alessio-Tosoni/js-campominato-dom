
let generator = document.getElementById("generator")
generator.addEventListener("click", function(){
    let difficult = document.getElementById("difficult-selector").value;
    if (difficult == "facile"){
        let numcelle = 100;
        let grid = document.getElementById("grid")
        const random = []

        for (let i = 0; i < 16; i++) {
           z = (Math.floor(Math.random() * numcelle) +1)
           console.log(z)
           if (random.includes(z)){
               i--
            } else{
                random.push(z)
            }
        }
       
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-facile");
            grid.appendChild(cella)
            cella.innerText = i

            cella.addEventListener("click", function(){
                console.log("cella cliccata " + i)
                cella.classList.toggle("evidenziata")
               //devo comparare il risultato di random(che è un array) con i di cella che clicco
               
               if (random.includes(i)){
                cella.classList.add("bomba")
                alert("hai perso")
                //provo a fermare il gioco
                
               }
            })
            
        }
        
        

    } else if (difficult == "medio"){
        let numcelle = 81;
        let grid = document.getElementById("grid")
        const random = []

        for (let i = 0; i < 16; i++) {
           z = (Math.floor(Math.random() * numcelle) +1)
           console.log(z)
           if (random.includes(z)){
               i--
            } else{
                random.push(z)
            }
        }

        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-medio");
            grid.appendChild(cella)
            cella.innerText = i
            
            cella.addEventListener("click", function(){
                console.log("cella cliccata", i)
                cella.classList.toggle("evidenziata")
                if (random.includes(i)){
                    cella.classList.add("bomba")
                    alert("hai perso")
                    //provo a fermare il gioco
                    
                }
            })
            //generatore bombe
        }
    } else{
        let numcelle = 49;
        let grid = document.getElementById("grid")
        const random = []
        for (let i = 0; i < 16; i++) {
            z = (Math.floor(Math.random() * numcelle) +1)
            console.log(z)
            if (random.includes(z)){
                i--
            } else{
                 random.push(z)
            }
        }
        for (let i = 1; i <= numcelle; i++ ){
            const cella = document.createElement("div")
            cella.classList.add("square-difficile");
            grid.appendChild(cella)
            cella.innerText = i
            
            cella.addEventListener("click", function(){
                console.log("cella cliccata", i)
                cella.classList.toggle("evidenziata")
                //generatore bombe
                if (random.includes(i)){
                    cella.classList.add("bomba")
                    alert("hai perso")
                    //provo a fermare il gioco
                    
                }
            })
        }

    }
})

