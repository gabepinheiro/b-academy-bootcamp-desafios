import { Car } from "../../App"
import { post } from "../../http"
import { url } from '../../App'

type GetFormElement = (target: HTMLFormElement) =>
  (elementName: string) =>
  HTMLInputElement

const getFormElement: GetFormElement = (target) => (elementName) => {
  return target[elementName]
}

type FormProps = {
  setCar: (car: Car) => void
}

const Form = ({ setCar }: FormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const getElement = getFormElement(e.currentTarget)
    const image = getElement('image')

   const car: Car = {
    image: image.value, 
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value,
   } 

   const result = await post(url, car)

   if (result.error) {
     console.log('deu erro na hora de cadastrar', result.message)
     return
   }

   setCar({...car})
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Imagem (URL)</label>
          <input type="text" id="image" name="image" />
        </div>

        <div>
          <label htmlFor="brand-model">Marca / Modelo</label>
          <input type="text" id="brand-model" name="brand-model" />
        </div>

        <div>
          <label htmlFor="year">Ano</label>
          <input type="number" id="year" name="year" />
        </div>

        <div>
          <label htmlFor="plate">Placa</label>
          <input type="text" id="plate" name="plate" />
        </div>

        <div>
          <label htmlFor="color">Cor</label>
          <input type="text" id="color" name="color" />
        </div>

        <button type="submit">Cadastrar carro</button>
      </form>
  )
}

export default Form