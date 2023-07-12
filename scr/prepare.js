
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {modal: "Xiaomi VXN4305GL", capacity: "10000", conectors: "USB", size: "150.5*73.6*15.1 мм", fastChargingSupport:"yes", pictname:"144453574.jpg"},
        {modal: "Xiaomi VXN4305GL", capacity: "11000", conectors: "Lightning", size: "150.5*73.6*15.1 мм", fastChargingSupport:"yes", pictname:"144453574.jpg"},
        {modal: "Xiaomi VXN4305GL", capacity: "12000", conectors: "USB", size: "150.5*73.6*15.1 мм", fastChargingSupport:"yes", pictname:"144453574.jpg"},
        {modal: "Xiaomi VXN4305GL", capacity: "13000", conectors: "USB", size: "150.5*73.6*15.1 мм", fastChargingSupport:"yes", pictname:"144453574.jpg"},
       
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}