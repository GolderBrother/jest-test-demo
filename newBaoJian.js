export class NewBaoJian {
  gongzhu(num) {
    this.user = num === 1 ? '小红' : '刘英';
  }
  zuliao() {
    this.service = `${this.user} 走进房间为你-足疗`;
  }
  anmo() {
    this.service = `${this.user} 走进房间为你-按摩`;
  }
  taishi() {
    this.service = `${this.user} 走进房间为你-泰式足疗`;
  }
  gongting() {
    this.service = `${this.user} 走进房间为你-宫廷御疗`;
  }
}