function verificar() {
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {

        alert('[ERRO] Verifique os dados')

    }else{
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('d', 'foto')

        if (fsex[0].checked) {

            var genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'homem-bebe.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto_homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if(fsex[1].checked){

            var genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'mulher-bebe.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }

        }

        res.style.textAlign = 'center'
        res.style.padding = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos `
        res.appendChild(img)
    }
}