const inputField = document.querySelector('.msg');
const sendBtn = document.querySelector('.enviar');
const chatWindow = document.getElementById('chatWindow');
const dalt = document.querySelector('.daltonic');


function enviarmsg(){
    const msg = inputField.value.trim();
    if (msg != ''){
        const userBubble = document.createElement('div');
        userBubble.classList.add('usermsg');
        userBubble.innerText = msg;
        chatWindow.appendChild(userBubble);

        inputField.value = '';

        setTimeout(()=>{
            const botBubble = document.createElement('div');
            botBubble.classList.add('robomsg');
            if(msg.toLowerCase() == "oi" || msg.toLowerCase() == "ola" || msg.toLowerCase() == "bom dia"){
                botBubble.innerText = "Olá, como posso ajudar? \n 1 - Comprar oculos;\n 2 - Ser um revendedor; \n 3 - Solicitar manutenção";
            }
            else if(msg.toLowerCase()== "tudo bem?" || msg.toLowerCase() == "como você está?" || msg.toLowerCase() == "tudo bem"){
                botBubble.innerText = "Estou bem, obrigado! Como posso ajudar? \n 1 - Comprar oculos;\n 2 - Ser um revendedor; \n 3 - Solicitar manutenção";
            }
            else if(msg.toLowerCase() == "comprar oculos" || msg.toLowerCase() == "1"){
                botBubble.innerText = "Você pode entrar no nosso site ou diretamente com o vendedor \n O que gostaria?"
            }
            else if( msg.toLowerCase() == "entrar no site" || msg.toLowerCase() == "no site" || msg.toLowerCase() == "site"){
                botBubble.innerText = "O site está disponível em: \n https://www.oculos.com";
            }
            else if( msg.toLowerCase() == "entrar em contato com vendedor" || msg.toLowerCase() == "vendedor" || msg.toLowerCase() == "com o vendedor" || msg.toLowerCase =="com vendedor"){
                botBubble.innerText = "Em breve um dos nossos vendedores entrará em conato";
            }
            else if(msg.toLowerCase() == "ser um revendedor" || msg.toLowerCase()== "2"){
                botBubble.innerText = "Para se tornar um revendedor, precisamos analisar seu perfil, ligue para o nosso 0800";
            }
            else if(msg.toLowerCase() == 'solicitar manutenção' || msg.toLowerCase() == 'solicitar manutencao' || msg.toLowerCase() == 'manutençao'|| msg.toLowerCase() == 'manutencão' || msg.toLowerCase() == '3'){
                botBubble.innerText = "1 - Quebrado \n 2 - Troca de lente \n 3 - Riscado";
            }
            else if(msg.toLowerCase() == '1' || msg.toLowerCase() == 'quebrado'){
                botBubble.innerText = "Verifique a garantia no site https://garantiaoculos";
            }
            else if(msg.toLowerCase() == '2' || msg.toLowerCase() == 'troca de lente'){
                botBubble.innerText = "Leve no centro mais próximo para troca de lente";
            }
            else if(msg.toLowerCase() == '3' || msg.toLowerCase() == 'riscado'){
                botBubble.innerText = "Verifique a garantia no site https://garantiaoculos";
            }
            else if (msg.toLowerCase() == 'obrigado' || msg.toLowerCase() == 'obrigada' || msg.toLowerCase() == 'obrigado a você' || msg.toLowerCase() == 'valeu' || msg.toLowerCase() == 'obg' || msg.toLowerCase() == 'vlw'){
                botBubble.innerText = "Imagina! Se precisar de mais alguma coisa, só chamar. 🚀💻";
            }

            else{
                botBubble.innerText = "Desculpe, não entendi.";
            }
            chatWindow.appendChild(botBubble);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    
    }
}

inputField.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        enviarmsg();
    }
});

sendBtn.addEventListener('click', enviarmsg);
dalt.addEventListener('click', trocarTema);

function trocarTema() {
    const theme = document.getElementById("tema");
    
    if (theme.getAttribute("href") === "style.css") {
        theme.setAttribute("href", "style2.css"); 
    } 
    else {
        theme.setAttribute("href", "style.css"); 
    }
}









