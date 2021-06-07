function clicker(num) {
    document.form.textview.value = 
    document.form.textview.value + num;
    if("+" == "-"){
        alert()
    }
}
function clean() {
    document.form.textview.value = "";
}
function equal() {
    let ravno = document.form.textview.value;
    if(ravno){
        document.form.textview.value = eval(ravno);
    }
}

