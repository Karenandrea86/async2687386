const axios= require('axios')

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

async function obtenerDinos(){
    try{
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
    }catch(error){
        
    }
}
obtenerDinos()