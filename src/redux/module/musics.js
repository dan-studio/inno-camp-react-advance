import {createSlice} from '@reduxjs/toolkit'

const initialState = {
list:[
    {
    id:1,
    artist: "Travis Scott",
    title: "SICKO MODE",
    coverUrl: "https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj",
    like: false,
    comment:[
        {
        id:1,
        userName: "Sparta",
        content: "리덕스!",
        commentLike: false
    },
    {
        id:2,
        userName: "Sparta",
        content: "리덕스!",
        commentLike: false
    }
    ]
    }
]
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addMusic: (state = initialState, action={}) => {
        const new_music_list = [...state.list, action.payload]
        return {...state, list: new_music_list}
        },

        deleteMusic: (state = initialState, action={}) => {
            return {
            ...state,
            list : state.list.filter((music) => music.id !== action.payload),
            }
        },     
    }
})

export const { addMusic, deleteMusic } =counterSlice.actions
export default counterSlice.reducer