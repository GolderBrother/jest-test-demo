// 这个是用来作数字比较的，大于什么数值，只要大于传入的数值，就可以通过测试。
test('toBeGreaterThan匹配器', () => {
  const num = 10;
  expect(num).toBeGreaterThan(9);
})

// 小于这个数值
test('toBeLessThan匹配器', () => {
  const num = 10;
  expect(num).toBeLessThan(11);
});

// 当测试结果数据大于等于期待数字时，可以通过测试
test('toBeGreaterThanOrEqual匹配器', () => {
  const num = 10;
  expect(num).toBeGreaterThanOrEqual(10);
});

// 小于等于这个数值
test('toBeLessThanOrEqual匹配器', () => {
  const num = 10;
  expect(num).toBeLessThanOrEqual(10);
});

// 这个是可以自动消除JavaScript浮点精度错误的匹配器，举个例子，比如我们让0.1和0.2相加，这时候js得到的值应该是0.30000000000004,所以如果用toEqual()匹配器，测试用例会通过不了测试的。
test('toBeCloseTo 匹配器', () => {
  const a = 0.1,
    b = 0.2;
  expect(a + b).toBeCloseTo(0.3);
});

// 总结
// 这些没必要记忆，你只要知道有这些匹配器，在你的意识里有就可以了。当我们使用的多了，自然就记住了，并且会使用了。