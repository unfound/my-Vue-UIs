import print from './test.js'
import './style.css'
import './index.less'

console.log('Hello world !' + process.env.NODE_ENV)

const noname = () => {
  console.log('noname')
}

noname()

import('./dynamic' /* webpackChunkName: "dynamic" */).then(({ default: dynamic }) => {
  dynamic()
})

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
