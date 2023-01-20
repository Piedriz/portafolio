// import { useEffect,useRef,useState } from "react";

// export const useObserver = (options) =>{
//     const [elements,setElements] = useState([])
//     const [entries,setEntries] = useState([])

//     const item = useRef(null)
 
//     const observer = useRef(new IntersectionObserver(observedEntries =>{
//         console.log(observedEntries)
//         setEntries(observedEntries)

//     },options));

//     useEffect(()=>{
//         const currentObserver = observer.current;
//         currentObserver.disconnect();
//         if(elements.length > 0){
//             elements.forEach(element => currentObserver.observe(element));
//         }
//         return function cleanUp(){
//             if(currentObserver){
//                 currentObserver.disconnect();
//             }

//         }
//     },[elements])



//     return[observer.current,setElements,entries,item]
// }

import { useEffect, useState, useRef } from 'react'

export const useObserver = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    },{threshold:0.1})
    observer.observe(ref.current)
  }, [ref])
  return [show, ref]
}
