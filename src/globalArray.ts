import { createContext } from 'react'

export interface Data {
  data: Array<Number | void>
  setData: Function
}

export const GlobalArray = createContext<Data>({ data: [], setData: () => {} })
