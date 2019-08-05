import print from './test.js'
import './style.css'

console.log('Hello world !xxx')

if (module.hot) {
  console.log('hot')
  console.log(module.hot)
  module.hot.accept('./test.js', function () {
    console.log('hot')
    print()
  })
} else {
  console.log('No')
}
