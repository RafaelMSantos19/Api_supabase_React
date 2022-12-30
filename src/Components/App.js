import { useEffect, useState } from 'react'
import axios from 'axios';
import '../style/paises.css'


export default function App() {

  const [nomes, setNomes]= useState([])

  useEffect(() => {
    
    let nome =[]

    const config = {
      method: 'get',
      url: 'https://ivory-weasel-main-cc32d45.d2.zuplo.dev/v1/countriesAll',
    };
  
    axios.request(config).then(function (response) {

      console.log(response.data)
      
      const maximo = response.data.length


      for (let i=0; maximo>i; i++ ){
        console.log(response.data[i].name)
        console.log(response.data[i].img_url)
        nome.push(
          <div className='card' >
            <h3>Nome: { response.data[i].name }</h3>
            <h3>Bandeira:</h3>
            <img alt='bandeira' src={response.data[i].img_url}/>
          </div>
          
          
          )

      }
      setNomes(nome)
        
    })
    .catch(function (error) {
      console.log(error);
    });

  },[])
  

  console.log(nomes[3])
 
  return (
    <div>
      <h2>Dados:</h2>
        {nomes.map(x => x)}
    </div>
  );

    

  
}


