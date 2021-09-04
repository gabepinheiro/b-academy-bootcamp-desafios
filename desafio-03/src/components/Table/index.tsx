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
          {cars.length === 0 && <td colSpan={6}>Nenhum carro cadastrado</td>}
        </tbody>
      </table>
  )
}

export default Table