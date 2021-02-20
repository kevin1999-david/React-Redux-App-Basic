//Here are data
import { createStore } from "redux";

const initialState = {
    players: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
        }
    ],
    holders: [],
    alternates: [],
    auxiliary: [ {
        id: 111,
        nombre: "Leo Messi",
        foto: "https://assets.soyfutbol.com/__export/1598364564707/sites/debate/img/2020/08/25/messi_crop1598364538248.jpg_943222218.jpg"
    },
    {
        id: 211,
        nombre: "Alexander Lloris",
        foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    },]
}

const reducerCoach = (state = initialState, action) => {
    console.log(action.type);
    if (action.type === 'ADD_HOLDER') {
        return {
            ...state,
            holders: state.holders.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    } else if (action.type === 'DELETE_HOLDER') {
        return {
            ...state,
            holders: state.holders.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)

        }
    } else if (action.type === 'ADD_ALTERNATE') {
        return {
            ...state,
            alternates: state.alternates.concat(action.player),
            players: state.players.filter(p => p.id !== action.player.id)
        }
    }
    else if (action.type === 'DELETE_ALTERNATE') {
        return {
            ...state,
            alternates: state.alternates.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }
    return state;
}


export default createStore(reducerCoach)