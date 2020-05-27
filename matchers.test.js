// toBe：只要内容相等，就可以通过测试
test('测试严格相等', () => {
  const a = {
    number: '007'
  };
  // expect(a).toBe({ number: '007' }); // false
  expect(a).toStrictEqual({
    number: '007'
  }); // true 
});

// toEqual：当你不严格匹配但要求值相等时就可以使用toEqual（）匹配器。
test('测试不严格匹配但要求值相等', () => {
  const a = {
    number: '007'
  };
  expect(a).toEqual({
    number: '007'
  }); // true
})

// toBeNul()匹配器只匹配null值，需要注意的是不匹配undefined的值
test('测试匹配null值', () => {
  const a = null;
  expect(a).toBeNull();
});


// 那我们要匹配undefined时，就可以使用toBeUndefined()匹配器
test('测试匹配undefined值', () => {
  let a;
  expect(a).toBeUndefined();
});
// 如果我们把undefined改为空字符串也是没有办法通过测试的。

// toBeDefined()匹配器的意思是只要定义过了，都可以匹配成功

test('测试匹配已经定义过的值', () => {
  let a = 'golderbrother';
  expect(a).toBeDefined();
});

// 这个是true和false匹配器，判断是否为真
test('测试是否为真', () => {
  let a = 1;
  expect(a).toBeTruthy();
});

// 判断是否为假
test('测试是否为假', () => {
  let a = 0;
  expect(a).toBeFalsy();
});