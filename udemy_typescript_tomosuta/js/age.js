"use strict";
/**
 * Personの抽象クラスを作成
 * Personを継承したGuestとMemberクラスを作成
 * Memberクラスには生年月日をプロパティにする
 * Memberクラスに年齢を取得するメソッドを定義する
 * 今年の年から誕生日の年を引く
 * 誕生日の「年」を今年にして、今日の日付と比較する
 * もし誕生日が来ていない場合は、年齢から1引く
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Guest extends Person {
}
class Member extends Person {
    constructor(name, birth) {
        super(name);
        this._birth = new Date();
        this.birth = birth;
    }
    get birth() {
        return this._birth;
    }
    set birth(value) {
        this._birth = value;
    }
    getAge() {
        const now = new Date();
        let age = now.getFullYear() - this.birth.getFullYear();
        let thisBirth = new Date(now.getFullYear(), this.birth.getMonth(), this.birth.getDate());
        // 誕生日前なので、1歳引く
        if (now < thisBirth) {
            age--;
        }
        return age;
    }
}
let taro = new Guest("taro");
console.log(taro.name);
const yoshiko = new Member("Yoshiko", new Date(2000, 1, 20));
console.log(yoshiko.getAge());
