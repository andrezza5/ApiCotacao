const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000; // Escolha uma porta para o servidor intermediário

app.use(cors()); // Habilita o CORS
app.use(express.json())
const baseUrl = 'https://economia.awesomeapi.com.br/last/';

app.get('/conversions', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}USD-BRL,EUR-BRL,CHF-BRL,GBP-BRL,JPY-BRL,ARS-BRL`); //Dolar, Euro, FRanco-Suiço,Libra-Esterlina, Iene-Japao, Peso-Argentino
    const conversions = Object.values(response.data);
    res.json(conversions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as conversões.' });
  }
});
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
  console.log(`Servidor intermediário rodando na porta ${port}`);
});