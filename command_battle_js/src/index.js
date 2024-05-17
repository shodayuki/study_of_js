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

  // 回復する

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