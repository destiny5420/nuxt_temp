import Vue from 'vue'


const divTenThousand = num => num / 10000;


const num2CommaString = num => {
    const result = '';
    num = (num || 0).toString();


    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }

    if (num) { result = num + result; }
    return result;
}


Vue.filter('divTenThousand', divTenThousand)
Vue.filter('num2CommaString', num2CommaString)
