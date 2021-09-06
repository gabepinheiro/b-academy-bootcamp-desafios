import { Car, MessageState } from "../../app"
import { post } from "../../http"
import { url } from '../../app'
import React, { useState } from "react"
import { FormControl, Input, Label, Wrapper } from "./styles"
import Button from "../button"

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const target = e.target as HTMLFormElement
    if(!target){
      return
    }

    const image = target.elements.namedItem('image') as HTMLInputElement
    image.focus()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Cadastre seus Carros</h1>

      <FormControl>
        <Label htmlFor="image">Imagem (URL)</Label>
        <Input
          autoFocus
          value={carFields.image}
          onChange={handleChange}
          type="text" id="image" name="image" />
      </FormControl>

      <FormControl>
        <Label htmlFor="brand-model">Marca / Modelo</Label>
        <Input 
          value={carFields.brandModel}
          onChange={handleChange}
          type="text" id="brand-model" name="brandModel" />
      </FormControl>

      <FormControl>
        <Label htmlFor="year">Ano</Label>
        <Input 
          value={carFields.year}
          onChange={handleChange}
          type="number" id="year" name="year" />
      </FormControl>

      <FormControl>
        <Label htmlFor="plate">Placa</Label>
        <Input
          value={carFields.plate}
          onChange={handleChange}
          type="text" id="plate" name="plate" />
      </FormControl>

      <FormControl>
        <Label htmlFor="color">Cor</Label>
        <Input 
          value={carFields.color}
          onChange={handleChange}
          type="text" id="color" name="color" />
      </FormControl>

      <Button type="submit">Cadastrar</Button>
    </Wrapper>
  )
}

export default Form