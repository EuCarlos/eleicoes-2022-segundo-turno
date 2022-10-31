const fs = require('fs')

export const generateCSV = (candidate1, candidate2) => {
	const getCurrentTime = new Date()
	const hours = `${getCurrentTime.getHours()}:${getCurrentTime.getMinutes()}`

	const lula = candidate1.nm === 'LULA' ? candidate1.pvap : candidate2.pvap
	const bolsonaro = candidate1.nm === 'JAIR BOLSONARO' ? candidate1.pvap : candidate2.pvap

	lula = lula.replace(',','.')
	bolsonaro = bolsonaro.replace(',','.')

	const result = `${bolsonaro},${lula},${hours}`

	fs.writeFileSync(
		'csv/eleicoes-2022-segundo-turno.csv', 
		result, 
		{ encoding: 'utf-8', flag: 'a' }, 
		(err) => {
	  		if (err) return console.log(err);
		}
	);
}
