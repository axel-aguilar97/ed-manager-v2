import styled from 'styled-components';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

/* Styles */
const ButtonAddPlayer = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: none;
    border-radius: 6px;
`;

/* Main */
const AddPlayer = () => {
    return (
        <>
            <OverlayTrigger key={"top"} placement={"top"} overlay={<Tooltip id={"tooltip-top"}>Add Player</Tooltip>}>
                <ButtonAddPlayer><i className="bi bi-plus"></i></ButtonAddPlayer>
            </OverlayTrigger>
        </>
    );
}

export default AddPlayer;
