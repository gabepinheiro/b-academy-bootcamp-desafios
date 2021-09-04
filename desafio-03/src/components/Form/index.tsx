import { Car } from "../../App"
import { post } from "../../http"
import { url } from '../../App'
import React, { useState } from "react"

type FormProps = {
  setCar: (car: Car) => void
}

const initialState = {
    brandModel: '',
    color: '',
    image: '',
    plate: '',
    year: ''
}

const Form = ({ setCar }: FormProps) => {
  const [carFields, setCarFields] = useState<Car>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await post(url, carFields)

    if (result.error) {
      console.log('deu erro na hora de cadastrar', result.message)
      return
    }

    setCar({...carFields})
    setCarFields({...initialState})
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Imagem (URL)</label>
          <input 
            autoFocus
            value={carFields.image}
            onChange={handleChange}
            type="text" id="image" name="image" />
        </div>

        <div>
          <label htmlFor="brand-model">Marca / Modelo</label>
          <input 
            value={carFields.brandModel}
            onChange={handleChange}
            type="text" id="brand-model" name="brandModel" />
        </div>

        <div>
          <label htmlFor="year">Ano</label>
          <input 
            value={carFields.year}
            onChange={handleChange}
            type="number" id="year" name="year" />
        </div>

        <div>
          <label htmlFor="plate">Placa</label>
          <input 
            value={carFields.plate}
            onChange={handleChange}
            type="text" id="plate" name="plate" />
        </div>

        <div>
          <label htmlFor="color">Cor</label>
          <input 
            value={carFields.color}
            onChange={handleChange}
            type="text" id="color" name="color" />
        </div>

        <button type="submit">Cadastrar carro</button>
      </form>
  )
}

export default Form