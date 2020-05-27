import {
  fetchData,
  fetchDataTwo,
  fetchDataThree,
  fetchDataFour
} from './fetchData';

test('fetchData 测试(异步代码的测试方法-1回调函数式)', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      "success": true
    });
    // 保证我们的回调已经完成了，这时候我们表示测试完成
    // 这时候我们的测试代码才能保证测试准确无误的完成
    done && done();
  });
});

test('fetchDataTwo 测试(异步代码的测试方法-2直接返回promise)', () => {
  // 注意，这边需要返回这个结果，否则有坑！！
  return fetchDataTwo().then(res => {
    expect(res.data).toEqual({
      "success": true
    });
  });
});

test('fetchDataThree 测试(异步代码的测试方法-2不存在接口的测试)', () => {
  // 断言，必须需要执行一次expect方法才可以通过测试
  expect.assertions(1);
  // 只有出现异常的时候才会走这个方法
  return fetchDataThree().catch(err => {
    expect(err.toString().includes('404')).toBeTruthy();
  });
});

test('fetchDataFour 测试(异步代码的测试方法-4 async/await 形式的测试)', async () => {
  //resolves把现有对象转换成Promise对象，
  //toMatchObject 匹配对象中的属性
  // await expect(fetchDataFour()).resolves.toMatchObject({
  //   "success": true
  // });
  const result = await fetchDataFour();
  expect(result.data).toEqual({
    "success": true
  });
});