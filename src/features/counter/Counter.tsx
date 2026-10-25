import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Counter</h2>
      <div className="mb-6 text-5xl font-bold text-gray-900">{count}</div>
      <div className="flex justify-center gap-3">
        <button
          className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-200"
          onClick={() => dispatch(decrement())}
        >
          &minus;
        </button>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}
