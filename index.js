const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'https://hitrace-formula-e.vercel.app/' } })
const PORT = process.env.PORT || 3001;

io.on('connection', socket => {
    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: 'user'
        })
    })
})

server.listen(PORT, () => console.log('Rodando servidor...'))