import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containers/App';
import SuppliersContainer from './containers/SuppliersContainer'
import StockContainer from './containers/StockContainer'
import RecipeContainer from './containers/RecipeContainer';
import Navbar from './containers/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const baseURL = 'http://localhost:4000'
export const recipeEndPoint = '/recipes'
export const suppliersEndPoint = '/suppliers'
export const stockEndPoint = '/stocktake'

ReactDOM.render(
    <div className="home-main">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/recipeHome">
              < RecipeContainer />
            </Route>
            <Route exact path="/suppliers">
                < SuppliersContainer />
            </Route>
            <Route exact path="/stock">
                < StockContainer />
            </Route>
            <Route exact path="/" >
                < App />
            </Route>
            <Footer />
          </div>
        </Router>
      </div>,
    document.getElementById('root'))

