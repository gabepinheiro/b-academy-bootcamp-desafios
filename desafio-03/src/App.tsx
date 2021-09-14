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
  const [car, setCar] = useState<Car | null>(null)
  const [cars, setCars] = useState<Car[]>([])
  const [message, setMessage] = useState<MessageState>({ text: '', status: '', show: false })

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

  const updateMessage = (message: MessageState) => setMessage({...message})

  const isShowMessage = (show: boolean) => setMessage(prev => ({...prev, show}))

  return (
   <>
    {message.show && <Message 
                       status={message.status}
                       isShowMessage={isShowMessage}
                      >
                       {message.text}
                    </Message>}

    <Form updateCar={updateCar} updateMessage={updateMessage} />
    <Table cars={cars} setCars={setCars} updateMessage={updateMessage} />
   </>
  );
}

export default App;
