import {
  NewBaoJian
} from './newBaoJian';
const baojian = new NewBaoJian();
// beforeEach()钩子函数，是在每个测试用例前都会执行一次的钩子函数
beforeEach(() => {
  console.log('给了300元钱后...')
})
// beforeAll()钩子函数的意思是在所有测试用例之前进行执行。
beforeAll(() => {
  console.log('吃完饭后，走进了红浪漫洗浴')
})

describe('小红相关服务', () => {
  test('测试 小红 足疗', () => {
    baojian.gongzhu(1)
    baojian.zuliao();
    expect(baojian.service).toEqual(`小红 走进房间为你-足疗`);
  });
  test('测试 小红 泰式足疗', () => {
    baojian.gongzhu(1)
    baojian.taishi()
    expect(baojian.service).toEqual(`小红 走进房间为你-泰式足疗`);
  });
});

describe('测试 刘英 按摩', () => {

  test('测试 刘英 按摩', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    expect(baojian.service).toMatch(`刘英 走进房间为你-按摩`)
  });

  test('测试 刘英 宫廷御疗', () => {
    baojian.gongzhu(2);
    baojian.gongting();
    expect(baojian.service).toEqual(`刘英 走进房间为你-宫廷御疗`);
  });

});

// afterEach()钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数
afterEach(() => {
  console.log('完成后，我心满意足的坐在沙发上！！！')
})
// afterAll()钩子函数是在完成所有测试用例之后才执行的函数。
afterAll(() => {
  console.log('哎 有钱人的生活就是这么的枯燥且寂寞')
});