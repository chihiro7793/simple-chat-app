import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Chat-Nav.css';

function ChatNav() {
    return (
        <div className="title-bar">
            <div>
                <FontAwesomeIcon className='fontawesome-icon' icon={faBars} />
            </div>
            <div>
                <h3>Fancy Messenger</h3>
            </div>
            <div>
                <FontAwesomeIcon className='fontawesome-icon' icon={faSearch} />
            </div>

        </div>
    );
}

export default ChatNav;