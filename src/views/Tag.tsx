import React from 'react'
import useTags from './useTag'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import {Input} from 'components/Input'
import {ButtonWrapper} from 'components/Button'



type Params = {
    id:string
}
const Tobar = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    line-height:20px;
    padding:14px;
    background:white;
    /* svg{
        
       
    } */
    .icon{
        border:1px solid red;
        width:24px;
        height:24px;
    }
`;

export default function TgaEdit() {
    const {findTag} = useTags()
   
    const id = useParams<Params>().id
    const currentTag = findTag(parseInt(id))
    console.log(currentTag)
   
    return (
        <Layout>
            <Tobar>
                <Icon name="left"/>
                    <span>编辑标签</span>
                <Icon />
            </Tobar>
                <div>
                   <Input type="text" label="ffff" placeholder='xxxxxx'/>
                </div>
            
            <ButtonWrapper><button>删除标签</button></ButtonWrapper>
        </Layout>
    )
}
