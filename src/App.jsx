import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const [times, setTimes] = useState();

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch("https://api.cartola.globo.com/clubes");
      const data = await response.json();

      setTimes(data);
      console.log(data);

    }

    fetchData()

  }, [])

  return (
    <>
    <div className='container'>
   <div>
    <img className='header' src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"/>
    </div>
    
    <div>
      {times && (
        <>
           {Object.values(times).map((show) => (
            <>
              <Link to={`/Jogadores/${show.id}`} key={show.id}>
                
                <div>
                  <img src={show.escudos['45x45']}/>
                </div>
                <div className='nome'>
                <p>{show.nome}</p>
                </div>
                <div className='apelido'>
                <p>{show.apelido}</p>
                </div>
                
              </Link>

            </>
          ))}
        </>
      )}
    </div>
    </div>
    </>
  )
}

export default App