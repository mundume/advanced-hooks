// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

export const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(`useCount must be rendered within countProvider`)
  }
  return context
}

// 🐨 create your CountContext here with React.createContext

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCount()
  // 🐨 get the setCount from useContext with the CountContext

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
