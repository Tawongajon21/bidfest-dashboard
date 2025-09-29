import React from 'react'
import { useEffect,useRef } from 'react'
import { useLocation } from 'react-router-dom'
function RouteTracker() {
  const location=useLocation();
const previousPathRef=useRef(null)
useEffect(() => {
  let currentPath=location.pathname
  if (previousPathRef.current) {
    localStorage.setItem("previousRoute",previousPathRef.current)
  }
  previousPathRef.current=currentPath
}, [location])
return null

}

export default RouteTracker