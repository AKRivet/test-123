import { Counter } from './features/counter/Counter'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg p-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">New Custom Test</h1>
        <Counter />
      </div>
    </div>
  )
}

export default App
