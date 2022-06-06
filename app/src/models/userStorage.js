'use strict';

class userStorage {
    static #users = { //#를 통해 private화 시켜준다
        id: ['qq', 'ww', 'ee'],
        password: ['1', '23', '123123'],
        name: ['aa', 'bbb', 'cccc'],
    };

    // fields is [id, password, name]
    static getUsers(...fields) { // ...을 통해 인자를 배열로 받을 수 있음
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, ele) => {
            //console.log(newUsers, ele);
            if (users.hasOwnProperty(ele)) { //hasOwnPropoerty를 통해 객채의 키값 찾기
                newUsers[ele] = users[ele]; //newUsers 배열을 새로 만들어서
            }
            return newUsers; //필요한 것들만 return 해준다
        }, {});
        return newUsers;
    };
    return;
};

module.exports = userStorage;