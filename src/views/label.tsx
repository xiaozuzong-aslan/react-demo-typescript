import React from 'react'
import {Link} from 'react-router-dom'
import Layout from 'components/Layout'
import useTages from './useTag'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {ButtonWrapper} from 'components/Button'
const TagList = styled.ol`
    /* padding:0 16px; */
    font-size:16px;
    li{
        a{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:12px 16px 12px 0;
        }
        border-bottom:1px solid #d5d5d9;
        margin-left:16px;
        svg{
            width:24px;
            height:24px;
            fill:#d5d5d9;
        }
    }
`;



export default function Money() {
    const {tags,addTag} = useTages()
    
    return (
        <Layout>
            <TagList>
            {tags.map(item=><li key={item.id}><Link to={`/tags/${item.id}`} > <span className='oneline'>{item.name}</span><Icon name='right'/></Link></li>)}
            </TagList>
            <ButtonWrapper ><button onClick={addTag}>新建标签</button></ButtonWrapper>
        </Layout>
    )
}
