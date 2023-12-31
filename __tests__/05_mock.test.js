import axios from 'axios'; // import axios 模組

// 透過 axios 取得所有產品
const getAllGoods = () => {
  return axios.get('url/json/allGoods').then((resp) => {
    return resp.data;
  });
};

// 使用 jset.mock 自動模擬整個 axios 模組
// jest.mock('axios');

test('should fetch goods', () => {
  const goods = [{ name: 'Milk' }, { name: 'Apple' }];
  const res = { data: goods };

  // 為 axios 中的 get 模擬回傳值為 res
  axios.get.mockResolvedValue(res);

  /*
      執行並替回傳值進行斷言，
      這時候 axios 已經被 jest.mock 給模擬了，
      所以 getAllGoods 內的 axios.get 其實不會執行，
      只會回傳用 mockResolvedValue 指定的內容而已
    */
  return getAllGoods().then((result) => {
    console.log(result);

    //確認 mock axios 是否有被執行
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get.mock.calls.length).toBe(1);

    // 從回傳結果中做斷言（第一個產品為 Milk）
    expect(result[0].name).toEqual('Milk');
    console.log(axios.get.mock.calls); //取得 mock axios 接收到的參數 url
  });
});
