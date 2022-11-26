import { createSlice } from "@reduxjs/toolkit";
import folio from "../../assets/folio1.png"
import folio2 from "../../assets/folio2.png"
import folio3 from "../../assets/folio3.png"
import folio4 from "../../assets/folio4.png"
import bigFolio from "../../assets/bigFolio1.png"
const initialState = {
    progects: {
        miniPicture:[
            {
                id:1,
                img: folio,
                name:"Оформление Вконтакте",
            },
            {
                id:2,
                img: folio2,
                name:"Банеры",
            },
            {
                id:3,
                img: folio3,
                name:"Обложки для YouTube",
            },
            {
                id:4,
                img: folio4,
                name:"Постеры",
            },
        ],
        bigPicture:[
            {
                id:1,
                img:bigFolio,
                name:"Банеры и оформление для ресторана BLUEFIN.MOSCOW",

            },
        ],
    },
    isLoading: false,
    error: "",
};

export const progectSlice = createSlice({
    name: "progects",
    initialState,
    reducers: {
        fetchProgects(state){
            state.isLoading = true
        },
        successFetchProgects(state,action){
            state.progects = action.payload
            state.isLoading = false
        }
    },
});





export default progectSlice.reducer;