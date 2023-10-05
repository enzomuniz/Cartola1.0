import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css'


function Jogadores() {

    const {id} = useParams()
    const [jogadores, setJogadores] = useState({})

useEffect(() => {

const fetchData  = async () => {
 const response = await fetch(`https://api.cartola.globo.com/atletas/mercado/${id}`);
 const data = await response.json();

 setJogadores(data);
 console.log(data);

}

fetchData()
    }, [id])


    return (
        <>
        <div className='container'>
        <div>
            <img className='header' src='https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png'/>
            </div>

      {jogadores.atletas && 
        <>
        {jogadores.atletas.map((show) => (
            
              <>
             <p>Jogadores do {jogadores.clubes[id].nome}</p>
                <p>{show.jogadores.clubes[id].foto}</p>
              
              
              </>
            ))}
          
         
        </>
      }
</div>
     
        </>
    )}


export default Jogadores;
