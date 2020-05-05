import axios from "axios";
import {
  GET_FIRMS_SUCCESS,
  GET_OFFERINGS_SUCCESS,
  GET_FIRMS_STARTED,
  FILTER_AGE,
  FILTER_INSURANCE_TYPE,
  FILTER_TRIP_LENGTH,
  FILTER_TREATMENT_STAGE,
  FILTER,
  FILTER_OFFERING,
} from "./constant";
import { initializeStore } from "../../redux/store";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("YWD7NXKVQE", "14fb2932f71955e1d537fda41b8a8926");
const index = client.initIndex("dev_TAD");

export const getAlgoFirms = () => {
  return (dispatch) =>
    index.search("").then((res) => {
      dispatch(getFirmsSuccess(res));
      console.log(res.hits);
    });
};

export const getFirms = () => {
  return (dispatch) =>
    axios
      .get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
      .then((res) => {
        dispatch(getFirmsSuccess(res.data));
      });
};

export const getOfferings = () => {
  return (dispatch) =>
    axios
      .get(`https://my-json-server.typicode.com/akenzua/offferings/offerings`)
      .then((res) => {
        dispatch(getOfferingSuccess(res.data));
      });
};

export const getFirmsed = (filters) => {
  return (dispatch) =>
    axios
      .get(`https://my-json-server.typicode.com/akenzua/tad-data/data`)
      .then((res) => {
        dispatch(getFirmsSuccess(res.data));
      })
      .then(() => dispatch(filtered(filters)));
};

export const getFirmsSuccess = (firms) => ({
  type: GET_FIRMS_SUCCESS,
  payload: firms,
});

export const getOfferingSuccess = (offerings) => ({
  type: GET_OFFERINGS_SUCCESS,
  payload: offerings,
});

export const getFirmsStarted = () => ({
  type: GET_FIRMS_STARTED,
});

export const filtered = (filters) => ({
  type: FILTER,
  payload: filters.filter((value) => Object.keys(value).length != 0),
});

export const filterOfferings = (pool) => {
  return (dispatch, getState) => {
    dispatch(getFirms()).then(() => dispatch(getOfferings()));
    const offerings = getState().firms.offerings;
    const filteredPool = pool.filter((value) => Object.keys(value).length != 0);

    const selectedOfferings = filteredPool.reduce((acc, value) => {
      return acc.filter((offering) =>
        offering[Object.keys(value)].includes(Object.values(value)[0])
      );
    }, offerings);

    dispatch({
      type: FILTER_OFFERING,
      payload: selectedOfferings,
    });
  };
};

export const filterAge = (age) => ({
  type: FILTER_AGE,
  payload: age,
});

export const filterInsuranceType = (insuranceType) => ({
  type: FILTER_INSURANCE_TYPE,
  payload: insuranceType,
});

export const filterTripLength = (tripLength) => ({
  type: FILTER_TRIP_LENGTH,
  payload: tripLength,
});

export const filterTreatmentStage = (treatmentStage) => ({
  type: FILTER_TREATMENT_STAGE,
  payload: treatmentStage,
});
