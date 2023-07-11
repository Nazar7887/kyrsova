// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: 'Powerbank options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="modal">Powerbank modal:</label><br>
            <input type="text" id="modal" name="modal" class="modal-form-field" placeholder="Input Powerbank modal"/><br><br>
            <label for="conectors">Powerbank conectors:</label><br>
            <select id="conectors" name="conectors" class="modal-form-field">
                <option value="USB">USB</option>
                <option value="lightning">Lightning</option>
                <option value="microUSB">micro-USB</option>
                <option value="USBtypeC">USB type-C</option>
            </select><br><br>
            <label for="capacity">Powerbank capacity:</label><br>
            <input type="number" id="capacity" name="capacity" class="modal-form-field" placeholder="Input Powerbank capacity..."/><br><br>
            <label for="size">Powerbank size:</label><br>
            <select id="size" name="size" class="modal-form-field">
                <option value="120*60*15">120*60*15</option>
                <option value="100*50*10">100*50*10</option>
                <option value="200*80*20">200*80*20</option>
            </select><br><br>
            <label for="fastChargingSupport">Powerbank fastChargingSupport:</label><br>
            <select id="fastChargingSupport" name="fastChargingSupport" class="modal-form-field">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
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






