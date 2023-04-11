type DefaultOptionAPI = {
  codigo: string
  nome: string
}

const formatOption = (array: DefaultOptionAPI[]) => {
  return array.map((item) => {
    return { value: item.codigo, name: item.nome }
  })
}

export { formatOption }
