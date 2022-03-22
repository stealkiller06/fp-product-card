import React,{  useContext } from "react"
import {  ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps{
  className?:string,
  counter?:number
}
export const ProductButtons = ({className="",counter:count}:ProductButtonsProps)=>{

  //maxCount
    const {increaseBy,counter,isMaxCountReached} = useContext(ProductContext)

  
      return(
    
          <div className={`${styles.buttonsContainer} ${className}`}>
          <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
            -
          </button>
  
          <div className={`${styles.countLabel} `}>{count?count:counter}</div>
          <button 
          onClick={() => increaseBy(+1)} 
          disabled={isMaxCountReached}
          className={`${styles.buttonAdd} ${isMaxCountReached?styles.disabled:''}`}>
            +
          </button>
        </div>
      )
  }