import React from 'react'
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

export default function Category() {
    return (
        <SectionType>
            <ul>
                <li className='selected'>支出</li>
                <li>收入</li>
            </ul>
        </SectionType>
    )
}
