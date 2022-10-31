import { generateCSV } from './csv'
const url = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'

const time = 600 * 1000 // 10min
const getCurrentTime = new Date()
const [day, hours] = [getCurrentTime.getDate(), getCurrentTime.getHours()]

async function live() {
    try {
        const response = await fetch(url)
        const data =  await response.json()
        const  [candidate1, candidate2] = [ data.cand[0], data.cand[1]]

        generateCSV(candidate1, candidate2)

        const result = `\n${candidate1.nm} - ${candidate1.pvap}%\n${candidate2.nm} - ${candidate2.pvap}%`
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

async function finalResult() {
    try {
        const response = await fetch(url)
        const data =  await response.json()
        const  [candidate1, candidate2] = [ data.cand[0], data.cand[1]]

        const electedWinner = candidate1.vap > candidate2.vap ? candidate1 : candidate2
        const result = `O presidente eleito é ${electedWinner.nm} com ${electedWinner.vap} votos (${electedWinner.pvap}%)`
        
        console.log('⚠️ ELEIÇÕES FINALIZADA')
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

if (day == 30 && hours >= 17 && hours <= 21) setInterval(live, time)
else finalResult()
