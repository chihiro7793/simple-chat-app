import React from 'react'
import avatar from "../../images/profiles/avatar.png";
import './Conversation-List.css'

export default function ConversationList(props) {
    return (
        <div className='conversation-list' >
            <div className='conversation'>
                <div className='conversation-avatar'>
                    <img src={avatar} alt='profile' />
                </div>
                <div className='title-text'>Morteza</div>
                <div className='conversation-message'>Hello</div>
                <div className='conversation-time'>Thursday</div>
                <div className='conversation-info'><div>10</div></div>
            </div>
            <div className='conversation'>
                <div className='conversation-avatar'>
                    <img src={avatar} alt='profile' />
                </div>
                <div className='title-text'>Ghazaleh</div>
                <div className='conversation-message'>Hello</div>
                <div className='conversation-time'>Thursday</div>
                <div className='conversation-info'><div>10</div></div>
            </div>
            <div className='conversation'>
                <div className='conversation-avatar'>
                    <img src={avatar} alt='profile' />
                </div>
                <div className='title-text'>Mom</div>
                <div className='conversation-message'>Hello</div>
                <div className='conversation-time'>Thursday</div>
                <div className='conversation-info'><div>10</div></div>
            </div>
            <div className='conversation'>
                <div className='conversation-avatar'>
                    <img src={avatar} alt='profile' />
                </div>
                <div className='title-text'>Dad</div>
                <div className='conversation-message'>Hello</div>
                <div className='conversation-time'>Thursday</div>
                <div className='conversation-info'><div>10</div></div>
            </div>
            <div className='conversation'>
                <div className='conversation-avatar'>
                    <img src={avatar} alt='profile' />
                </div>
                <div className='title-text'>Mohammad Mahdi</div>
                <div className='conversation-message'>Hello</div>
                <div className='conversation-time'>Thursday</div>
                <div className='conversation-info'><div>10</div></div>
            </div>



        </div>
    )
}
