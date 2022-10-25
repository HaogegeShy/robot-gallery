import React, { Component } from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from "react-icons/fi";
import {appContext} from '../Appstore'
interface Props{}
interface State{
  isOpen:boolean
}

export default class ShoppingCart extends Component<Props,State>{
  constructor(props:Props){
    super(props)
    this.state={
      isOpen:false
    }
  }

  handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log("e.target ", e.target)
    console.log("e.currentTarget ", e.currentTarget)
    if((e.target as HTMLElement).nodeName === "SPAN"){
      this.setState({ isOpen: !this.state.isOpen });
    }
  }
  render() {
    return(
      <appContext.Consumer>{
        (value)=>
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick} >
                <FiShoppingCart/>
                <span>购物车{value.shoppingCart.item.length}(件)</span>
                </button>
              <div style={{display:this.state.isOpen?'block':'none'}} className={styles.cartDropDown}>
                <ul>
                  {value.shoppingCart.item.map(r=>
                    <li key={r.id}>{r.name}</li>
                  )}
                </ul>
              </div>
            </div>
      }</appContext.Consumer>
    )
  }
}
