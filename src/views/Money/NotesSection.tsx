import React from 'react'
import styled from 'styled-components'
import {Input} from 'components/Input'
const Wrapper = styled.section`
    background:#f5f5f5;
    padding:10px 16px;
    font-size:14px;
`;

type Props = {
    value:string,
    onChange:(note:string) => void
}


//非受控组件写法
const NotesSection:React.FC<Props> = (props) =>{

    // const text = useRef<HTMLInputElement>(null)
    const changeNotes:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
       
        props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input label='备注' type="text"   placeholder='在这里输入备注' value={props.value} onChange={(e)=>{
                changeNotes(e)
            }}/>
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