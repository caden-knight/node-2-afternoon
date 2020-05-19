const messages = []
let msg_id = 0

module.exports = {
    readMsg: (req, res) => {
        res.status(200).send(messages)
    },

    createMsg: (req, res) => {
        const {text, time} = req.body

        const newMsg = {msg_id, text, time}
        msg_id++

        messages.push(newMsg)

        res.status(200).send(messages)
    },

        editMsg: (req, res) => {
        const {msg_id} = req.params
        const {text, time} = req.body
        console.log(msg_id)

        const index = messages.findIndex(e => e.msg_id === +msg_id)

        if(index === -1){
            return res.status(404).send('No message to edit')
        }
        const newMsg = {
            msg_id: +msg_id,
            text: text || messages[index].text,
            time: time || messages[index].time,
        }

        messages[index] = newMsg

        res.status(200).send(messages)
    },

    deleteMsg: (req, res) => {
        const{msg_id} = req.params

        const index = messages.findIndex(e => e.msg_id === +msg_id)


        messages.splice(index, 1)
        

        res.status(200).send(messages)

    }
}