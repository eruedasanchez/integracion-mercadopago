// archivo App.jsx

import './App.css';
import axios from 'axios';
import products from '../products.json';

function App() {
  // const buy = async product => {
  //   const response = await axios.post('http://localhost:4000/mercadoPago', product);
  //   console.log('response front axios:', response);
  
  //   const form = document.createElement('form');
  //   form.method = 'POST';
  //   // form.action = 'http://localhost:4000/mercadoPago'; // Cambia la URL según sea necesario
  //   form.action = response.data
    
  //   response.data
  //   const input = document.createElement('input');
  //   input.type = 'hidden';
  //   input.name = 'redirectUrl'; // Ajusta el nombre del parámetro según sea necesario
  //   input.value = response.data;
  
  //   form.appendChild(input);
  //   document.body.appendChild(form);
  
  //   form.submit();
  // };

  const buy = async product => {
    try {
      const response = await axios.post('http://localhost:4000/mercadoPago', product);
      console.log('response front axios:', response);

      // const redirectUrl = response.data.respuestaMP;
      window.location.href = response.data;
      // window.open(response.data, '_blank');
      // window.location.href = redirectUrl;
    } catch (error) {
      console.error('Error en la solicitud a MercadoPago:', error);
    }
  }

  // const buy = async product => {
  //   try {
  //     const response = await fetch('http://localhost:4000/mercadoPago', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(product),
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log('Respuesta del servidor:', responseData);
  //       window.location.href = responseData.respuestaMP;
  //     } else {
  //       console.error('Error en la solicitud a MercadoPago:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error en la solicitud a MercadoPago:', error);
  //   }
  // }
  
  return (
    <div className='ContainerSuperior'>
      {
        products.map(product => (
          <div className='ContainerProducto' key={product.title}>
            <p>{product.title}</p>
            <p>{`$ ${product.price}`}</p>
            <p>{`Cant: ${product.quantity}`}</p>
            <button onClick={() => buy(product)}>Comprar</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
