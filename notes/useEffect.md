# useEffect

`useEffect` is a hook that allows you to perform side effects in function components. It is similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

```jsx
import { useState, useEffect } from 'react'


const [todos, setTodos] = useState([])

useEffect(() => {
const storedTodos = JSON.parse(localStorage.getItem('todos'))

if (storedTodos) {
    setTodos(storedTodos)
}
}, [])
```

In the example above, we are using `useEffect` to load todos from `localStorage` when the component mounts. The second argument of `useEffect` is an array of dependencies. If the dependencies change, the effect will run again.
As in this example the array is empty, the effect will only run once when the component mounts. In other cases, the effect will run whenever the dependencies change, jsut like below

```jsx
import { useState, useEffect } from 'react'

const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('')

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'))

  if (storedTodos) {
    setTodos(storedTodos)
  }
}, [filter]) // Dependency 'filter'
```