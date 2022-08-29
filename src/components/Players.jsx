import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import defaultImage from '../assets/resources/default_photo.png';

/* Styles */
const SectionPlayers = styled.section`
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 6px;
`;

const DivPlayers = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #fffafb;
        border-radius: 6px;
        box-shadow: inset 0 0 3px grey;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #339989;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #7de2d1;
    }

    div {
        margin-left: auto;
        margin-right: auto;

        p {
            margin: 0;
            font-size: 24px;
        }
    }
`;

const ArticlePlayer = styled.article`
    flex: 0 0 auto;
    flex-direction: column;
    width: auto;
    max-width: 100%;
    height: 100px;
    margin: 4px;
    padding: 8px;
    display: flex;
    align-items: center;

    img {
        width: 48px;
        height: 48px;
        margin-bottom: 5px;
        object-fit: cover;
        border-radius: 100%;
    }
`;

/* Main */
const Players = ({ players, addHeadline, addAlternate }) => {
    return (
        <SectionPlayers className="container" style={{background: "#2b2c28"}}>
            <h2 className="d-flex justify-content-center">Players</h2>
            <DivPlayers>
                {players.length > 0 ?
                    players.map(p => (
                        <ArticlePlayer key={p.id}>
                            <img src={((p.photo) ? p.photo : defaultImage)} alt={p.name} />
                            <h3>{p.name}</h3>
                            <div>
                                <button onClick={() => addHeadline(p)}>Headline</button>
                                <button onClick={() => addAlternate(p)}>Alternate</button>
                            </div>
                        </ArticlePlayer>
                    ))
                :
                    <div>
                        <p>No players available.</p>
                    </div>
                }
            </DivPlayers>
        </SectionPlayers>
    )
};

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({
    addHeadline(player) {
        dispatch({
            type: "ADD_HEADLINE",
            player
        })
    },
    addAlternate(player) {
        dispatch({
            type: "ADD_ALTERNATE",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
