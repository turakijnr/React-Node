const express =require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

//import Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')



const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressvalidator = require('express-validator')



mongoose.connect(process.env.DATABASE,{

    useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
})
.then(()=> console.log('DB connected'));
const port = process.env.PORT || 4000

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressvalidator())




//routes middlewares
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)



app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})