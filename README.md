# Estatísticas - Eleições 2022 (2° Turno)
Script que criado por mim para o acompanhamento das eleições do segundo turno no dia 31/10/2022.

## Requisitos do Sistema
- NodeJS
- Python3

## Rode o projeto
Para rodar o script de **acompanhamento das eleições** rode no terminal o seguinte comando:
```bash
npm start # ou use yarn start
```

Para gerar as **estatísticas** instale as dependências e rode no terminal o seguinte comando:
```bash
pip install -r requirements.txt # instala todas as dependências

python plot.py
```

## Estatísticas das eleições
Durante a compilação do arquivo `main.js` no horário de apuração dos votos, é gerado um arquivo CSV com a porcentagem dos votos dos candidatos (Lula e Bolsonaro) conforme o horário. Com esses dados, foi gerado um gráfico com Python.

### Demostração
A compilação do script `plot.py` gerou o seguinte gráfico de crescimento:

| <img src="./plot_1667260107.png" width="100%" alt="a imagem apresenta um gráfico de crescimento com a porcentagem dos candidatos de acordo com horário (das 17h até 20h)" /> |
| :---: |
| **Figura 1 - Figura 1 - Estatísticas do 2° Turno das eleições 2022** |

**Figura 1:** a imagem apresenta um gráfico de crescimento com a porcentagem dos candidatos de acordo com horário (das 17h até 20h).

## Como faço para relatar um bug ou solicitar um recurso?
Se você quiser relatar um bug ou solicitar um recurso, vá para [Issue](https://github.com/eucarlos/boilerplate-vite-react-ts/issues) no projeto do GitHub e adicione sua solicitação.

___

<p align="center">
Criado com 💜 por <a href="https://github.com/eleicoes-2022-segundo-turno/">Carlos Alves</a></p>