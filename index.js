const express = require('express')
const promMid = require('express-prometheus-middleware');

const app = express()

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true
}))

app.get('/', (req, res) => {

	return res.json({
		hello:'world'
	})
})


app.listen(8080, () => console.log('Server is running on port 8080'))
