import React from 'react'
import styled from 'styled-components'
import useTages from '../useTag'

const Wrapper = styled.section`
    
    flex-grow:1;
    padding:12px 16px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    ol{
        display:flex;
        margin:0 -12px;
        flex-wrap:wrap;
        height:76px;
        align-content:center;
        overflow:auto;
        li{
            max-height:22px;
            background:#D9D9D9;
            border-radius:18px;
            padding:3px 18px;
            margin:8px 12px;
            font-size:14px;
            &.selected{
                background:red;
            }
        }
    }
    div{
        button{
        border:none;
        background:none;
        padding:0 5px;
        border-bottom:1px solid #333;
        color:#666;
        margin-top:8px;
    }
    }
   
`;
type Props = {
    value:string[],
    onChange:(selected:string[])=>void;
    
}

const TagsSection:React.FC<Props> = (props) => {
    
    const {tags,setTags} = useTages()
    
    // const [list,setList] = useState<string[]>([])
    const list = props.value;
    const selected = (tag:string) => {
        const index = list.indexOf(tag)
        index>=0 ? props.onChange(list.filter(item=>item!==tag)) :props.onChange([...list,tag])
    }
    const add = ()=>{
        const name = window.prompt('请输入标签名')
        if(name!== null){
            if(name.length > 0){
                setTags(state=>[...state,name])
            }else{
                window.alert('内容不能为空哒')
            }
        }
        
    }
    return (
        <Wrapper>
            <ol>
               {tags.map((item,index)=><li key={index} 
               className={list.indexOf(item)>=0?'selected':''}
               onClick={()=>{
                selected(item)
               }}
               >{item}</li>)}
            </ol>
            <div><button onClick={add}>新建标签</button></div>
            
        </Wrapper>
    )
}

export default TagsSection
