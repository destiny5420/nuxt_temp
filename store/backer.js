import { getData as getBackerData } from '~/apis/backer.js';

export const state = () => ({
    people: 0,
    money: 0
})

export const mutations = {
    UPDATE_PEOPLE: (state, people) => state.people = people,
    UPDATE_MONEY: (state, money) => state.money = money
}

export const actions = {
    syncBackerData: async ({ commit }) => {
        const { people, money } = await getBackerData()
        commit('UPDATE_PEOPLE', people)
        commit('UPDATE_MONEY',  money)
    }
}
