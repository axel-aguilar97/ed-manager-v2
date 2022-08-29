import { createStore } from 'redux';

const initialState = {
    players: [
        {
            id: 1,
            name: "Atsul",
            photo: ""
        },
        {
            id: 2,
            name: "Karu",
            photo: ""
        },
        {
            id: 3,
            name: "Tosta",
            photo: ""
        },
        {
            id: 4,
            name: "Yamil",
            photo: ""
        },
        {
            id: 5,
            name: "Keko",
            photo: ""
        },
        {
            id: 6,
            name: "Diewo",
            photo: ""
        },
        {
            id: 7,
            name: "Natuw",
            photo: ""
        },
        {
            id: 8,
            name: "Ramuw",
            photo: ""
        },
        {
            id: 9,
            name: "Nikots",
            photo: ""
        },
        {
            id: 10,
            name: "Bacon",
            photo: ""
        },
        {
            id: 11,
            name: "Wazap",
            photo: ""
        },
        {
            id: 12,
            name: "Bruno",
            photo: ""
        },
        {
            id: 13,
            name: "Fawi",
            photo: ""
        },
        {
            id: 14,
            name: "Rocio",
            photo: ""
        },
        {
            id: 15,
            name: "Roro",
            photo: ""
        }
    ],
    headlines: [],
    alternates: []
};

const trainerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_HEADLINE": {
            if(state.headlines.length === 11) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                headlines: state.headlines.concat(action.player),
                players: state.players.filter(p => p.id !== action.player.id)
            }
        } case "ADD_ALTERNATE": {
            if(state.alternates.length === 9) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                alternates: state.alternates.concat(action.player),
                players: state.players.filter(p => p.id !== action.player.id)
            }
        } case "REMOVE_HEADLINE": {
            return {
                ...state,
                headlines: state.headlines.filter(h => h.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        } case "REMOVE_ALTERNATE": {
            return {
                ...state,
                alternates: state.alternates.filter(a => a.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        } default: {

        }
    }

    return state;
}

export default createStore(trainerReducer);
