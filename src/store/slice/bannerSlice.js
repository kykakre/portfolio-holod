import { createSlice } from "@reduxjs/toolkit";
import oleg from "../../assets/oleg.png";
import tg from "../../assets/tg.svg"
import ws from "../../assets/whatsApp.svg"
import mail from "../../assets/mail.svg"
const initialState = {
    banner: {
        img:oleg,
        title:"HOLOD DESIGN",
        subtitle:"веб-дизайн · социальные сети · маркетплейсы · полиграфия · наружная реклама",
        text:"Опыт работы в сфере графического дизайна более 3-х лет\n" +
            "Главными приоритами для меня являются качество достигнутого результата и высокая скорость выполнения работы",
        social:[
            {
                icon:tg,
                text:"@holod_soul",
                link:"https://t.me/holod_soul"
            },
            {
                icon:ws,
                text:"+7-937-262-27-37",
                link:"https://wa.me/79372622737"
            },
            {
                icon:mail,
                text:"holodsoul.1@gmail.com",
                link:"holodsoul.1@gmail.com",
            },

        ],

    },
    isLoading: false,
    error: "",
};

export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        fetchBanner(state){
            state.isLoading = true
        },
        successFetchBanner(state,action){
            state.banner = action.payload
            state.isLoading = false
        }
    },
});





export default bannerSlice.reducer;