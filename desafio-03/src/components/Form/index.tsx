const Form = () => {
  return (
    <form>
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