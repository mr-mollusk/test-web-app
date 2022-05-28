import API from "../../api";

const initialState = [
    {
        id: 1,
        name: "Иванов Семён",
        email: "ivanov@mail.com",
        address: { city: "Санкт-Петербург" },
        phone: "+7 (821) 311-21-32",
    },
];
const actionTypes = {
    SET_INFO: "SET-INFO",
};
const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INFO: {
            return {
                ...action.info,
                address: { ...action.address },
            };
        }

        default: {
            return state;
        }
    }
};

export const setInfoAC = (info) => ({
    type: actionTypes.SET_INFO,
    info: info,
});

export const getAllUsers = () => (dispatch) => {
    API.info.getInfo().then((response) => dispatch(setInfoAC(response.data)));
};

export default infoReducer;
