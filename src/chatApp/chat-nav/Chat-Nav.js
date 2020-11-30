import { faBars, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { searchKeyword } from '../../actions/actions';
import { connect } from 'react-redux';
import './Chat-Nav.css';

const ChatNav =
    ({
        handleConversationMenu,
        searchKeyword,
        keyword
    }) => {
        const [mode, setMode] = useState('nav');
        const searchAutoFocus = useRef(null);

        const isSearchMode = (mode === 'search');
        useEffect(() => {
            if (isSearchMode) {
                searchAutoFocus.current.focus();
            }
        }, [isSearchMode])

        function handleInputChange(e) {
            keyword = e.target.value;
            searchKeyword(keyword);
        }
        return (
            <div className='nav'>
                { mode === 'nav' &&
                    <div className='title-bar'>
                        <FontAwesomeIcon
                            icon={faBars}
                            className='fontawesome-icon'
                            onClick={handleConversationMenu}
                        />
                        <h3>Fancy Messenger</h3>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='fontawesome-icon'
                            onClick={() => setMode('search')}
                        />
                    </div>
                }

                {
                    mode === 'search' &&
                    <div className='search-bar'>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className='fontawesome-icon'
                            onClick={() => setMode('nav')}
                        />
                        <input
                            placeholder='Search...'
                            ref={searchAutoFocus}
                            value={keyword}
                            onChange={handleInputChange}
                        />
                    </div>
                }


            </div>
        );
    }

const mapStateToProps = (state) => {
    return {
        keyword: state.applicationReducer.keyword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchKeyword: (keyword) => dispatch(searchKeyword(keyword))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(ChatNav);