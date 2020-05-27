import {
  baojian1,
  baojian2
} from './dabaojian.js';

// test方法：Jest封装的测试方法，一般填写两个参数，描述和测试方法
// expect方法 ：预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么。


test('baojian1 300元', () => {
  expect(baojian1(300)).toBe('至尊享受')
})

test('baojian2 1500元', () => {
  expect(baojian2(1500)).toBe('双人服务')
})