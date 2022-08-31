import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import defaultImage from '../assets/resources/default_photo.png';

/* Styles */
const DivPlayers = styled.div`
    max-height: 678px;
    overflow: auto;
`;

/* Main */
const Players = ({ players, addHeadline, addAlternate }) => {
    return (
        <section className="container p-2 rounded" style={{background: "#2b2c28"}}>
            <h2 className="d-flex justify-content-center">Players</h2>
            <DivPlayers>
                {players.length > 0 ?
                    players.map(p => (
                        <article key={p.id} className="d-flex justify-content-center align-items-center">
                            <img src={((p.photo) ? p.photo : defaultImage)} alt={p.name} className="rounded-circle" style={{width: "56px", height: "56px"}} />
                            
                            <div className="ps-4 mt-3">
                                <h3 className="fs-5">{p.name}</h3>

                                <ul className="list-inline d-flex">
                                    <li className="me-3">
                                        <OverlayTrigger key={"bottom"} placement={"bottom"} overlay={<Tooltip id={"tooltip-top"}>Add player to Soccer field</Tooltip>}>
                                            <button className="border-0 rounded" style={{width: "24px", height: "24px"}} onClick={() => addHeadline(p)}>H</button>
                                        </OverlayTrigger>
                                    </li>
                                    <li className="me-3">
                                        <OverlayTrigger key={"bottom"} placement={"bottom"} overlay={<Tooltip id={"tooltip-top"}>Add player such Alternate</Tooltip>}>
                                            <button className="border-0 rounded" style={{width: "24px", height: "24px"}} onClick={() => addAlternate(p)}>A</button>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    ))
                :
                    <p className="m-0 fs-4 text-center">No players available.</p>
                }
            </DivPlayers>
        </section>
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
