// 字符串包含匹配器: toMatch()。

test('toMatch匹配器', () => {
  const str = 'luckin coffee、starbucks coffee';
  expect(str).toMatch('luckin coffee');
  // 也可以正则表达式
  expect(str).toMatch(/^luckin coffee/);
});

// 数组串包含匹配器: toContain()。
test('toContain匹配器', () => {
  const arr = ['luckin coffee', 'starbucks coffee']
  expect(arr).toContain('luckin coffee');
});

// 也可以完美的兼容set的测试
test('toContain匹配器', () => {
  const arr = ['luckin coffee', 'starbucks coffee'];
  const setArr = new Set(arr);
  expect(setArr).toContain('luckin coffee');
});

// 专门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常
test('toThrow匹配器', () => {
  const throwNewErrorFn = () => {
    throw new Error('this is a new error')
  }
  expect(throwNewErrorFn).toThrow()
});

// 我们也可以对这个匹配器中加一些字符串，意思就是抛出的异常必须和字符串相对应。
test('toThrow匹配器', () => {
  const throwNewErrorFn = () => {
    throw new Error('this is a new error')
  }
  expect(throwNewErrorFn).toThrow('this is a new error')
});

// not匹配器是Jest中比较特殊的匹配器，意思就是相反或者说取反.比如上面的例子，我们不希望方法抛出异常，就可以使用not匹配器。
test('not匹配器', () => {
  const throwNewErrorFn = () => {
    // throw new Error('this is a new error')
  }
  expect(throwNewErrorFn).not.toThrow(); // true
});

// [jest匹配器官方文档](https://jestjs.io/docs/en/expect)