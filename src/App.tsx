import './App.css'
import { Component1 } from './components/Componente1'
import { TestProvider } from './providers/TestContext'

export const App = () => {
  return (
    <div className="App">
      <h1>Teste</h1>
      

      <TestProvider>
        <Component1 />
      </TestProvider>
    </div>
  )
}
