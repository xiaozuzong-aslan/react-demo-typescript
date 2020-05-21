import {useState, useEffect} from 'react'
import {useUpdate} from 'hooks/useUpdate'
type RecordItem = {
    tags:string[],
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
        if(newRecord.tags.length<1){
            alert('必须选一个标签')
            return
        }
        if(newRecord.amount === '0'){
            alert('没有填写金额哦亲')
            return
        }
        const record = {...newRecord,createAt:new Date().toISOString()}
        setRecords([...records,record])
        alert('保存成功')
    }
   
    return {records,addRecords}
}

export default useRecords