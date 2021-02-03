const app = require('express')()
app.get('/',(req, res)=>{
	const callfn = req.query.callfn
	const data = [1,2,3]
	console.log('come:', req.query);
	res.send(callfn + `(${JSON.stringify(data)})`)
}).listen(3000)
