import { useEffect } from 'react'
import { useState } from 'react'

import Form from './components/Form'
import Table from './components/Table'
import { get } from './http'

const url = 'http://localhost:3333/cars'

export type Car = {
  image: string
  brandModel: string
  year: string
  plate: string
  color: string
}

function App() {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const getCars = async () => {
      const result = await get(url)
      setCars(result)
    }

    getCars()
  }, [])

  return (
   <>
    <Form />
    <Table cars={cars}/>
   </>
  );
}

export default App;
