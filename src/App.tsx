import React from 'react'
import styled from '@emotion/styled'
import rand from './randElemKey'
// import { GlobalArray } from './globalArray'

interface Position {
  x: number
  y: number
}

interface DataAndPosition extends Position {
  value: number
}

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
  const [allData, setData] = React.useState<DataAndPosition[]>([])
  const [inputData, setInputData] = React.useState('')

  React.useEffect(() => {
    console.log(allData)
  }, [allData])

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
