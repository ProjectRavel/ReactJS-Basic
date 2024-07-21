    import {configureStore, createSlice} from '@reduxjs/toolkit'

    const HitunganSlice = createSlice({
        name: 'counter',
        initialState: {
            nilai: 0
        },
        reducers: {
            pengurangan: state => {
                state.nilai -= 1
            },
            penambahan: state => {
                state.nilai += 1
            }
        }
    })

    const store = configureStore({
        reducer: {
            counter: HitunganSlice.reducer
        }
    })

    console.log("BEFORE STORE: ", store.getState())

    store.subscribe(() => {
        console.log("STORED: ", store.getState())
    })

    store.dispatch(HitunganSlice.actions.penambahan())
    store.dispatch(HitunganSlice.actions.pengurangan())
    store.dispatch(HitunganSlice.actions.pengurangan())
    store.dispatch(HitunganSlice.actions.pengurangan())
    store.dispatch(HitunganSlice.actions.pengurangan())
