import React, { createContext, useState, useEffect, useContext } from 'react'

// services
import { getBrands, getModels, getValue, getYears } from 'services'

type FipeContextData = {
  brands: SelectOption[]
  models: SelectOption[]
  years: SelectOption[]
  fipeValue: FipeValueType
  selectedValue: SelectedValueType
  handleInput: (field: string, value: SelectOption | null) => void
}

type FipeContextProps = {
  children: React.ReactNode
}

type SelectOption = {
  value: string
  name: string
}

type SelectedValueType = {
  brand: SelectOption | null
  model: SelectOption | null
  year: SelectOption | null
}

type FipeValueType = {
  AnoModelo: number
  Marca: string
  Modelo: string
  Valor: string
}

const FipeContext = createContext<FipeContextData>({} as FipeContextData)

const FipeProvider = ({ children }: FipeContextProps) => {
  const [brands, setBrands] = useState<SelectOption[]>([])
  const [models, setModels] = useState<SelectOption[]>([])
  const [years, setYears] = useState<SelectOption[]>([])
  const [fipeValue, setFipeValue] = useState<FipeValueType>({} as FipeValueType)

  const [selectedValue, setSelectedValue] = useState<SelectedValueType>({
    brand: null,
    model: null,
    year: null
  })

  // get all brands
  useEffect(() => {
    const getListBrands = async () => {
      const response = await getBrands()
      setBrands(response as SelectOption[])
    }

    getListBrands()
  }, [])

  // get all models
  useEffect(() => {
    const getListModels = async () => {
      if (!selectedValue.brand) return

      const response = await getModels(Number(selectedValue.brand.value))
      setModels(response as SelectOption[])
    }

    handleInput('model', null)
    getListModels()
  }, [selectedValue.brand])

  // get all years
  useEffect(() => {
    const getListYears = async () => {
      if (!selectedValue.brand || !selectedValue.model) return

      const response = await getYears(
        Number(selectedValue.brand.value),
        Number(selectedValue.model.value)
      )
      setYears(response as SelectOption[])
    }

    handleInput('year', null)
    getListYears()
  }, [selectedValue.model])

  // get fipe value
  useEffect(() => {
    if (!selectedValue.year) return

    const getListFipeValue = async () => {
      const response = await getValue(
        Number(selectedValue?.brand?.value),
        Number(selectedValue?.model?.value),
        selectedValue?.year?.value || ''
      )
      setFipeValue(response)
    }

    getListFipeValue()
  }, [selectedValue.year])

  const handleInput = (field: string, value: SelectOption | null) => {
    setSelectedValue((state) => ({ ...state, [field]: value }))
  }

  return (
    <FipeContext.Provider
      value={{
        brands,
        models,
        years,
        fipeValue,
        selectedValue,
        handleInput
      }}
    >
      {children}
    </FipeContext.Provider>
  )
}

const useFipe = () => useContext(FipeContext)

export { FipeProvider, useFipe }
