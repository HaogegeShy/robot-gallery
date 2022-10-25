import React,{useEffect, useState} from 'react';
import logo from './assets/imges/logo.svg'
// import robots from './mockdata/robots.json'
import Robot from './components/robots'
import ShoppingCart from './components/ShoppingCart'
import styles from './App.module.css'
import RobotDisCount from './components/robotDiscount'


 const App = () =>  {
  const [count,setCount]= useState(0)
  const [robotGallery,setRobotGallery] = useState<any[]>([])
  const [loading,setLoading]=useState<boolean>(false)
  const [error,setError]=useState<string>('')

  useEffect(()=>{
  
    const fetchData= async ()=>{
      try{
        setLoading(true)
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        setRobotGallery(data)
      }catch(e:any){
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  },[])



    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
        </div>
        <button onClick={()=>{setCount(count+1)}}>
          Click
        </button>
        <span>count: {count}</span>
        <ShoppingCart></ShoppingCart>
         {(error || error !== "") && <div>网站出错：{error}</div>}
        {
          loading?<h2>loading 加载中</h2>:
          <div className={styles.robotList}>
            {robotGallery.map((item,index)=> (
            index%2===0? <RobotDisCount key={item.id} id={item.id} name={item.name} email={item.email}></RobotDisCount>:
            <Robot key={item.id} id={item.id} name={item.name} email={item.email}></Robot>))}        
          </div>
        
        }
        
      </div>
    );
   
}

export default App;
