//dependencia commonjs
const request = require('request')

const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

let r = request(url ,
    {json: true} ,
    (error , respuesta , body) => {
        let datos = body.data
        datos.forEach((dato)=>{
            console.log(dato.Population)
            console.log('----------')
        })
    } )