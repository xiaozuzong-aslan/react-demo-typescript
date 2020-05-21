import React, { useRef} from 'react'
import styled from 'styled-components'
import useTages from 'hooks/useTag'

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
    const {tags,addTag} = useTages()
    const list = props.value;
    const selected = (tag:string) => {
        const index = list.indexOf(tag)
        index>=0 ? props.onChange([]) :props.onChange([tag])
    }
    const mainRef = useRef<HTMLOListElement>(null)
    // useEffect(()=>{
    //     if(mainRef.current){
    //         if(mainRef.current.scrollHeight > 76){
    //             mainRef.current.scrollTop = mainRef.current.scrollHeight
    //         }
    //     }
    // },[tags])//下拉功能
    return (
        <Wrapper>
            <ol ref={mainRef}>
               {tags.map((item,index)=><li key={index} 
               className={list.indexOf(item.name)>=0?'selected':''}
               onClick={()=>{
                selected(item.name)
               }}
               >{item.name}</li>)}
            </ol>
            <div><button onClick={addTag}>新建标签</button></div>
            
        </Wrapper>
    )
}

export default TagsSection
