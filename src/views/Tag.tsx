import React from 'react'
import useTags from 'hooks/useTag'
import {useHistory} from 'react-router-dom'
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

const TgaEdit:React.FC = () => {
    const {findTag,updateTag,deleteTag} = useTags()
   
    const id = parseInt(useParams<Params>().id)
    const currentTag = findTag(id)
    // console.log(currentTag)
    const tagContent = (tag:typeof currentTag) =>{
        return (
            <>
                <div className="inputWrapper">
                    <Input type="text"  
                    label='标签名' 
                    placeholder='标签名' 
                    value={currentTag.name}
                    onChange={
                        (e)=>{
                            updateTag(id,e.target.value)
                        }
                    } />
                </div>
                <ButtonWrapper><button onClick={()=>{deleteTag(id)}}>删除标签</button></ButtonWrapper>
            </>
        )
    }
    const history = useHistory()
    const clickBack = () =>{
        history.goBack()
    }
    console.log(id)
    return (
        <Layout>
            <MainWrapper>
                <header>
                    <Icon name="left" onClick={clickBack}/>
                        <span>编辑标签</span>
                    <Icon />
                </header>
                    {currentTag ?  tagContent(currentTag): <span>标签已被删除</span>}
            </MainWrapper>
           
        </Layout>
    )
}

export default TgaEdit 