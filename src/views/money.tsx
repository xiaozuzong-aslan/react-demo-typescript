import React,{useState} from 'react'
import Layout from 'components/Layout'
import useRecords from 'hooks/useRecords'
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import CategorySection from './Money/Category';
import NumberPadSection from './Money/NumberPadSection';
import styled from 'styled-components'

const CategoryWrapper = styled.div`
    font-size:24px;
    background:#c4c4c4;
`;


const defalutFromData = {
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:'0'
}


type Category = '-' | '+'

const Tags:React.FC = () =>{
    const [selected,setSelected] = useState(defalutFromData)
    
    const onChange = (obj:Partial<typeof selected>) =>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    const {addRecords} = useRecords()
 
    const submit = ()=>{
        addRecords(selected)
        setSelected(defalutFromData)
        
    }
    return (
        <Layout>
           <TagsSection value={selected.tags} onChange={tags=>onChange({tags})}/>
           <NotesSection value={selected.note} onChange={note=>onChange({note})}/>
           <CategoryWrapper>
               <CategorySection  value={selected.category} onChange={category=>onChange({category})} />
           </CategoryWrapper>
           
           <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOK={submit} />
        </Layout>
    )
}

export default Tags