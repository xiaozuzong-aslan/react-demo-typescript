import React,{useState} from 'react'
import styled from 'styled-components'

const SectionType = styled.section`
    font-size:24px;
    ul{
        display:flex;
        background:#c4c4c4;
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
    }
`;
const categoryMap = {'-':'支出','+':'收入'}
type keys =  keyof typeof categoryMap


type Props = {
    value:keys,
    onChange:(category:keys)=>void
}

const Category:React.FC<Props> = (props) =>{
    const [categoryList] = useState<keys[]>(['+','-'])
    // const [category,setCategory] = useState<string>('-')
    const category = props.value
    return (
        <SectionType>
            <ul>
                
                {categoryList.map((item,index)=><li key={index}
                className={category===item?'selected':''}
                onClick={()=>{
                    props.onChange(item)
                }}
                >{categoryMap[item]}</li>)}
               
            </ul>
        </SectionType>
    )
}
export default  Category