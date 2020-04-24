import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

export const setAllTrips = (trips) => {
    return {
        type: 'SET_ALL_TRIPS',
        payload: {
            trips
        }
    }
}

export const getTripInfo = (trips) => {
    return{
        type: 'GET_TRIP_INFO',
        payload: {
            trips
        }
    }
}

export const getTripId = (id) => {
    return {
        type: 'GET_TRIP_ID',
        payload: {
            id,
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

export const applyToTrip = (id, form) => async (dispatch, getState) => {

    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips/${id}/apply`, form
    )
    dispatch(getTrips())
    console.log("Processo realizado")
};

export const createNewTrip = (form, token) => async (dispatch, getState) => {

    try {
        const response = await axios.post(
            'https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips', form,
            {
                headers: {
                    auth: token,
                },
            }
        )

            alert("Viagem criada com sucesso.")
            dispatch(push(routes.tripsList))
    } catch (error) {
        alert("Não foi possível criar sua viagem")
        console.error(error);
    }


}

export const login = (email, password) => async (dispatch, getState) => {
    const body = {
        email: email,
        password: password
    }

    try {
        const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/login', body);

        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.tripsList))
    } catch (error) {
        alert("Usuário ou senha inválida, tente novamente");
        console.error(error);
    }
}

export const tripDetails = (id, token) => async (dispatch, getState) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trip/${id}`,
        {
            headers: {
                auth: token
            }
        }
    
    )

    dispatch(getTripInfo(response.data.trip))
    console.log(response.data.trip)
}

