import { Car, url } from "../../App"
import { del } from "../../http"

type TableProps = {
  cars: Car[]
  setCars: (cars: Car[]) => void
}

const Table = ({ cars, setCars }: TableProps) => {
  const handleDelete = async (plate: string) => {
    const result = await del(url, { plate: plate ?? '' })

    if (result.error) {
      console.log('erro ao deletar', result.message)
      return
    }

    setCars([...cars].filter(car => car.plate !== plate))
  }
  return (
    <table>
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
                <td>{plate}</td>
                <td>{year}</td>
                <td style={{backgroundColor: color}}>{color}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(plate)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}

export default Table