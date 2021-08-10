//essas constantes são para facilitar o uso do querySelector(all)
const c = (el)=> document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
//Mapeia a lista de verbo de acordo com o verboJson
verboJson.map((item, index)=>{
    let verboItem = c('.models .verbo-area').cloneNode(true); //clona a div modelo
    //Lista os verbos de acordo com o verboJson
    verboItem.setAttribute('id', 'n'+index);
    verboItem.querySelector('#name-verbo').innerHTML = item.name;
    verboItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.verbo-area').getAttribute('id');

        //Adciona informação na tela de acordo com o verbo clicado
        
        /*TELA 4*/
        c('.verb-content').innerHTML = item.name; 
        c('.traducao-text').innerHTML = item.traducao;
        /*TELA 6 - Simple Past*/
        c('.simple-past-verb').innerHTML = item.simplePast;
        c('.simple-past-modelo').innerHTML = item.simplePastModel;
        c('.simple-past-traducao').innerHTML = item.simplePastTrad;
        /*TELA 7 */
        c('.example-english').innerHTML = item.exemplo;
        c('.example-portugues').innerHTML = item.tradExemplo;
        /*FRASE EXEMPLO DO SIMPLE PAST */
        c('.example-simplepast').innerHTML = item.simplePastExample;
        c('.example-simplepast-port').innerHTML = item.simplePastExampleTrad;
        /*TELA 9 - Parabens, você concluiu */
        c('.verbo-concluido').innerHTML = item.name;

        //Troca da tela 3 para a tela 4 quando clica no verbo
        c('.screen3').style.display = 'none';
        c('.screen4').style.display = 'flex';
        
        //Pega o ID
        let idBloco = item.id;
        function checked(){
            c(`#n${idBloco} .border-verbo`).style.border = '3px solid #00ff00';
            c(`#n${idBloco} #name-verbo`).style.color = '#0f0';
            c(`#n${idBloco} img`).setAttribute('src', './img/checkicon-ok.png');
        }checked();
    })

    //esse comando serve para somar a div que está sendo preechida
    c('.screen3').append( verboItem );
});

//----------------------------NEXT e BACK-----------------------------------------------------------------

//Tela 4 volta para 3
function backScreen(){
    c('.screen4').style.display = 'none';
    c('.screen3').style.display = 'flex';
}
//Tela 3 volta para 2
function backScreen2(){
    c('.screen3').style.display = 'none';
    c('.logo-area').style.display = 'none';
    c('.screen2').style.display = 'flex';
}
//Tela 2 volta para 1
function backScreen3(){
    c('.screen2').style.display = 'none';
    c('.screen1').style.display = 'flex';
}
//Tela 1 avança para 2
function nextScreen(){
    c('.screen1').style.display = 'none';
    c('.screen2').style.display = 'flex';
}
//Tela 2 avança para 3
function nextScreen2(){
    c('.screen2').style.display = 'none';
    c('.logo-area').style.display = 'flex';
    c('.screen3').style.display = 'flex';
}
//Tela 4 avança para 5
function nextScreen3(){
    c('.screen4').style.display = 'none';
    c('.screen5').style.display = 'flex';
}
//Tela 4 avança para 5
function backScreen4(){
    c('.screen5').style.display = 'none';
    c('.screen4').style.display = 'flex';

    //Remove a div de acerto ou erro caso o user resolva voltar depois de verificar com o botão 'go'.
    c('.verificacao').style.display = 'none';
    //Remove o botão de next e faz o usuário verificar novamente 
    c('#button2_activated').style.display = 'none';
}
//Tela 5 avança para 7
function nextScreen4(){
    c('.screen5').style.display = 'none';
    c('.screen7').style.display = 'flex';
}
//Tela 7 volta para 5
function backScreen5(){
    c('.screen7').style.display = 'none';
    c('.screen5').style.display = 'flex';
}
//Tela 7 avança para 6
function nextScreen6(){
    c('.screen7').style.display = 'none';
    c('.screen6').style.display = 'flex';
}
//Tela 6 volta para 7
function backScreen7(){
    c('.screen6').style.display = 'none';
    c('.screen7').style.display = 'flex';
}
//Tela 6 avança para 8
function nextScreen8(){
    c('.screen6').style.display = 'none';
    c('.screen8').style.display = 'flex';
}
//Tela 8 volta para 6
function backScreen6(){
    c('.screen8').style.display = 'none';
    c('.screen6').style.display = 'flex';
}
//Tela 8 avança para 9
function nextScreen9(){
    c('.screen8').style.display = 'none';
    c('.screen9').style.display = 'flex';
}
//Tela 9 volta para 8
function backScreen8(){
    c('.screen9').style.display = 'none';
    c('.screen8').style.display = 'flex';
}
//Tela 9 volta para a lista de verbo (menu)
function backScreen9(){
    c('.screen9').style.display = 'none';
    c('.screen3').style.display = 'flex';
}

//Tela de duvida (SIMPLE PAST)
function duvidaScreen(){
    c('.screen6').style.display = 'none';
    c('.screen8').style.display = 'none';
    c('.simple-past-definicao').style.display = 'flex';
}
function duvidaBackScreen(){
    c('.simple-past-definicao').style.display = 'none';
    c('.screen6').style.display = 'flex';
}
//---------------------------- FIM DO NEXT e BACK-----------------------------------------------------------------


 //Essa função confere se o user acertou o verbo que ele está estudando na tela 5
 function capturar(){
    verboEstudado = c('.div-digiteArea .input').value;
    verboComparar = c('.verb-content').innerText; //Seleciona o verbo que o user está estudando para posteriormente ser corrigido
    compararMinusculo = verboComparar.toLowerCase(); //caso o user escreva tudo em minusculo, sairá como certo
    compararMaiusculo = verboComparar.toUpperCase(); //caso o user escreva tudo em maiusculo, sairá como certo

    if(verboEstudado == verboComparar || verboEstudado == compararMinusculo || verboEstudado == compararMaiusculo){
        //Mostra div com mensagem de ACERTO
        c('.verificacao').style.display = 'flex';
        c('.verificacao-content-errou').style.display = 'none'; //Remove a tela de erro
        c('.verificacao-desc').innerHTML = 'Você Acertou!'; // Muda a descrição para acerto
        c('.verificacao-desc').style.color = '#46e926'; // Muda a cor para acerto
        c('.verificacao-content-acertou').innerHTML = verboEstudado;
        c('.verificacao-content-acertou').style.display = 'flex'; //Mostra a tela de acerto
        c('.verificacao-desc').style.display = 'block'; //Mostra a descrição de erro

        //Se o user acertar, libera o botão NEXT para ele continuar aprendendo
        c('#button2_activated').style.display = 'flex';
    }else{
        //Mensagem de erro e sugestão para conferir
        c('.verificacao').style.display = 'flex';
        c('.verificacao-content-acertou').style.display = 'none'; /*Remove a tela de Acerto*/
        c('.verificacao-content-errou').style.display = 'flex'; /*Add a tela de Erro*/
        c('.verificacao-desc').innerHTML = 'Escreva corretamente o verbo estudado'; /* Add a descrição de erro */
        c('.verificacao-desc').style.display = 'block'; /*mostra a descrição de erro */
        c('.verificacao-desc').style.color = 'red'; /*Muda a cor da descrição de erro para vermelho */

        //Se o user errar, retira o botão NEXT para ele continuar aprendendo
        c('#button2_activated').style.display = 'none';

    }
}



//TESTES E ESTUDOS DE FETCH
async function loadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}



async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https;//www.seusite.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}