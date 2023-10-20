const axios= require('axios')

const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

async function obtenerDatosEEUU(){
    try{
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
    }catch(error){
        
    }
}
obtenerDatosEEUU()