import React from 'react'
import styled from '@emotion/styled'
import rand from './randElemKey'
import { useInput } from './utils'
import { Position, DataAndPosition } from './utils/useInput.model'
// import { GlobalArray } from './globalArray'

const Main = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: calc(100vw + (100vw - 100%));
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
`

const InnerItem = styled.div<Position>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 50%;
  position: absolute;
  top: ${props => `calc((70px * ${props.y}) + 110px)`};
  left: ${props => `calc(50% + (${props.x} * 100px))`};
  transform: translateX(-50%);
`

const App: React.FC = () => {
  const { allData, inputData, handleChange, handleSubmit } = useInput()

  return (
    <Main>
      <h1>tree app</h1>
      {allData.map((data: DataAndPosition, index: number) => {
        return (
          <InnerItem key={rand(index)} x={data.x} y={data.y}>
            {data.value}
          </InnerItem>
        )
      })}
      <div>
        <input
          placeholder="type some number"
          value={inputData}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>submit</button>
      </div>
    </Main>
  )
}

export default App
