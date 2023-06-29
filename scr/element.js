function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
    <img src="img/${elem.pictname}" class="element-img">
    <div class="element-name">${elem.name}</div>
    <p class="element-text">Технологія друку: <span class="element-techno">${elem.techno}</span></p> 
    <p class="element-text">Максимальний формат паперу: <span class="element-format">${elem.format}</span></p> 
    <p class="element-text">Швидкість друку: <span class="element-speed">${elem.speed}</span></p> 
    <p class="element-text">Ресурс картриджа: <span class="element-resurs">${elem.resurs}</span></p> 
</div>
<div class="element-footer">
    <button class="blue-button" onclick="modifyModalToEdit(${id})">Змінити</button><span> </span>
    <button class="red-button" onclick="removeElementFromStorage(${id})">Видалити</button>
</div>

    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}


function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Добавити принтер"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Створити"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Добавити зображення:"

    modal.open()
}


function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Редагувати принтери"
    document.getElementById("submitbtn").innerText = "Оновити"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)

    let edElem = JSON.parse(localStorage.getItem(id))
 
    document.getElementById("name").value = edElem.name;   
    document.getElementById("techno").value = edElem.techno;   
    document.getElementById("format").value = edElem.format;  
    document.getElementById("speed").value = edElem.speed;  
    document.getElementById("resurs").value = edElem.resurs; 
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "Змінити зображення:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")


    modal.open()
}


function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); 
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "Змінити зображення:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}


document.getElementById("imgfile").addEventListener("change", showPrewImg)



function validNameAndtechno(){
    let valid = true;
    let showMsg = '';
    let formName = document.getElementById("name").value.trim();
    let formtechno = document.getElementById("techno").value.trim();
    let formformat = document.getElementById("format").value.trim();
    if (!formName) {
        showMsg = ' Поле моделі принтера порожнє!! '
        valid = false;
    }  
    if (!formtechno) {
        showMsg = showMsg + ' Поле технології друку порожнє!!'
        valid = false;
    } 
 
    if (!formformat) {
        showMsg = showMsg + ' Поле максимального формату паперу порожнє!!'
        valid = false;
    } 
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("Помилка !! Зображення не вибрано")
        return false} ;
}


function addElementToLocalStorage(){
            
    if (validNameAndtechno() && validImg()) {

        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 

        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); 

        const newElement = {};
        newElement.name =  document.getElementById("name").value;   
        newElement.techno = document.getElementById("techno").value;   
        newElement.format = document.getElementById("format").value;  
        newElement.speed = document.getElementById("speed").value; 
        newElement.resurs = document.getElementById("resurs").value; 
        newElement.pictname = filename;   

        let rowSt = JSON.stringify(newElement)
  
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   

function editElementInLocalStorage(id) {
    if (validNameAndtechno()) {
        let edElem = JSON.parse(localStorage.getItem(id))
        edElem.name =  document.getElementById("name").value;   
        edElem.techno = document.getElementById("techno").value;   
        edElem.format = document.getElementById("format").value;   
        edElem.speed = document.getElementById("speed").value;  
        edElem.resurs = document.getElementById("resurs").value;  
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); 
            edElem.pictname = filename; 
        }

        let rowSt = JSON.stringify(edElem)

        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
   
}


function removeElementFromStorage(id){
    if (confirm("Ви впевнені, що хочете видалити?")) {
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
function closeAdvertisement() {
    var advertisement = document.querySelector('.advertisement');
    advertisement.style.display = 'none';
  }
  

