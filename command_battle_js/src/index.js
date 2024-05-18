class Friend
{
  // コンストラクタ
  constructor(name, maxHp, offence, speed, herb, herbPower)
  {
    this.name = name;
    this.type = "friend";
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.liveFlg = true;
    this.offence = offence;
    this.speed = speed;
    this.herb = herb;
    this.herbPower = herbPower;

    this.command = "";
    this.target = "";
  }

  // 行動する
  action()
  {
    if (this.hp > 0) {
      // コマンドに応じた処理を行う
      switch (this.command) {
        // 攻撃
        case "enemyCommand":
          this.attack();
          break;

        // 回復
        case "recoveryCommand":
          this.recovery();
          break;

        default:
          Message.printMessage(this.name + "はボーッとした<br>");
      }
    }
  }

  // 攻撃する
  attack()
  {
    // 攻撃相手が生存していれば攻撃する
    if (this.target.liveFlg) {
      // 敵の体力から自分の体力を引く
      this.target.hp -= this.offence;

      // 攻撃相手の体力がマイナスになる場合は0にする
      if (this.target.hp < 0) {
        this.target.hp = 0;
      }

      Message.printMessage(this.name + "の攻撃<br>" + this.target.name + this.offence + "のダメージを与えた!<br>");
    } else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + this.target.name + "は倒れている<br>");
    }
  }

  // 回復する
  recovery()
  {
    // 薬草がない場合
    if (this.herb <= 0) {
      Message.printMessage(this.name + "は薬草を・・・<br>薬草がない！<br>");
      return;
    }

    // 体力が最大体力の場合
    if (this.maxHp === this.hp) {
      Message.printMessage(this.name + "は薬草を・・・<br>これ以上回復できない！<br>");
      return;
    }

    // 回復する値
    let heal = this.herbPower;

    // 最大体力を超えて回復してしまいそうな場合
    if (this.maxHp - this.hp < this.herbPower) {
      heal = this.maxHp - this.hp;
    }

    // 体力を回復する
    this.hp += heal;

    // 薬草を一つ減らす
    --this.herb;

    Message.printMessage(this.name + "は薬草を飲んだ<br>体力が" + heal + "回復した！<br>");
  }
}

class Enemy
{
  // コンストラクタ
  constructor(name, hp, offence, speed, path)
  {
    this.name = name;
    this.type = "enemy";
    this.hp = hp;
    this.liveFlg = true;
    this.offence = offence;
    this.speed = speed;
    this.path = path;
  }

  action()
  {
    if (this.hp > 0) {
      this.attack();
    }
  }
}

class Troll extends Enemy
{
  // コンストラクタ
  constructor(name, hp, offence, speed, path) {
    super(name, hp, offence, speed, path);
  }

  // 攻撃メソッド
  attack()
  {
    // 生存している味方をランダムに選択する
    let f = characters[searchLivedcharacterRandom("friend")];

    // 攻撃対象の体力から自分の攻撃力を引く
    f.hp -= this.offence;

    // 攻撃相手の体力がマイナスになる場合は0にする
    if (f.hp < 0) {
      f.hp = 0;
    }

    // 攻撃相手が生存していれば攻撃
    if (f.liveFlg) {
      Message.printMessage(this.name + "が襲いかかってきた<br>" + f.name + "は" + this.offence + "のダメージを受けた！<br>");
    } else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + f.name + "は倒れている<br>");
    }
  }
}

class Dragon extends Enemy
{
  // コンストラクター
  constructor(name, hp, offence, speed, path) {
    super(name, hp, offence, speed, path);
  }

  // 攻撃メソッド
  attack()
  {
    // 一定の確率で攻撃をミスする
    if (getRandomIntInclusive(0, 4) === 4) {
      Message.printMessage("ドラゴンは<br>グフッグフッと咳き込んでいる・・・<br>");
      return;
    }

    // 生存している味方をランダムに選択する
    let f = characters[searchLivedcharacterRandom("friend")];

    // 攻撃対象の体力から自分の攻撃力を引く
    f.hp -= this.offence;

    // 攻撃相手の体力がマイナスになる場合は0にする
    if (f.hp < 0) {
      f.hp = 0;
    }

    // 攻撃相手が生存していれば攻撃
    if (f.liveFlg) {
      Message.printMessage(this.name + "は炎を吹いた<br>" + f.name + "は" + this.offence + "のダメージを受けた！<br>");
    } else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + f.name + "は倒れている<br>");
    }
  }
}

class Message
{
  // メッセージを表示する
  static printMessage(text)
  {
    messageView.innerHTML = text;
  }

  // メッセージを追加する
  static addMessage(text)
  {
    messageView.innerHTML += text;
  }
}

Message.printMessage("あれすの攻撃<br>");
Message.addMessage("トロルに20のダメージを与えた！<br>");

/**
 * 種別（type）で指定されたキャラクターが全滅しているかを調べる
 *
 * @param type
 * @returns {boolean}
 */
function isAliveByType(type)
{
  for (let c of characters) {
    // 1人でも生存していたらtrueを返す
    if (c.type === type && c.liveFlg === true) {
      return true;
    }
  }
  // 全滅しているときはfalseを返す
  return false;
}

/**
 * 名前でキャラクターを探索し、配列の要素番号を返す
 *
 * @param name
 * @returns {*[]}
 */
function searchCharacterByName(name)
{
  // 探索した配列の要素番号
  let characterElementNum = [];

  // 指定されたキャラクターを探す
  let i = 0;
  for (let c of characters) {
    if (c.name === name) {
      characterElementNum.push(i);
    }
    ++i;
  }

  return characterElementNum;
}

/**
 * 種別（type）で指定された生存しているキャラクターを探し、配列の要素番号を返す
 *
 * @param type
 * @returns {*[]}
 */
function searchLivedcharacterByType(type)
{
  // 種別（type）で指定された生存しているキャラクター配列の要素番号
  let characterElementNum = [];

  // 種別（type）で指定された生存しているキャラクターを探す
  let i = 0;
  for (let c of characters) {
    if (c.type === type && c.liveFlg === true) {
      characterElementNum.push(i);
    }
    ++i;
  }
  return characterElementNum;
}

/**
 * minからmaxまでのランダムな整数を返す
 *
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}