import React from 'react'
import './No-Conversation.css';
import image from '../../images/background/start.jpg'

export default function NoConversation() {


    return (
        <div className='no-conversation-page'>
            <div className='image-container'>
                <img src={image} alt='application'></img>
            </div>
            <div className='paragraph_wrapper'>
                <p>This is a simple fake messenger written by Haleh</p>
                <p>Hope you enjoy! </p>

            </div>
        </div>
    )
}
