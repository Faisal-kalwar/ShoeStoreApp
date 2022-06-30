import React, { Component } from 'react'
import Products from '../Sections/Products'
import Detail from '../Sections/Detail'
import {Route} from "react-router-dom"
import Cart from './Cart'
import Payment from './Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Detail} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section