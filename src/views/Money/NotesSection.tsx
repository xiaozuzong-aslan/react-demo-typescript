import React from 'react'
import styled from 'styled-components'

const SectionNotes = styled.section`
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


export default function NotesSection() {
    return (
        <SectionNotes>
            <label>
                <span>备注</span>
                <input type="text"  placeholder="在这里输入备注"/>
            </label>
        </SectionNotes>
    )
}
