import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SignleProduct,
} from './pages'

// const Home = lazy(() => import('./pages/HomePage'))

const App = () => {
  return (
    <Router>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={SignleProduct} />

        <Route path='*' component={Error} />
      </Switch>
      <Footer />
      {/* </Suspense> */}
    </Router>
  )
}

export default App
