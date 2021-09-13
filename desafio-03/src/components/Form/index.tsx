import { Car, MessageState } from "../../App"
import { post } from "../../http"
import { url } from '../../App'
import React from "react"

type FormProps = {
  setCar: (car: Car) => void
  setMessage: React.Dispatch<React.SetStateAction<MessageState>>
}

type GetFormElement = (target: HTMLFormElement) =>
  (elementName: string) =>
  HTMLInputElement

const getFormElement: GetFormElement = (target) => (elementName) => {
  return target[elementName]
}

const Form = ({ setCar, setMessage }: FormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    const getElement = getFormElement(target)

    const inputImage = getElement('image')

    const car = {
        image: inputImage.value,
        brandModel: getElement('brandModel').value,
        year: getElement('year').value,
        color: getElement('color').value,
        plate: getElement('plate').value,
    }
    
    const result = await post(url, car)

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

    setCar({...car})

    target.reset();
    inputImage.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastre seus Carros</h1>

      <div className="form-control">
        <label htmlFor="image">Imagem (URL)</label>
        <input autoFocus type="text" id="image" name="image" />
      </div>

      <div className="form-control">
        <label htmlFor="brand-model">Marca / Modelo</label>
        <input type="text" id="brandModel" name="brandModel" />
      </div>

      <div className="form-control">
        <label htmlFor="year">Ano</label>
        <input type="number" id="year" name="year" />
      </div>

      <div className="form-control">
        <label htmlFor="plate">Placa</label>
        <input type="text" id="plate" name="plate" />
      </div>

      <div className="form-control">
        <label htmlFor="color">Cor</label>
        <input type="text" id="color" name="color" />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form