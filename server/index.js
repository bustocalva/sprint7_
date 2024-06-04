import express from 'express'
import logger from 'morgan'
import { mongoose } from './database.js'
import { Server } from 'socket.io'
import bodyParser from 'body-parser'
import {createServer } from 'node:http'


const app = express()
const server = createServer(app)
const io= new Server(server)




const Mensaje = mongoose.model('Mensaje',{ nombre : String, mensaje: String})


    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

io.on('connection', (socket)=>{
    console.log('a user has connected!')

    socket.on('disconnect', ()=>{
        console.log('an user has disconected')
    })
    socket.on('chat message', (msg)=>{
        console.log('message: ' + msg)

    })
})

app.use(logger('dev'))


app.get('/', (req, res)=>{

res.sendFile(process.cwd() + '/client/index.html')});


app.get('/mensajes', (req, res) => {
    Mensaje.find({},(err, mensajes)=> {
      res.send(mensajes);
    })
  })

app.post('/mensajes', (req, res) => {
    var mensaje = new Mensaje(req.body);
    mensaje.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })