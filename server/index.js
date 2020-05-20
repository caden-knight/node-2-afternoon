const express = require('express')
const app = express()
const msg = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));
const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => console.log(`I am listening on port ${SERVER_PORT}`))

app.get('/api/messages', msg.readMsg)
app.post('/api/messages', msg.createMsg)
app.put('/api/messages/:id', msg.editMsg)
app.delete('/api/messages/:msg_id', msg.deleteMsg)


