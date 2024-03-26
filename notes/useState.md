# useState

`useState` es un hook de React devuelve un array, el elemento con el valor inicial q le pasamos como argumento, y una función para modificar ese elemento

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pomodoro</h1>
      <div className="card">
		<button onClick={()=>setCount((count)=>count+1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    </>
  )
}
```
