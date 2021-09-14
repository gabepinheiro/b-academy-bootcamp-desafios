import { Car, url } from "../../app"
import { del } from "../../http"
import Button from "../button"
import { MessageProps } from "../message"
import { Wrapper } from "./styles"

type TableProps = {
  cars: Car[]
  deleteCar: (plate: string) => void
  updateMessage: (message: Pick<MessageProps, 'text' | 'show' | 'status'> ) => void 
}

const Table = ({ cars, deleteCar, updateMessage }: TableProps) => {
  const handleDelete = async (plate: string) => {
    const result = await del(url, { plate: plate ?? '' })

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
    
    deleteCar(plate)
  }

  return (
    <Wrapper>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Marca / Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cars.length === 0 && <tr><td colSpan={6}>Nenhum carro cadastrado</td></tr> }
          
          {cars.map(({ image, brandModel, plate, year, color }) => {
            return (
              <tr key={plate}>
                <td><img width="125px" height="45px" src={image} alt={brandModel}/></td>
                <td>{brandModel}</td>
                <td>{year}</td>
                <td>{plate}</td>
                <td style={{backgroundColor: color}}>{color}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(plate)}
                  >
                    Deletar
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Wrapper>
  )
}

export default Table