import React from 'react'
import Layout from 'components/Layout'

import TagsSection from './Money/TagsSection';
import NotesSection from './Money/NotesSection';
import Category from './Money/Category';
import NumberPadSection from './Money/NumberPadSection';


const Tags:React.FC = () =>{
    return (
        <Layout>
           <TagsSection />
           <NotesSection />
           <Category />
           <NumberPadSection />
        </Layout>
    )
}

export default Tags