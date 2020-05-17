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


const MainWrapper = styled.div`
    flex-grow:1;
    background:rgba(242,242,242);
    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        line-height:20px;
        padding:14px;
        background:white;
        .icon{
            width:24px;
            height:24px;
        }
    }
    .inputWrapper{
        background:white;
        padding: 0 14px;
        margin-top:8px;
    }
`;

export default function TgaEdit() {
    const {findTag} = useTags()
   
    const id = useParams<Params>().id
    const currentTag = findTag(parseInt(id))
    console.log(currentTag)

    return (
        <Layout>
            <MainWrapper>
                <header>
                    <Icon name="left"/>
                        <span>编辑标签</span>
                    <Icon />
                </header>
                <div className="inputWrapper">
                    <Input type="text"  label='标签名' placeholder='标签名' value={currentTag.name} onChange={(e)=>{
                        console.log(e)
                    }}/>
                </div>
                <ButtonWrapper><button>删除标签</button></ButtonWrapper>
            </MainWrapper>
           
        </Layout>
    )
}
