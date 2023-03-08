let colorPicker = document.getElementById("colorpick")
let selectColor = document.getElementById("colorchoose")
let getColor = document.getElementById("colorbtn")
let dataRender = document.getElementById("colorscheme")

getColor.addEventListener("click", function(){
    dataRender.innerHTML = ''
    renderData()
})




function renderData(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.replace('#','')}&mode=${selectColor.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    
        data.colors.forEach((color) => {
        
            let html = ''
            html += `
            <div class="color" id="color-one" style="background: ${color.hex.value}"><h3>${color.hex.value}</h3></div>`
            dataRender.innerHTML += html
        })
    
    }
    
    
    )
}


