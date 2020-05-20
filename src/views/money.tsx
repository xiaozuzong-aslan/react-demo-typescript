import React,{useState} from 'react'
import Layout from 'components/Layout'
import useRecords from 'hooks/useRecords'
import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import CategorySection from './Money/Category';
import NumberPadSection from './Money/NumberPadSection';

const defalutFromData = {
    tags:[] as number[],
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
    const {records,addRecords} = useRecords()
   console.log(records)
    const submit = ()=>{
        addRecords(selected)
        alert('保存成功')
        setSelected(defalutFromData)
    }
    return (
        <Layout>
           {JSON.stringify(selected)}
           <TagsSection value={selected.tags} onChange={tags=>onChange({tags})}/>
           <NotesSection value={selected.note} onChange={note=>onChange({note})}/>
           <CategorySection value={selected.category} onChange={category=>onChange({category})} />
           <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOK={submit} />
        </Layout>
    )
}

export default Tags