import React from 'react'
import { DataAndPosition } from './useInput.model'

export default function useInput() {
  const [allData, setData] = React.useState<DataAndPosition[]>([])
  const [inputData, setInputData] = React.useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      const value = event.target.value
      setInputData(value)
    } catch (e) {
      console.log(e)
    }
  }

  function handleSubmit() {
    const value: number = !isNaN(Number(inputData)) ? Number(inputData) : 0
    if (allData.length < 1) {
      const data: DataAndPosition = {
        value,
        x: 0,
        y: 0
      }
      setData([data])
    } else {
      const lastItem = allData[allData.length - 1]
      // TODO: refactor if have time
      if (value < lastItem.value) {
        const data: DataAndPosition = {
          value,
          x: lastItem.x - 1,
          y: allData.length
        }
        setData([...allData, data])
      } else {
        const data: DataAndPosition = {
          value,
          x: lastItem.x + 1,
          y: allData.length
        }
        setData([...allData, data])
      }
    }
    setInputData('')
  }

  return {
    allData,
    inputData,
    handleChange,
    handleSubmit
  }
}
