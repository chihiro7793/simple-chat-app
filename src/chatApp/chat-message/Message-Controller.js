import React from 'react';
import './Message-Controller.css'

const MessageController = React.forwardRef(({ className, click }, ref) => {
    return (
        <div className={className} ref={ref}>
            <div onClick={click}>Delete message</div>
            <div>Star message</div>

        </div >
    )
});


export default MessageController;
