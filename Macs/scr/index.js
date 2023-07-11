// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: 'Camera options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="model">Mouse model :</label><br>
            <input type="text" id="model" name="model" class="modal-form-field" placeholder="Input mouse model"/><br><br>
            <label for="interface">Mouse interface:</label><br>
            <select id="interface" name="interface" class="modal-form-field">
                <option value="USB">USB</option>
                <option value="Bluetooth">FireWire</option>
                <option value="Serial">HDMI</option>
                <option value="PS/2">Bluetooth</option>
            </select><br><br>
            <label for="sensor">Mouse sensor:</label><br>
            <input type="text" id="sensor" name="sensor" class="modal-form-field" placeholder="Input mouse sensor..."/><br><br>
            <label for="buttons">Amount of buttons:</label><br>
            <input type="text" id="buttons" name="buttons" class="modal-form-field" placeholder="Input mouse buttons..."/><br><br>
            <label for="color">Mouse color:</label><br>
            <select id="color" name="color" class="modal-form-field">
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
        </select><br><br>
          
    
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Select image file:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
        </div> 
    `,
    width: '500px'
})

// Вибірка всіх "Volume" та обчислення "Total volume"
function countTotalVolume(){
    let btnArr = document.getElementsByClassName("element-buttons")
    let totalButtons = 0
    for (let i=0; i<btnArr.length; i++) {
        totalButtons+= Number(btnArr[i].outerText);
    }
    document.getElementById("countresult").innerHTML = `Total buttons:  <b>${totalButtons}</b>`
}



countbtn.addEventListener('click', countTotalVolume)






