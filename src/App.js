import styled from 'styled-components';

import Players from './components/Players';
import Team from './components/Team';

/* Styles */
const DivScreen = styled.div`
	height: 100vh;
    color: #fffafb !important;
    background: #131515 !important;
`;

/* Main */
export default function App() {
	return (
		<DivScreen>
			<h1 className="p-3 d-flex justify-content-center">ED Manager</h1>

			<div className="container">
				<div className="row">
					<div className="col-3">
						<Players />
					</div>
					<div className="col-9">
						<Team />
					</div>
				</div>
			</div>
		</DivScreen>
	);
}
