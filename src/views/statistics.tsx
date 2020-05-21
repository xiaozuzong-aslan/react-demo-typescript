import React,{useState} from 'react'
import Layout from 'components/Layout'
import useRecords from 'hooks/useRecords'
import CategorySection from 'views/Money/Category'
import styled from 'styled-components'
import useTags from 'hooks/useTag'
import jsday from 'dayjs'

const StatisticsWrapper = styled.div`
  background:rgba(242,242,242);
  flex-grow:1;
  .statisNav{
    background:white;
    font-size:24px;
  }
  .items{
    h3{
      padding:5px 16px;
      font-size:16px;
      display:flex;
      justify-content:space-between;
      
    }
  }
`;
const Item = styled.div`
  display:flex;
  justify-content:space-between;
  font-size:18px;
  line-height:20px;
  padding:8px 16px;
  background:white;
  .note{
    margin-right:auto;
    margin-left:16px;
    color:#999;
  }
`;



export default function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-')
  const {records}  = useRecords()
  const {findTag} = useTags()
  const selecteRecords = records.filter(item=>item.category === category)
  const hash:{[propName:string]:typeof records} = {} 
  const sortKeys = Array.from(new Set(selecteRecords.map(r=>{//改变hash为{时间:[data]}  返回值为排序好的[时间索引titel] 
    const title = jsday(r.createAt).format('YYYY-MM-DD')
    hash[title]?hash[title].push(r):hash[title] = [r]
    return title
  }))).sort((a,b)=>{
    if(a > b){
      return -1
    }else if(a < b){
      return 1
    }else{
      return 0
    }
  })
  
  const beautyTime = (date:string) =>{
    const nowTime = jsday()
    const time = jsday(date)
    if(time.isSame(nowTime,'day')){
      return '今天'
    }else if(time.isSame(nowTime.subtract(1,'day'),'day')){
      return '昨天'
    }else if(time.isSame(nowTime.subtract(2,'day'),'day')){
      return '前天'
    }else{
      return jsday(date).format('MM-DD')
    }
  }
  return (
      <Layout>
          <StatisticsWrapper>
            <CategorySection className='statisNav' value={category} onChange={category=>setCategory(category)}/>
            { records  && sortKeys.map(title=>{
              return (
                <div key={title} className='items'>
              
                  <h3>
                  <span>{beautyTime(title)}</span>
                  <span>总计:{hash[title].reduce((base,item)=>base+parseFloat(item.amount),0)}元</span>
                  
                  </h3>
                  { hash[title].map(item=>{
                    return (
                    <Item key={item.createAt}>
                        <div>{findTag(item.tagId[0]).name} </div>
                        {item.note && <div className='note'>{item.note}</div> }
                        <div>￥{item.amount}</div>
                    </Item>
                  )
                })}
                </div>
              )
            })}
          </StatisticsWrapper>
      </Layout>   
  )
}