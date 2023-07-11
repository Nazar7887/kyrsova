
function prepare(){
    let startArray = [
        {model: "Hyperx pullsefire surge ", interface: "USB", sensor: "3389",
         buttons: 6, color:"Black", pictname:"pullsefire.jpg"},
         {model: "Logitec G102", interface: "USB", sensor: "Mercury",
         buttons: 6, color:"white", pictname:"G102.webp"},
         {model: "Endgame Gear XM1", interface: "USB", sensor: "PMW3389DM",
         buttons: 6, color:"Black", pictname:"endgame.jpg"}
    ]
    
    localStorage.clear()
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  
}