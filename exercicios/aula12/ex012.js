var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if(hora < 12){
    console.log('é de manha')
} else if (hora < 18) {
    console.log('é de tarde')
}else{
    console.log('é de noite')
}