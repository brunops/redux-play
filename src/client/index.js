const React = require('react')
const ReactDOM = require('react-dom')

const App = () => {
  return (
    <div>
      <h1>Hello from React !!!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
