import {useRef,useEffect} from 'react'

export const useUpdate = (fn:()=>void,deps:any[]) =>{
    const count = useRef(0)
    useEffect(()=>{
        count.current++
        
    })
    useEffect(()=>{
        if(count.current>1){
           fn()
        //    window.localStorage.setItem('tags',JSON.stringify(tags))
        }
    },[deps,fn])
}