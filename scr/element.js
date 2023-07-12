// Функція для побудови елемента та розміщення його в DOM
function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
      
        <p class="element-text">Modal/name: <span class="element-modal">${elem.modal}</span></p> 
        <p class="element-text">Capacity: <span class="element-capacity">${elem.capacity}</span></p>
        <p class="element-text">Conectors: <span class="element-conectors">${elem.conectors}</span></p>
        <p class="element-text">Size: <span class="element-size">${elem.size}</span></p> 
        <p class="element-text">Fast charging support: <span class="element-fastChargingSupport">${elem.fastChargingSupport}</span></p>  
    </div>
    <div class="element-footer">
        <button class="blue-button" onclick="modifyModalToEdit(${id})">Edit</button><span> </span>
        <button class="red-button" onclick="removeElementFromStorage(${id})">Delete</button>
    </div>
    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}

// Зміна параметрів модалки для СТВОРЕННЯ нового елементу
function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Create new Powerbank"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Create"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    //  Вікриваємо модалку
    modal.open()
}

// Зміна параметрів модалки для РЕДАГУВАННЯ поточного елементу
function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Edit PowerBank"
    document.getElementById("submitbtn").innerText = "Update"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    //  Вибираємо елемент по ID з LS і парсимо в об'єкт
    let edElem = JSON.parse(localStorage.getItem(id))
    //  Встановлюємо значення полів форми   
    document.getElementById("modal").value = edElem.modal;   
    document.getElementById("capacity").value = edElem.capacity;  
    document.getElementById("conectors").value = edElem.conectors;
    document.getElementById("size").value = edElem.size;
    document.getElementById("fastChargingSupport").value = edElem.fastChargingSupport; 
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    // document.getElementById("imgfile").value = edElem.pictname; 
    //  Вікриваємо модалку
    modal.open()
}

//  Відображення в модалці зменшеної картинки
function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}

//Слухаємо, чи змінилося значення поля input type="file" (чи вибралася інша картинка)
document.getElementById("imgfile").addEventListener("change", showPrewImg)


//Валідація введеного 
function validNameAndVolume(){
    let valid = true;
    let showMsg = '';
    let formmodal = document.getElementById("modal").value.trim();
    let formCapacity = document.getElementById("capacity").value.trim();
    let formConectors = document.getElementById("conectors").value.trim();
    let formsize = document.getElementById("size").value.trim();  
    let formFastChargingSupport = document.getElementById("fastChargingSupport").value.trim(); 
    
    if (!formmodal) {
        showMsg = showMsg + 'Powerbank modal field is empty. INPUT the Powerbank modal. '
        valid = false;
    }
    if (!formCapacity) {
        showMsg = showMsg + 'Powerbank capacity field is empty. INPUT the Powerbank capacity. '
        valid = false;
    } 
    if (!formConectors) {
        showMsg = showMsg + 'Powerbank conectors field is empty. INPUT the Powerbank conectors. '
        valid = false;
    }
    if (!formsize) {
        showMsg = showMsg + 'Powerbank size field is empty. INPUT the Powerbank size. '
        valid = false;
    }
    if (!formFastChargingSupport) {
        showMsg = showMsg + 'Powerbank fastChargingSupport field is empty. INPUT the Powerbank fastChargingSupport. '
        valid = false;
    }   
 
    
    
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("The image for the Powerbank was not selected. SELECT an IMAGE for the Powerbank. ")
        return false} ;
}

// Створення параметрів нового елемента та розміщення його в LS
function addElementToLocalStorage(){
            
    if (validNameAndVolume() && validImg()) {
        //Шукаємо максимальне значення ID,  в LS не зайняте
        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 
        //Забираємо значення з форми
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
        // Будуємо новий елемент
        const newElement = {};
        newElement.modal =  document.getElementById("modal").value;   
        newElement.capacity = document.getElementById("capacity").value;   
        newElement.conectors = document.getElementById("conectors").value; 
        newElement.size = document.getElementById("size").value; 
        newElement.fastChargingSupport = document.getElementById("fastChargingSupport").value;   
        newElement.pictname = filename;   
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(newElement)
        // Пакуємо елемент в LS
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   
// Редагування параметрів елемента та розміщення його в LS
function editElementInLocalStorage(id) {
    if (validNameAndVolume()) {
        let edElem = JSON.parse(localStorage.getItem(id))
        newElement.modal =  document.getElementById("modal").value;   
        newElement.capacity = document.getElementById("capacity").value;   
        newElement.conectors = document.getElementById("conectors").value; 
        newElement.size = document.getElementById("size").value; 
        newElement.fastChargingSupport = document.getElementById("fastChargingSupport").value;  
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
            edElem.pictname = filename; 
        }
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(edElem)
        // Пакуємо елемент в LS
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
    }
   
}

// Видалення параметрів елемента з LS
function removeElementFromStorage(id){
    if (confirm("Are you sure you want to delete?")) {
        localStorage.removeItem(id)
        location.reload();          
    }

} 

let keyNumbers = Object.keys(localStorage).length

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}

