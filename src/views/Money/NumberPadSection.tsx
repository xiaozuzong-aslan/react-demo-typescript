import React from 'react'
import Wrapper from './NumberpadSection/Wrapper'
import calculation from './NumberpadSection/calculation'


type Props = {
    value:string,
    onChange:(amount:string)=>void
}
const NumberPadSection:React.FC<Props> = (props) =>{
    // const [output,setOutput] = useState<string>('0')
    let output = props.value.toString()
    const onClickButtonWrapper = (e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
            if(text!==null){
                if('1234567890.'.split('').concat(['清空','删除']).indexOf(text)>=0){
                    
                    const newText = calculation(text,output)//引入计算函数
                    if(newText){
                        props.onChange(newText)
                    }
                }else if(text === 'OK'){
                    console.log('xxxxx')
                }
            }
    }
    return (
        <Wrapper>
            <div className='output' >
                {output}
            </div>
            <div className='pad clearfix' onClick={onClickButtonWrapper}>{/* button的事件委托给父级标签 */}
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
    </Wrapper>
    )
}
export default NumberPadSection