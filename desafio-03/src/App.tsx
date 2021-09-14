import { useEffect } from 'react'
import { useState } from 'react'

import Form from './components/Form'
import Message, { MessageProps } from './components/Message'
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

type MessageState = Pick<MessageProps, 'text' | 'status' | 'show'>

function App() {
  const [cars, setCars] = useState<Car[]>([])
  const [message, setMessage] = useState<MessageState>({ text: '', status: '', show: false })

  useEffect(() => {
    const getCars = async () => {
      const result = await get(url)
      setCars(result)
    }

    getCars()
  }, [])

  const updateCars = (car: Car) => setCars(prevState => prevState.concat(car))

  const deleteCar = (plate: string) => 
    setCars(prevState => prevState.filter(car => car.plate !== plate))

  const updateMessage = (message: MessageState) => setMessage({...message})

  const isShowMessage = (show: boolean) => setMessage(prev => ({...prev, show}))

  return (
   <>
    {message.show && ( 
      <Message 
          status={message.status}
          isShowMessage={isShowMessage}
      >
          {message.text}
      </Message>
    )}
    <Form updateCars={updateCars} updateMessage={updateMessage} />
    <Table cars={cars} deleteCar={deleteCar} updateMessage={updateMessage} />
   </>
  );
}

export default App;
