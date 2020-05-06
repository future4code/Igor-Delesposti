const initialState = {
    trips: null,
    tripDetails: [],
    tripId: ""
}

const trips = (state = initialState, action) =>{
    switch(action.type){
        case "SET_ALL_TRIPS":{
            return{...state, trips: action.payload.trips}
        }
        case "GET_TRIP_INFO":{
            return{...state, tripDetails: action.payload.trips }
        }
        case "GET_TRIP_ID":{
            return { ...state, tripId: action.payload.id}
        }
        default: 
        return state
    }
    
}

export default trips