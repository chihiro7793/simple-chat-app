import './Message-Controller.css';
import React from 'react';

const MessageController = React.forwardRef(
    ({ className,
        clickDelete,
        clickStar,
        isStarred
    }, ref) => {
        return (
            <div className={className} ref={ref}>
                <div onClick={clickDelete}>Delete message</div>
                <div onClick={clickStar}>{isStarred ? 'Unstar message' : 'Star message'}</div>
            </div >
        )
    });


export default MessageController;
