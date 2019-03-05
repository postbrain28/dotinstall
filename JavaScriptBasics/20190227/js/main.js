'use strict';

console.log();

console.log(parseInt('5', 10) + 3);

const score = 70;

if (score >= 80) {
    console.log("Good");
} else if (score >= 60) {
    console.log("soso");
} else {
    console.log("Bad");
}

// 条件式 ? true : false;
score >= 80 ? console.log("Good") : console.log("Bad");

//イコールイコールばかりが並ぶ時switch使う
const signal = 'red';

switch (signal) {
    case 'red':
        console.log('stop');
        break;
    case 'blue':
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('caution');
        break;
    default:
    console.log('wrong signal');
    break;
}

const name = 'リョウ';

for (let i = 1; i <= 10; i++) {
    console.log(`${i} hello`)
}

// 関数
function showAd(message = 'Ad') { //仮引数
    console.log('-------');
    console.log(`-- ${message} ---`);
    console.log('-------');
}

showAd('header Ad'); //実引数
showAd();
showAd('footer Ad');

const sum = function(a, b, c) { //仮引数
    // console.log(a + b + c);
    return a + b + c;
};

const sum2 = (a, b, c) => a + b + c;
const total = sum2(1, 2, 3) + sum2(3, 4, 5); //実引数
console.log(total);

const double = a => a * 2;
console.log(double(12));

//オブジェクト

const player = {
    name: 'taguchi',
    score: 32,
};

console.log(player.name);
console.log(player['name']);

player.score = 100;
player['score'] = 100;
player.email = 'aaa@gmail.com';
delete player.score;
console.log(player);

// クラス
class Player { //親クラス
    //オブジェクトを作るときの初期化処理の関数
    constructor(name, score) { //メソッド：クラス内で定義する関数のこと
        this.name = name; //thisという特殊なキーワード　右辺のnameは初期化処理で渡ってきたもの
        this.score = score;
    }
    showInfo(){
        console.log(`name: ${this.name}, score: ${this.score}`);
    }

    // インスタンス化することなく呼ぶstatic
    static showVersion() {
        console.log('Player class ver. 1.0');
    }
 }

 // クラスの継承
 class SoccerPlayer extends Player { //子クラス
    constructor(name, score, number){
        super(name, score);
        this.number = number;
    }
    kick() {
        console.log('Goooooaaal');
    }
 }

//クラスからつくるオブジェクトをインスタンスという
const taguchi = new Player('taguchi', 32);
const fkouji = new Player('fkouji',44);

const tsubasa = new SoccerPlayer('tsubasa', 99, 10);
tsubasa.kick();
console.log(tsubasa.number);
tsubasa.showInfo();

 console.log(taguchi.name);
 taguchi.showInfo();
 fkouji.showInfo();

 const a = [1, 2, 5, 10];
 a.splice(2, 0, 6, 7);//(変化はじめる箇所(10を動かしたい), 削除したい箇所, 追加する要素, 追加する要素)
 a.splice(1, 2);//(変化はじめる箇所, 削除する数

 a.unshift(12);
 a.push(100,200);
 a.shift();
 a.pop();

 console.log(a);

 a.forEach((hode, piyo) => {
    console.log(`${hode}:${piyo}`);
 });

//  const b = [];
//  a.forEach((item) => {
//     b.push(item * 2);
//     });
//     console.log(b);
const b = a.map(item => item * 2);
    console.log(b);

const c = a.filter(item => item %2 === 0);
console.log(c);

const o = {
    a: 1,
    b: 2,
}

console.log(Object.keys(o));
console.log(Object.values(o));
console.log(Object.entries(o));

Object.keys(o).forEach(key =>{
    console.log(`${key}: ${o[key]}`)
});

const e = [10, 20];
const d = [1, 2, ...e];
console.log(d);

const v = 5;
// console.log(v.toUpperCase());
// console.log("Finish!");

//エラーがおきそうな箇所

try {
    console.log(v.toUpperCase());
} catch (e) {
    console.log(e.message);
}

// document.body.textContent = "hello";
document.title = "Changed";

document.getElementById('target').textContent = "cganged";

// document.querySelectorAll('li').forEach(li => {
//     li.textContent = 'li!';
// })

const ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.children);
console.log(ul.children[0]);

for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i].textContent);
}

const h1 = document.querySelector('h1');

console.log(h1.dataset.appId);
h1.dataset.message = "thisis";