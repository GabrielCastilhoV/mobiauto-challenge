// utils
import { formatOption } from 'utils'

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'

export const getBrands = async () => {
  try {
    const response = await fetch(BASE_URL)
    const brandsJSON = await response.json()

    return formatOption(brandsJSON)
  } catch (error) {
    return error
  }
}

export const getModels = async (brandId: number) => {
  try {
    const response: any = await fetch(`${BASE_URL}/${brandId}/modelos`)
    const modelsJSON = await response.json()

    return formatOption(modelsJSON.modelos)
  } catch (error) {
    return error
  }
}

export const getYears = async (brandId: number, modelId: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${brandId}/modelos/${modelId}/anos`
    )
    const yearsJSON = await response.json()

    return formatOption(yearsJSON)
  } catch (error) {
    return error
  }
}

export const getValue = async (
  brandId: number,
  modelId: number,
  year: string
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${brandId}/modelos/${modelId}/anos/${year}`
    )
    const yearsJSON = await response.json()

    return yearsJSON
  } catch (error) {
    return error
  }
}

export default getBrands
