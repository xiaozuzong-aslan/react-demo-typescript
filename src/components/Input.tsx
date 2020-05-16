import React from 'react'
import styled from 'styled-components'

const  Label = styled.label`
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
`;
type Props = {
    label?:string,
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC<Props> = (props)=>{
    const {label,children,...reset} = props
    return (
        <Label>
            <span>{label}</span>
            <input {...reset} />
        </Label>
    )
}

export {
    Input
}