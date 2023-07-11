function getArrayFromStorage() {
    let keyNumbers = Object.keys(localStorage).length //Визначаємо кількість об'єктів LocalStorage
    // Оголошуємо об'єкт у який будемо збирати дані з LS
    let elm = {}
    // Оголошуємо масив у який будемо об'єкти
    let incomingArr = []
    
    //Вибираємо дані з LS, формуємо об'єкти та передаємо його в масив
    for (let i = 0; i < keyNumbers; i++) {
        let keyName = localStorage.key(i)
        let row = JSON.parse(localStorage.getItem(keyName))
        // buildElementToPage(keyName, row)
        elm = {}                // !!! Очищуємо об'єкт на початку кожної ітерації
        elm.id = keyName;
        elm.model = row.model;
        elm.interface = row.interface;
        elm.sensor = row.sensor;
        elm.buttons = row.buttons;
        elm.color = row.color;
        elm.pictname = row.pictname;
        incomingArr.push(elm)
    }
    return incomingArr
}

function sortElements(){
    let checkBox = document.getElementById("sortcheckbox");
    if (checkBox.checked == true){
       let sortArr = getArrayFromStorage()
        
        // Функція для сортування масиву по полю
        function byField(field) {
            return (a, b) => +a[field] > +b[field] ? 1 : -1;
          }
        
        //Сортуємо масив об'єктів по полю volume
        sortArr.sort(byField('buttons'));
        
        document.getElementsByClassName("displayzone")[0].innerHTML = ''
        for (let n = 0; n <sortArr.length; n++) {
            let tempEl = sortArr[n]
            buildElementToPage(tempEl.id, tempEl)
            // console.log(sortArr[n])
        }
      } else {
        setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
      }
}

function searchElements(){
  //  Очищеємо зону елементів
  document.getElementsByClassName("displayzone")[0].innerHTML = ''
  //  Беремо масив з LS
  let searchtArr = getArrayFromStorage()
  //  Беремо дані з поля пошуку
  let str = document.querySelector("#csearch").value
  //  Приводимо їх до нижнього регістру
  let serchStr = str.toLowerCase();
  //  Створюємо регулярку для тестування (пошуку)
  let  regExp = new RegExp(`${serchStr}`, "gi")
  let isFounded = false
  //  Перевіряємо елементи масиву
  for (let i=0; i<searchtArr.length; i++) {
      let row = searchtArr[i]
      let strM = row.model.toLowerCase();
      let strI = row.interface.toLowerCase();
      let strS = row.sensor.toLowerCase();

    
      if (regExp.test(strM) || regExp.test(strI)|| regExp.test(strS)) {buildElementToPage(row.id, row)
                                                                        isFounded = true}
      }
  if (!isFounded) {document.getElementsByClassName("displayzone")[0].innerHTML = '<h1 style="color:red; width:100%; text-align: center;" >No matches found</h1>'}
   
}

refresh = () => location.reload();

sortcheckbox.addEventListener('click', sortElements);

searchbtn.addEventListener('click', searchElements);

cancelbtn.addEventListener('click', refresh);