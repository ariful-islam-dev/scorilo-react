import React from 'react'

function Banner({ title, subTitle}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="text-homeimage">
                        {
                          title && <div className="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
                            {title}
					    </div>
                        }
                        <div className="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
                            {subTitle}
					    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
