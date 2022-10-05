let main = document.querySelector("#main");
let arrayDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let ul = document.createElement("UL")
let select = document.createElement("SELECT")
const crerElemento = () => {
    main.appendChild(ul)
    main.appendChild(select)
    
    for (let i = 0; i < arrayDias.length; i++) {
        let option = document.createElement("OPTION")
        let li = document.createElement("LI")
        li.textContent = arrayDias[i]
        option.textContent = arrayDias[i]
        option.value = arrayDias[i]
        ul.appendChild(li)
        select.appendChild(option)
    }
}
const aniadirDias = (ev) => {
    ev.target.tagName === "OPTION"
    let dia = document.createElement("LI");
    dia.textContent = ev.target.value;
    ul.appendChild(dia);
}
document.addEventListener("DOMContentLoaded", crerElemento)
select.addEventListener("change", aniadirDias)