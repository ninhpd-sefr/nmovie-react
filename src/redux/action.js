import { Await } from "react-router"
import { getFirmCountry, getFirmGenres, getFirmListDetails, getFirmSeries } from "../services/GetFirm"

export const ACTION_GET_SERIES_FIRM = 'ACTION_GET_SERIES_FIRM'
export const ACTION_GET_SINGLE_FIRM = 'ACTION_GET_SINGLE_FIRM'
export const ACTION_GET_GENRES_FIRM = 'ACTION_GET_GENRES_FIRM'
export const ACTION_GET_COUNTRY_FIRM = 'ACTION_GET_COUNTRY_FIRM'
export const ACTION_GET_LIST_FIRM_DETAILS = 'ACTION_GET_LIST_FIRM_DETAILS'



export const actionGetFirmSeries = ({
  data
}) => {
  
  return {
    type: ACTION_GET_SERIES_FIRM,
    payload:data
  }
}

export const actionGetFirmSingle = ({
  data
}) => {
  
  return {
    type: ACTION_GET_SINGLE_FIRM,
    payload:data
  }
}


export const actionGetFirmGenres = ({
  data
}) => {
  
  return {
    type: ACTION_GET_GENRES_FIRM,
    payload:data
  }
}

export const actionGetFirmCountry = ({
  data
}) => {
  
  return {
    type: ACTION_GET_COUNTRY_FIRM,
    payload:data
  }
}

export const actionGetFirmListDetails = ({
  data
}) => {
  
  return {
    type: ACTION_GET_LIST_FIRM_DETAILS,
    payload:data
  }
}

//action async

export function actionGetFirmSeriesAsync() {
  return async dispatch => {
    try {
      const dataApi = await getFirmSeries('phim-bo')
      const data = dataApi.pageProps.data      
      dispatch(actionGetFirmSeries({
        data
      }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actionGetFirmSingleAsync() {
  return async dispatch => {
    try {
      const dataApi = await getFirmSeries('phim-le')
      const data = dataApi.pageProps.data      
      dispatch(actionGetFirmSingle({
        data
      }))
    } catch (err) {
      // TODO 
    }
  }
}


export function actionGetFirmGenresAsync(genres) {
  return async dispatch => {
    try {
      const dataApi = await getFirmGenres(genres)
      const data = dataApi.pageProps.data      
      dispatch(actionGetFirmGenres({
        data
      }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actionGetFirmCountryAsync(country) {
  return async dispatch => {
    try {
      const dataApi = await getFirmCountry(country)
      const data = dataApi.pageProps.data            
      dispatch(actionGetFirmCountry({
        data
      }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actionGetFirmListDetailsAsync(type,details) {
  return async dispatch => {
    try {
      const dataApi = await getFirmListDetails(type,details)
      const data = dataApi.pageProps.data            
      dispatch(actionGetFirmListDetails({data}))
      
    } catch (err) {
      // TODO 
    }
  }
}
