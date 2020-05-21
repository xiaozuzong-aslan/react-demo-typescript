import React,{useState} from 'react'
import styled from 'styled-components'
import cs from 'classnames'
const SectionType = styled.ul`
    display:flex;
    li{
        flex-grow:1;
        text-align:center;
        position:relative;
        padding:16px 0;
        &.selected::after{
            content:'';
            display:block;
            border:1px solid black;
            height:3px;
            width:100%;
            background:#333;
            position:absolute;
            bottom:0;
            left:0;
        }
    }
   
`;
const categoryMap = {'-':'支出','+':'收入'}
type keysType =  keyof typeof categoryMap

type Props = {
    value:keysType,
    onChange:(category:keysType)=>void,
    className?:string
}

const Category:React.FC<Props> = (props) =>{
    const [categoryList] = useState<keysType[]>(['+','-'])
    
    const category = props.value
    return (
        <SectionType className={cs('category',props.className)}>
           
                
                {categoryList.map((item,index)=><li key={index}
                className={category===item?'selected':''}
                onClick={()=>{
                    props.onChange(item)
                }}
                >{categoryMap[item]}</li>)}
            
        </SectionType>
    )
}
export default  Category