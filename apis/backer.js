// const TAG = 'bookhouse2022';
// const TOKEN = '2c67b2397397f26c0e7b3a16f20e32f2';
// const PROJECT_NUM = '2186';


// const URL = `https://${TAG}.backme.tw/api/projects/${PROJECT_NUM}.json?token=${TOKEN}`


const test = () => new Promise((resolve) => setTimeout(() => resolve({
    recurring_money_per_period_by_month: 123,
    recurring_money_per_period_by_year: 456,
    normal_pledged_money_without_shipping_fee: 789,
    transaction_count: 5566
}), 3000))

export const getData = async () => {
    try {
        const data = await test()
        const money =
              parseInt((data.recurring_money_per_period_by_month       || 0) / 1 )
            + parseInt((data.recurring_money_per_period_by_year        || 0) / 12)
            + parseInt((data.normal_pledged_money_without_shipping_fee || 0) / 12)

        const people = data.transaction_count || 0

        return {
            status: 200,
            money,
            people
        }
    } catch (err) {
        console.error(new Error('BackMe API 出問題'))
        return {
            status: 501,
            money: 0,
            people: 0
        }
    }
}
