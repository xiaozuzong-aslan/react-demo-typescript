import {useState} from 'react'




const useTags = ()=>{
    const [tags,setTags] = useState<{id:number,name:string}[]>([
        {id:1,name:'衣'},
        {id:2,name:'食'},
        {id:3,name:'住'},
        {id:4,name:'行'}
    ])
    const findTag = (id:number) =>{
        return tags.filter(item=>item.id=== id)[0]
    } 
    

    return {tags,setTags,findTag}
}
export default useTags