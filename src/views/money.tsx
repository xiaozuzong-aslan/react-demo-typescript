import React,{useState} from 'react'
import Layout from 'components/Layout'

import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import CategorySection from './Money/Category';
import NumberPadSection from './Money/NumberPadSection';


type Category = '-' | '+'

const Tags:React.FC = () =>{
    const [selected,setSelected] = useState({
        tags:[] as number[],
        note:'',
        category:'-' as Category,
        amount:'0'
    })
    
    const onChange = (obj:Partial<typeof selected>) =>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <Layout>
           
           <TagsSection value={selected.tags} onChange={tags=>onChange({tags})}/>
           <NotesSection value={selected.note} onChange={note=>onChange({note})}/>
           <CategorySection value={selected.category} onChange={category=>onChange({category})} />
           <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} />
        </Layout>
    )
}

export default Tags