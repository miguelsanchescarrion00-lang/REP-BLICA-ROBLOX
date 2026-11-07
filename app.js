document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#chat-send");
  const entrada = document.querySelector("#chat-input");
  const mensagens = document.querySelector("#chat-messages");

  if (!botao || !entrada || !mensagens) return;

  function enviarMensagem() {
    const texto = entrada.value.trim();
    if (!texto) return;

    const mensagem = document.createElement("p");
    mensagem.textContent = "Você: " + texto;
    mensagens.appendChild(mensagem);

    const resposta = document.createElement("p");
    resposta.textContent = "República IA: Olá! Sou o assistente do simulador Roblox. Como posso ajudar?";
    mensagens.appendChild(resposta);

    entrada.value = "";
  }

  botao.addEventListener("click", enviarMensagem);
  entrada.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") enviarMensagem();
  });
});
