import { Car, MessageState } from "../../App"
import { post } from "../../http"
import { url } from '../../App'
import React, { useState } from "react"

type FormProps = {
  setCar: (car: Car) => void
  setMessage: React.Dispatch<React.SetStateAction<MessageState>>
}

const initialState = {
    brandModel: '',
    color: '',
    image: '',
    plate: '',
    year: ''
}

const Form = ({ setCar, setMessage }: FormProps) => {
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
      setMessage({
        text: result.message,
        status: 'fail',
        show: true
      })
      return
    }

    setMessage({
      text: result.message,
      status: 'success',
      show: true
    })
    setCar({...carFields})
    setCarFields({...initialState})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastre seus Carros</h1>

      <div className="form-control">
        <label htmlFor="image">Imagem (URL)</label>
        <input 
          autoFocus={true}
          value={carFields.image}
          onChange={handleChange}
          type="text" id="image" name="image" />
      </div>

      <div className="form-control">
        <label htmlFor="brand-model">Marca / Modelo</label>
        <input 
          value={carFields.brandModel}
          onChange={handleChange}
          type="text" id="brand-model" name="brandModel" />
      </div>

      <div className="form-control">
        <label htmlFor="year">Ano</label>
        <input 
          value={carFields.year}
          onChange={handleChange}
          type="number" id="year" name="year" />
      </div>

      <div className="form-control">
        <label htmlFor="plate">Placa</label>
        <input 
          value={carFields.plate}
          onChange={handleChange}
          type="text" id="plate" name="plate" />
      </div>

      <div className="form-control">
        <label htmlFor="color">Cor</label>
        <input 
          value={carFields.color}
          onChange={handleChange}
          type="text" id="color" name="color" />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form