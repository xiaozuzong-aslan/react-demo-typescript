import React, { SVGAttributes } from 'react'
import cs from 'classnames'

let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try{
    importAll(require.context('icons',true,/\.svg$/))
}catch(error){
    console.log(error)
}

type Props = {
    name?:string
} & React.SVGAttributes<SVGElement>

const Icon:React.FC<Props> = (props) => {
    const {name,children,className,...reset} = props
    return (
        <svg className={cs('icon',className)} {...reset}>
            {props.name && <use xlinkHref={`#${name}`} />}
        </svg>
    )
}
export default Icon