import React from 'react'
import { useEffect,useRef,useState } from 'react'
import { useLocation } from 'react-router-dom'
function usePreviousRoute() {
    const location=useLocation();
    const prevLocationRef=useRef(null)
    useEffect(() => {
let currentPath=location.pathname
let previousPath=localStorage.getItem("currentPath");
localStorage.setItem("previousPath",previousPath||"")
localStorage.setItem("currentPath",currentPath)
    }, [location])
    

}




export default function getPreviousRoute(){
    return localStorage.getItem("previousPath")
}