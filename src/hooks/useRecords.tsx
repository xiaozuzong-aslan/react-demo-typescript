import {useState, useEffect} from 'react'
import {useUpdate} from 'hooks/useUpdate'
type RecordItem = {
    tags:number[],
    note:string,
    category:'+'|'-',
    amount:string,
    createAt:string,
    
}
type newRecord = Omit<RecordItem,'createAt'>

const useRecords = () =>{
    const [records,setRecords] = useState<RecordItem[]>([])
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')|| '[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },records)
    const addRecords = (newRecord:newRecord) =>{
        const record = {...newRecord,createAt:new Date().toISOString()}
        setRecords([...records,record])
    }
   
    return {records,addRecords}
}

export default useRecords