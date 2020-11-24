import React from 'react';
import './Message-List.css';

function MessageList() {
    return (
        <div className="chat-message-list">
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Ok then</div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu lacinia dui. Fusce pulvinar efficitur enim,
                        vel volutpat libero faucibus vitae.
                        Proin iaculis, nisl eget facilisis posuere,
                        turpis massa posuere est, vel bibendum risus est ut lorem.
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu lacinia dui.
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu lacinia dui. Fusce pulvinar efficitur enim,
                        vel volutpat libero faucibus vitae.
                    </div>
                    <div className="message-time">Apr 16</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu lacinia dui. Fusce pulvinar efficitur enim,
                        vel volutpat libero faucibus vitae.
                    </div>
                    <div className="message-time">Apr 15</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu lacinia dui.
                    </div>
                    <div className="message-time">Apr 14</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        How's it going?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey Haleh?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
        </div>
    );
}

export default MessageList;