function prepare(){
    let startArray = [
        {name: "Принтер Canon i-SENSYS LBP6030B", techno: "Лазерний друк", format: "А4",speed: "30 ст/хв",
        resurs: "3000", pictname: "46531199.jpg"},
        {name: "БФП Canon i-Sensys MF272dw, Wi Fi, duplex", techno:"Лазерний друк", format: "А4",speed: "24 ст/хв",
        resurs: "2000", pictname: "334429564.jpg"},
        {name: "БФП Canon Pixma TS3340, Wi Fi", techno:"Струменевий друк", format: "А3",speed: "18 ст/хв",
        resurs: "4000", pictname: "166229465.jpg"},
    ]
    
    localStorage.clear() 

    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  
}