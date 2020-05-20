const messages = []
let id = 0

module.exports = {
    readMsg: (req, res) => {
        res.status(200).send(messages)
    },

    createMsg: (req, res) => {
        const {text, time} = req.body

        const newMsg = {id, text, time}
        id++

        messages.push(newMsg)

        res.status(200).send(messages)
    },

        editMsg: (req, res) => {
        let new_id = req.params.id
        const {text} = req.body
        console.log(new_id)

        const index = messages.findIndex(e => e.id === +new_id)

        let newMsg = messages[index]
        console.log(index)
        messages[index] = {
            id: +new_id, 
            text: text || text[index].text
        }
            console.log(newMsg)
        res.status(200).send(messages)
    },

    deleteMsg: (req, res) => {
        const {id} = req.params

        const index = messages.findIndex(e => e.id === +id)

        console.log(index)
        messages.splice(index, 1)
        

        res.status(200).send(messages)

    }
}