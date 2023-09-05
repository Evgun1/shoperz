import { createSlice } from '@reduxjs/toolkit';

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState: {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    },
    reducers: {
        init(state, action) {
            const windowWidth = window.innerWidth;
            switch (true) {
                case windowWidth < 768:
                    state.isMobile = true;
                    break;
                case windowWidth >= 768 && windowWidth < 992:
                    state.isTablet = true;
                    break;
                case windowWidth >= 992:
                    state.isDesktop = true;
                    break;
            }
        },
        update(state, action) {
            const windowWidth = window.innerWidth;
            switch (true) {
                case windowWidth < 768:
                    state.isMobile = true;
                    state.isTablet = false;
                    state.isDesktop = false;
                    break;
                case windowWidth >= 768 && windowWidth < 992:
                    state.isMobile = false;
                    state.isTablet = true;
                    state.isDesktop = false;
                    break;
                case windowWidth >= 992:
                    state.isMobile = false;
                    state.isTablet = false;
                    state.isDesktop = true;
                    break;
            }
        },
    },
});

export const responsiveActions = responsiveSlice.actions;
export const responsiveReducer = responsiveSlice.reducer;
