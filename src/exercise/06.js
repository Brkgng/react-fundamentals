// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const username = event.target.value
    const isError = username !== username.toLowerCase()
    setError(isError)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
      {error && (
        <p role="alert" style={{color: 'red'}}>
          Username must be lower case
        </p>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
