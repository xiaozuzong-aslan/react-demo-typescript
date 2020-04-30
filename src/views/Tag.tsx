import React from 'react'
import useTags from './useTag'
import {useParams} from 'react-router-dom'

type Params = {
    id:string
}

export default function TgaEdit() {
    const {findTag} = useTags()
   
    const id = useParams<Params>().id
    const currentTag = findTag(parseInt(id))
    
   
    return (
        <div>
            {currentTag.name}
        </div>
    )
}
