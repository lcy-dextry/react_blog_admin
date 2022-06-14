import React, { memo } from 'react'
import { PicCardWrapper } from './style'

const PicCard = memo((props) => {
    const { info={} } = props;

    return (
        <PicCardWrapper>
            <img src={info.url} alt='cover'/>
            <div className='type'>{info.type}</div>
            {info.type?<div className='line'></div>:null}
            <div className='desc'>{info.desc}</div>
        </PicCardWrapper>
    )
})

export default PicCard