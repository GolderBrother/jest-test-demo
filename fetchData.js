import axios from 'axios'
const mock_url = 'http://a.jspang.com/jestTest.json';
const error_url = 'http://a.jspang.com/jestTest_error.json';

// callback形式
export const fetchData = (fn) => {
  axios.get(mock_url).then(res => fn(res.data));
}

// promise形式
export const fetchDataTwo = () => axios.get(mock_url);

// 错误接口形式
export const fetchDataThree = () => axios.get(error_url);

// 配合async/await
export const fetchDataFour = () => axios.get(mock_url);