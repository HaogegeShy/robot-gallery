import React,{useContext} from 'react'
import {appSetStateContext} from '../Appstore'
import {RobotProps} from './robots'

export const withAddToCart= (ChildComponent:React.ComponentType<RobotProps>) => {

  return (props)=>{

    const setState=useContext(appSetStateContext)
  
    const addToCart=(id,name) => {
    if(setState){
      setState(data=>{
        return {
          ...data,
          shoppingCart:{
            item:[...data.shoppingCart.item,{id,name}]
          }
        }
      })
    }
  }
    return <ChildComponent {...props} addToCart={addToCart}/>
  }
}

export const useAddToCart =()=>{
  const setState=useContext(appSetStateContext)
  
    const addToCart=(id:number,name:string) => {
    if(setState){
      setState(data=>{
        return {
          ...data,
          shoppingCart:{
            item:[...data.shoppingCart.item,{id,name}]
          }
        }
      })
    }
  }
  return addToCart
}