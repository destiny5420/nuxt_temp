
export const getters = {
    backerMoney: state => state.backer.money,
    backerPeople: state => state.backer.people,
    windowWidth: state => state.windowInfo.width,
    isWindowOnLoad: state => state.windowInfo.isOnLoad,
    isLoadingFinish: state => state.windowInfo.isLoadingFisish
}
