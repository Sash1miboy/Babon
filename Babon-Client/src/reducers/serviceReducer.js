export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    title: "",
    category: "",
    coverImage: "",
    images: [],
    desc: "",
    shortTitle: "",
    shortDesc: "",
    features: [],
    price: 0,
};

export const serviceReducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "ADD_IMAGES":
            return{
                ...state,
                coverImage: action.payload.coverImage,
                images: action.payload.images,
            };
        case "ADD_FEATURE":
            return{
                ...state,
                features: [...state.features, action.payload]
            };
        case "REMOVE_FEATURE":
            return{
                ...state,
                features: state.features.filter((features) => features !== action.payload),
            };
        default:
            return state;
    }
}