import React,{useState,useRef} from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    background:#f5f5f5;
    padding:0 16px;
    font-size:14px;
    label{
        display:flex;
        align-items:center;
        
        span{
            margin-right:16px;
        }
        input{
            flex-grow:1;
            border:none;
            height:72px;
            background:transparent;
        }
    }
`;

//非受控组件写法
const NotesSection:React.FC = () =>{
    const [note,setNote] = useState<string>('')
    const text = useRef<HTMLInputElement>(null)
    const onBlur = () =>{
        text.current && setNote(text.current.value)
    }
    return (
        <Wrapper>
            <label>
                {note}
                <span>备注</span>
                <input type="text" 
                defaultValue={note}
                ref={text}
                onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}



//受控组件
// const  NotesSection:React.FC = (props) =>{
//     const [text,setText] = useState<string>('')
//     console.log('text')
//     const onChange = (vlaue:string)=>{
//         setText(vlaue)
//     }
//     return (
//         <Wrapper>
//             <label>
//                 <span>备注</span>
//                 <input type="text"  placeholder="在这里输入备注"  value={text} onChange={(e)=>{
//                     onChange(e.target.value)
//                 }}/>
//             </label>
//         </Wrapper>
//     )
// }
export default NotesSection