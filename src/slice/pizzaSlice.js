import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings: ["Mushroom"],
    sauce: ["bbq", "tomato"],
    gluten: true
}

const pizzaSlice = createSlice({
    name: "Pizza",
    initialState,
    reducers: {
        addToppings: (state, action) => {
            state.toppings = [...state.toppings, action.payload]
        },
        addSauce: (state, action) => {
            state.sauce = [...state.sauce, action.payload]
        },
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },
        clearToppings: (state) => {
            state.toppings = []
        },
        clearSauce: (state) => {
            state.sauce = []
        }

    }
})

// export const {addToppings, addSauce, toggleGluten} = pizzaSlice.actions

export const addToppings = pizzaSlice.actions.addToppings
export const addSauce = pizzaSlice.actions.addSauce
export const toggleGluten = pizzaSlice.actions.toggleGluten
export const clearToppings = pizzaSlice.actions.clearToppings
export const clearSauce = pizzaSlice.actions.clearSauce

export default pizzaSlice.reducer