import mongoose from 'mongoose'


const port = process.env.PORT ?? 3002


mongoose.connect('mongodb+srv://sprint7chat:sprint7chat@mycluster.n29o8qn.mongodb.net/')
.then ((succes)=> console.log(`Server running port ${port}`)
)
.catch ((err)=> console.log(err.message))


export {mongoose}