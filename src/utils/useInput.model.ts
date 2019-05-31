import React from 'react'

export interface Position {
  x: number
  y: number
}

export interface DataAndPosition extends Position {
  value: number
}

// export interface InputHooks {
//   allData: DataAndPosition[]
//   inputData: string
//   handleChange: React.ChangeEvent<HTMLInputElement>
//   handleSubmit: Function
// }
