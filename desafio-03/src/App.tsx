import { useEffect } from 'react'
import { useState } from 'react'

import Form from './components/Form'
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

function App() {
  const [car, setCar] = useState<Car | null>(null)
  const [cars, setCars] = useState<Car[]>([])

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

  return (
   <>
    <Form setCar={setCar}/>
    <Table cars={cars}/>
   </>
  );
}

export default App;
