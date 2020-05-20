import {useState,useEffect} from 'react'
import createId from 'helpers/createId'
import {useUpdate} from 'hooks/useUpdate'
// const defaultTag = [
//     {id:1,name:'衣'},
//     {id:2,name:'食'},
//     {id:3,name:'住'},
//     {id:4,name:'行'}
// ]

const useTags = ()=>{
    
    const [tags,setTags] = useState<{id:number,name:string}[]>([])

    useEffect(()=>{//第一次进来执行
        setTags(JSON.parse(window.localStorage.getItem('tags')||'[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)

    const findTag = (id:number) =>{
        return tags.filter(item=>item.id === id)[0]
    }
    const updateTag = (id:number,name:string) =>{
        setTags(tags.map(item=>item.id===id?{id,name}:item))
    } 
    const deleteTag = (id:number) =>{
        setTags(tags.filter(item=>item.id!==id))
    }
    const addTag = ()=>{
        const name = window.prompt('请输入标签名')
        if(name!== null){
            if(name.length > 0){
                if(tags.map(item=>item.name).indexOf(name)>=0){
                    alert('标签名重复')
                }else{
                    setTags(state=>[...state,{id:createId(),name}])
                }
                
            }else{
                window.alert('内容不能为空哒')
            }
        }
    }
    
    return {tags,setTags,findTag,updateTag,deleteTag,addTag}
}
export default useTags