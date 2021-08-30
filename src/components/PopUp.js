import React from 'react'
import { PopUp1, PopUpInner, CloseButton } from './ComponentStyles/PopUp.styles';

function PopUp(props) {
/*     const hello = () => {
        console.log('hello')
    } */
    return (props.trigger) ? (
        <PopUp1>
            <PopUpInner>
                <CloseButton onClick={() => props.setTrigger(false)}>
                    close
                </CloseButton>
                { props.children }
            </PopUpInner>
        </PopUp1>
    ) : "";
}

export default PopUp
