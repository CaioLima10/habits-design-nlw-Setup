const form = document.querySelector("#form-habits")
const button = document.querySelector("header button")
const nlwSetup = new NLWSetup(form)

button.addEventListener('click', add)
form.addEventListener("change", save)

    function add(){
        const today = new Date().toLocaleDateString("pt-br").slice(0 , -5)
        const dayExits = nlwSetup.dayExists(today)

    if(dayExits){

        swal({
            title:'❌', 
            text: "Dia já Incluso",
            button: "Aguardar",
        })
        button.style.cursor = 'not-allowed';
        button.style.color = "#5b5f6e"       
        return
    }
        swal({
            text: "Parabens campo Incluso",
            icon: "success",
            button: "ok",
        });
     nlwSetup.addDay(today)
    }

    function save() {
        localStorage.setItem("Habits", JSON.stringify(nlwSetup.data))}  

    const data = JSON.parse(localStorage.getItem("Habits")) || [];
    nlwSetup.setData(data)
    nlwSetup.load()
