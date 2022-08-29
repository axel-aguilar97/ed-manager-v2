import styled from 'styled-components';

import Headlines from './Team/Headlines';
import Alternates from './Team/Alternates';

/* Styles */
const DivTeam = styled.div`
    
`;

/* Main */
const Team = () => {
    return (
        <DivTeam className="container">
            <Headlines />
            <Alternates />
        </DivTeam>
    )
}

export default Team;
