import React from 'react'
import Layout from 'components/Layout'
import useTages from './useTag'
import styled from 'styled-components'
import Icon from 'components/Icon'
const TagList = styled.ol`
    /* padding:0 16px; */
    font-size:16px;
    li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #d5d5d9;
        padding:12px 16px 12px 0;
        margin-left:16px;
        svg{
            width:24px;
            height:24px;
            fill:#d5d5d9;
        }
    }
    
    
`;
const ButtonWrapper = styled.div`
    display:flex;
   
    justify-content:center;
    padding-top:20px;
    button{
        font-size:18px;
        border:none;
        padding:8px 12px;
        background:#767676;
        border-radius:4px;
    }
`;

export default function Money() {
    const {tags,setTags} = useTages()
    console.log(setTags)
    return (
        <Layout>
            <TagList>
            {tags.map(item=><li key={item}><span className='oneline'>{item}</span><Icon name='right'/></li>)}
            </TagList>
            <ButtonWrapper ><button>新建标签</button></ButtonWrapper>
        </Layout>
    )
}
