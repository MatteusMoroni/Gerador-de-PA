function contar() {
    let inicio = document.getElementById('txtin')
    let fim = document.getElementById('txtfn')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //verificar se todos os campos foram preenchidos
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados')
    } else {
        res.innerText = `Resultado:  `

        //transformar o número do input para o tipo number

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<=0) {
            alert ('Passo inválido :/ vamos considerar o passo = 1')
            p=1
        }
        
        //contagem crescente

        if (i<f) {
        
            for (let c = i; c<=f; c+=p) {
                res.innerText += ` ${c} \u{27A1} `
                 
             }
             
        //contagem decrescente

        } else {
            for (let c = i; c>=f; c-=p ) {
                res.innerText += `${c} \u{27A1} `
             }     
            
        }

        res.innerText += `\u{1F3C1}`
    }
}