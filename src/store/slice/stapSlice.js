import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    stap: [
        {
            id:1,
            title:"Составление брифа",
            text:"Составляем или дополняем имеющееся техническое задание, в процеесе чего я задам вопросы, ответы на которые помогут лучше погрузиться в нишу и разобраться в специфике продукта.",
        },
        {
            id:2,
            title:"Согласование сроков и способа оплаты",
            text:"Среднее время выполнения заказа - 2-3 рабочих дня. На выбор предоставляется несколько способов оплаты. Предоплата от 0 до 50%",
        },
        {
            id:3,
            title:"Утверждение макета",
            text:"Согласовываем предварительный макет, вносим по необходимости правки, стоимость которых уже включена в заказ",
        },
        {
            id:4,
            title:"Передача готовых файлов",
            text:"Передача готовых файлов может быть выполнена любым удобным для вас способом: Яндекс.Диск, Google Drive, почта, WhatsApp, Telegram",
        },
    ],
    isLoading: false,
    error: "",
};

export const stapSlice = createSlice({
    name: "stap",
    initialState,
    reducers: {
        fetchStap(state){
            state.isLoading = true
        },
        successFetchStap(state,action){
            state.stap = action.payload
            state.isLoading = false
        }
    },
});





export default stapSlice.reducer;