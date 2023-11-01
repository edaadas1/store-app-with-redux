import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.list.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.list = state.list.filter(item => item?.id !== action.payload)
        },
    },

})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer