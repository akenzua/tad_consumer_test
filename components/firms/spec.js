import moxios from "moxios";

import Firms from "./index";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../Utils/test";

import { testStore } from "../../redux/testStore";
import {
  getFirms,
  filterAge,
  filterInsuranceType,
  filterTripLength,
  filterTreatmentStage,
} from "./actions";
import {
  GET_FIRMS_SUCCESS,
  FILTER_AGE,
  FILTER_INSURANCE_TYPE,
  FILTER_TRIP_LENGTH,
  FILTER_TREATMENT_STAGE,
} from "./constant";
import firmsReducer from "./reducer";

describe("Firms Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("GetFirms Action", () => {
    const expectedState = [
      {
        company: "Daystar Inc",
        freePhone: true,
        online: [
          {
            website: "daystar.com",
            quote: true,
            liveChat: true,
            email: "info@daystar.com",
            phone: "+44 1632 960284",
          },
        ],
        opening: [
          {
            weekDays: "Mon - Fri 8:30 am to 8:00 pm",
            saturdays: "8:30am to 6:00 pm",
            sundays: "0:00 am 1to 4:00pm",
          },
        ],
        keyInfo: [
          {
            feature: "",
          },
        ],
        filters: {
          age: ["Under 18 years", "Over 80 years"],
          insuranceType: ["Single Trip"],
          tripLength: ["Under 1 month", "Between 1 - 3 months"],
          treatmentStage: [
            "I am on a waiting list at home for treatment or surgery",
            "I am awating test results",
          ],
        },
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getFirms()).then(() => {
      const newState = store.getState();
      expect(newState.firms.firms).toBe(expectedState);
    });
  });

  test("Filter Age", () => {
    const text = "Under 18 years";
    const expectedAction = {
      type: FILTER_AGE,
      payload: text,
    };
    expect(filterAge(text)).toEqual(expectedAction);
  });

  test("Filter Insurance Type", () => {
    const text = "Single Trip";
    const expectedAction = {
      type: FILTER_INSURANCE_TYPE,
      payload: text,
    };
    expect(filterInsuranceType(text)).toEqual(expectedAction);
  });

  test("Filter Trip Length", () => {
    const text = "Between 3 - 6 months";
    const expectedAction = {
      type: FILTER_TRIP_LENGTH,
      payload: text,
    };
    expect(filterTripLength(text)).toEqual(expectedAction);
  });

  test("Filter Treat Stage", () => {
    const text = "I am awaiting test result";
    const expectedAction = {
      type: FILTER_TREATMENT_STAGE,
      payload: text,
    };
    expect(filterTreatmentStage(text)).toEqual(expectedAction);
  });
});

describe("Firm Reducers", () => {
  it("should return the initial state", () => {
    const newState = firmsReducer(undefined, {});
    expect(newState.firms).toEqual([]);
  });

  it("should return new state if it recieves type", () => {
    const firms = [
      {
        company: "Daystar Inc",
        freePhone: true,
        online: [
          {
            website: "daystar.com",
            quote: true,
            liveChat: true,
            email: "info@daystar.com",
            phone: "+44 1632 960284",
          },
        ],
        opening: [
          {
            weekDays: "Mon - Fri 8:30 am to 8:00 pm",
            saturdays: "8:30am to 6:00 pm",
            sundays: "0:00 am 1to 4:00pm",
          },
        ],
        keyInfo: [
          {
            feature: "",
          },
        ],
        filters: {
          age: ["Under 18 years", "Over 80 years"],
          insuranceType: ["Single Trip"],
          tripLength: ["Under 1 month", "Between 1 - 3 months"],
          treatmentStage: [
            "I am on a waiting list at home for treatment or surgery",
            "I am awating test results",
          ],
        },
      },
    ];
    const newState = firmsReducer(undefined, {
      type: GET_FIRMS_SUCCESS,
      payload: firms,
    });
    expect(newState.firms).toEqual(firms);
  });
});
