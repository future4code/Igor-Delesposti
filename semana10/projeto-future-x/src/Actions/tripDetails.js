import axios from 'axios'

export const setAllTrips = (trips) => {
    return {
        type: 'SET_ALL_TRIPS',
        payload: {
            trips
        }
    }
}

//ACTION ASYNC

export const getTrips = () => async (dispatch, getState) => {
    const response = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips'
        )
        dispatch(setAllTrips(response.data.trips))
        console.log(response.data.trips)
};

export const applyToTrip = (id, form) => async (dispatch, getState) =>{
    
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips/${id}/apply`,form
    )
    dispatch(getTrips())
    console.log("Foi caralho!")
};
