const modal = $.modal({
    title: ' options',
    closable: true,
    content: `
      <div class="modal-form">
  <label for="name">Модель принтера:</label><br>
  <input type="text" id="name" name="name" class="modal-form-field" placeholder="Введіть модель принтера..."/><br><br>

  <label for="techno">Технологія друку:</label><br>
  <input type="text" id="techno" name="techno" class="modal-form-field" placeholder="Введіть технологію друку..."/><br><br>

  <label for="format">Максимальний формат паперу:</label><br>
  <input type="text" id="format" name="format" placeholder="Введіть максимальний формат паперу..." class="modal-form-field"><br><br>

  <label for="speed">Швидкість друку:</label><br>
  <select class="modal-form-field" name="speed" id="speed">
    <option value="18 ст/хв">18</option>
    <option value="24 ст/хв">24</option>
    <option value="30 ст/хв">30</option>
  </select>
  <br><br>

  <label for="resurs">Ресурс картриджа:</label><br>
  <select class="modal-form-field" name="resurs" id="resurs">
    <option value="2000">2000</option>
    <option value="3000">3000</option>
    <option value="4000">4000</option>
  </select>
  <br><br>

  <div id="img-prev-section">
    <img id="imgprev" src="">
  </div>

  <label for="file" id="label-select-img">Вибери зображення:</label><br>
  <input type="file" id="imgfile" name="imgfile"><br><br>

  <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
</div>

    `,
    width: '500px'
})



