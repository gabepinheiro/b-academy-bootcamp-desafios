import { useEffect } from 'react'
import { useState } from 'react'

import Form from './components/Form'
import Message from './components/Message'
import Table from './components/Table'
import { get } from './http'

export const url = 'http://localhost:3333/cars'

export type Car = {
  image: string
  brandModel: string
  year: string
  plate: string
  color: string
}

export type MessageState = {
   text: string
   show: boolean,
   status: string 
}

function App() {
  const [car, setCar] = useState<Car | null>(null)
  const [cars, setCars] = useState<Car[]>([])
  const [message, setMessage] = useState({ text: '', show: false, status: '' })

  useEffect(() => {
    const getCars = async () => {
      const result = await get(url)
      setCars(result)
    }

    getCars()
  }, [])

  useEffect(() => {
    function updateCars(){
      if(car === null){
        return
      }

      setCars(prevState => prevState.concat(car))
    }

    updateCars()

    return () => {}
  }, [car])

  const updateCar = (car: Car) => setCar({...car})

  return (
   <>
    {message.show && <Message 
                       status={message.status}
                       setMessage={setMessage}
                      >
                       {message.text}
                    </Message>}

    <Form updateCar={updateCar} setMessage={setMessage} />
    <Table cars={cars} setCars={setCars} setMessage={setMessage} />
   </>
  );
}

export default App;
