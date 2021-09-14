import { Car, url } from "../../app"
import { post } from "../../http"
import Button from "../button"
import { MessageProps } from "../message"
import { FormControl, Input, Wrapper, Label } from "./styles"

type FormProps = {
  updateCars: (car: Car) => void
  updateMessage: (message: Pick<MessageProps, 'text' | 'show' | 'status'> ) => void 
}

type GetFormElement = (target: HTMLFormElement) =>
  (elementName: string) => HTMLInputElement

const getFormElement: GetFormElement = (target) => (elementName) => {
  return target[elementName]
}

const Form = ({ updateCars, updateMessage }: FormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const target = e.target as HTMLFormElement

    const getElement = getFormElement(target)

    const inputImage = getElement('image')

    const car: Car = {
        image: inputImage.value,
        brandModel: getElement('brandModel').value,
        year: getElement('year').value,
        color: getElement('color').value,
        plate: getElement('plate').value,
    }
    
    const result = await post(url, car)

    if (result.error) {
      updateMessage({
        text: result.message,
        status: 'fail',
        show: true
      })
      return
    }

    updateMessage({
      text: result.message,
      status: 'success',
      show: true
    })

    updateCars(car)

    target.reset();
    inputImage.focus()
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Cadastre seus Carros</h1>

      <FormControl>
        <Label htmlFor="image">Imagem (URL)</Label>
        <Input
          autoFocus type="text" id="image" name="image" />
      </FormControl>

      <FormControl>
        <Label htmlFor="brand-model">Marca / Modelo</Label>
        <Input type="text" id="brand-model" name="brandModel" />
      </FormControl>

      <FormControl>
        <Label htmlFor="year">Ano</Label>
        <Input type="number" id="year" name="year" />
      </FormControl>

      <FormControl>
        <Label htmlFor="plate">Placa</Label>
        <Input type="text" id="plate" name="plate" />
      </FormControl>

      <FormControl>
        <Label htmlFor="color">Cor</Label>
        <Input type="text" id="color" name="color" />
      </FormControl>

      <Button type="submit">Cadastrar</Button>
    </Wrapper>
  )
}

export default Form