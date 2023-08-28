const axios = require('axios'); //facilita fazer as requisicoes de apis externas
const express = require('express'); //frameworks p/ construcao de apis e aplicacoes web
const app = express(); //cria a instancia no servidor
const port = 3000;

app.use(express.json()); //Middleware para fazer o parsing do corpo das requisições em formato JSON.

const baseUrl = 'https://economia.awesomeapi.com.br/last/'; //api externa utilizada


//Na rota abaixo o get faz a requisicao na api para buscar a taxa da conversao requerida e sao enviadas as respostas.
app.get('/conversions', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}USD-BRL,EUR-BRL,CHF-BRL,GBP-BRL,JPY-BRL,ARS-BRL`); //Dolar, Euro, FRanco-Suiço,Libra-Esterlina, Iene-Japao, Peso-Argentino
    const conversions = Object.values(response.data);
    res.json(conversions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as conversões.' });
  }
});

// Na Rota post o codigo le os parametros moedaOrigem, moedaDestino, moedaConvertida da requisicao, busca a taxa de conversao especifica e enviar o valor convertido.
app.post('/convert', async (req, res) => {
    try {
      const { moedaOrigem, moedaDestino, moedaConvertida } = req.body;
  
      console.log('Recebido:', moedaOrigem, moedaDestino, moedaConvertida);
  
      // Busca as taxas de conversão
      const response = await axios.get(`${baseUrl}${moedaOrigem}-${moedaDestino}`);
      console.log('Resposta da API:', response.data);
      
      const chaveConversao = `${moedaOrigem}${moedaDestino}`; 
      const taxaConversao = response.data[chaveConversao].ask;
      console.log('Taxa de conversão:', taxaConversao);
  
      // Calcula o valor convertido
      const valorConvertido = moedaConvertida * parseFloat(taxaConversao);
      const valorConvertidoFormatado = valorConvertido.toFixed(2);
      console.log('Valor convertido:', valorConvertido);
  
      res.json({ valorConvertido: valorConvertidoFormatado });
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).json({ error: 'Erro ao realizar a conversão.' });
    }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
