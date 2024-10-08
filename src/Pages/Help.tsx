import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReactTyped } from "react-typed"



const Help = () => {
    const [timer,setTimer] = useState(0)
    const navigate = useNavigate()
    useEffect(()=>{
        setTimer(6)
    },[])

    const intervalId = setInterval(()=>{
        setTimer(timer-1)
    },1000)
    
    if(timer < 1){
        clearInterval(intervalId)   
        navigate("/")
    }

  return (
    <div className="flex  items-center pt-56 justify-center flex-col">
        <h1 className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent text-3xl">Currently unavailable!</h1>
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent text-3xl">You will be redirected to the home page in <ReactTyped strings={[`${timer}...`]} typeSpeed={100} loop /></span>
    </div>
  )
}

export default Help
