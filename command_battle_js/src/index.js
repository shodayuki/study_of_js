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

  // 表示用のパラメータを返す
  getMainParameter()
  {
    return "<b>" + this.name + "</b><br>" + "体力 " + this.hp + "<br>" + "薬草 " + this.herb + "<br>";
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

      Message.printMessage(this.name + "の攻撃<br>" + this.target.name + "に" + this.offence + "のダメージを与えた!<br>");
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

class GameManage
{
  // コンストラクタ
  constructor() {
    // 行動の順番を決める
    this.actionOrder();

    // パラメータを表示する
    this.showParameter();

    // 敵の画像を表示する
    this.showEnemyImage();

    // はじめのメッセージを表示する
    this.showFirstMessage();
  }

  // 行動の順番を決める
  actionOrder()
  {
    // 素早さでソートする
    characters.sort(
      function(a, b) {
        return b.speed - a.speed;
      }
    );
  }

  // パラメータを表示または更新する
  showParameter()
  {
    // パラメータを消去する
    parameterView.innerHTML = "";

    // 味方のパラメータを表示する
    for (let c of characters) {
      if (c.type === "friend") {
        parameterView.innerHTML += '<div class="parameter">' + c.getMainParameter() + '</div>';
      }
    }

    // 敵のパラメータをコンソールに表示する（デバッグ用）
    for (let c of characters) {
      if (c.type === "enemy") {
        console.log(c.name + " " + c.hp);
      }
    }
  }

  // 敵の画像を表示する
  showEnemyImage()
  {
    let i = 0;
    for (let c of characters) {
      if (c.type === "enemy") {
        enemyImageView.innerHTML += '<img alt="#" id="enemyImage' + characters.indexOf(c) + '" src="' + c.path + '" style="position:absolute; left:' + (160 * i++) +'px; bottom: 0">';
      }
    }
  }

  // 戦闘開始時のメッセージを表示する
  showFirstMessage()
  {
    Message.printMessage("モンスターが現れた<br>");
  }

  // 倒れたキャラクターを処理する
  removeDiedcharacter()
  {
    for (let c of characters) {
      if (c.hp <= 0 && c.liveFlg === true) {
        Message.addMessage(c.name + "は倒れた<br>");

        // 生存フラグを落とす
        c.liveFlg = false;

        // 敵の場合は画像を削除
        if (c.type === "enemy") {
          document.getElementById("enemyImage" + characters.indexOf(c)).remove();
        }
      }
    }
  }

  // 勝敗の判定をする
  judgeWinLose()
  {
    // 味方が残っていなければゲームオーバー
    if (!isAliveByType("friend")) {
      Message.addMessage("全滅しました・・・<br>");
      return "lose";
    }

    // 敵が残っていなければ勝利
    if (!isAliveByType("enemy")) {
      Message.addMessage("モンスターをやっつけた<br>");
      return "win";
    }

    return "none";
  }

  // 1ターン
  async battle()
  {
    // 勝敗
    let winLose = "none";

    for (let c of characters) {
      // 倒れたキャラクターはスキップする
      if (c.liveFlg === false) {
        continue;
      }

      await sleep(900);

      // 各キャラクターの行動
      c.action();

      await sleep(1100);

      // パラメータを更新
      this.showParameter();

      await sleep(900);

      // 倒れたキャラクターを処理
      this.removeDiedcharacter();

      await sleep(300);

      // 勝敗の判定をする
      winLose = this.judgeWinLose();

      // 決着がついた場合
      if (winLose === "win" || winLose === "lose") {
        return false;
      }
    }
    return true;
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
 * 種別（type）で指定された生存しているキャラクターの要素番号をランダムで返す
 *
 * @param type
 * @returns {*}
 */
function searchLivedcharacterRandom(type)
{
  // 生存しているキャラクターを探して、その要素番号を配列にセットする
  let livedcharacter = searchLivedcharacterByType(type);

  // 生存しているキャラクターの中からランダムで1人選ぶ
  let randomValue = getRandomIntInclusive(0, livedcharacter.length - 1);

  return livedcharacter[randomValue];
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