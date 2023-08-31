# ApiCotacao

Esta é uma aplicação de API de conversão de moedas construída em ambiente NodeJs e JavaScript, utilizando a biblioteca Axios para facilitar as requisições a APIs externas e o framework Express para a criação das rotas da API. A aplicação busca as taxas de conversão de moedas em uma API externa, específica da Awesomeapi, que fornece cotações públicas.

## A API possui as seguintes funcionalidades através de suas rotas:

GET /conversions: Retorna as taxas de conversão das moedas suportadas. A rota realiza uma requisição à API externa para obter as cotações atualizadas e as retorna no formato JSON.

POST /convert: Converte um valor de uma moeda para outra com base nas taxas de conversão obtidas da API externa. Os parâmetros esperados são moedaOrigem, moedaDestino e moedaConvertida. A rota calcula o valor convertido com base na taxa de conversão e retorna o valor formatado.

- Moedas Disponíveis: Converta para Dólar Americano, Euro, Libra Esterlina, Iene Japonês, Peso Argentino e Franco-Suíço.

## Como Usar

1. Acesse o projeto em [RealNow - Transformação de Moedas](https://realnow.vercel.app/).

2. Digite o valor em Real que você quer converter.

3. Aguarde de 5-10 segundos.

4. Veja o valor convertido em todas as moedas disponíveis!



## Colaborações



O projeto foi feito em parceria com [Gustavo Alexandre](https://github.com/gustavoaleds). Acesse o [repositório do front-end](https://github.com/gustavoaleds/realnow) 


## Contato



Se tiver alguma dúvida ou sugestão, fique à vontade para me contatar:



- Email: andrezzamarcilio@gmail.com

- LinkedIn: [Andrezza Marcilio](https://www.linkedin.com/in/andrezzamarcilioti/)
