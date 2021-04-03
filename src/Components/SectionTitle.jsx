import React from 'react'

const SectionTitle = ({title}) => {
    return (
        <div className="underlined-title">
            <div className="editContent">
                <h1 className="text-center latestitems">{title}</h1>
            </div>
            <div className="wow-hr type_short">
                <span className="wow-hr-h">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </span>
            </div>
        </div>
    )
}

export default SectionTitle
