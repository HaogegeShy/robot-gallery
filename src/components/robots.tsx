import React, { useContext } from "react";
import {appContext} from '../Appstore'
import styles from './Robot.module.css'
import {withAddToCart} from './AddToCart'
export interface RobotProps {
  id:number,
  name:string,
  email:string,
  addToCart:(id,name)=>void
}

const Robot:React.FC<RobotProps> = ({id,name,email,addToCart}) => {
  const value=useContext(appContext)
  

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} ></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={()=>addToCart(id,name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)