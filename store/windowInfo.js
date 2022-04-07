export const state = () => ({
    width: 0,
    isOnLoad: false,
    isLoadingFisish: false
})

export const mutations = {
    UPDATE_WIDTH: state => state.width = window.innerWidth,

    WINDOW_IS_ONLOAD: state => state.isOnLoad = true,
    LOADING_IS_FINISH: state => state.isLoadingFisish = true
}
