import { Car } from "../../App"

type TableProps = {
  cars: Car[]
}

const Table = ({ cars }: TableProps) => {
  return (
    <table style={{"borderWidth":"1px", 'borderStyle':'solid'}}>
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
                <td><img width="100px" src={image} alt={brandModel}/></td>
                <td>{brandModel}</td>
                <td>{plate}</td>
                <td>{year}</td>
                <td>{color}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}

export default Table