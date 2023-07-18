import React from 'react'

import '../../assets/common.css'

const Modal = ({ handleClick, show, childElement }) => {
    const outer = show ? "modal_ d-block" : "modal_ d-none";

    return (
        <div className={outer} onClick={handleClick}>
            <div className='modal-main_' onClick={e => e.stopPropagation()}>
                {childElement}
                {/* <button type="button" onClick={handleClick}>
                    Click
                </button> */}
            </div>
        </div>
    )
}

export default Modal