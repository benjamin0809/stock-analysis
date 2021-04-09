 import Utility from '../src/utils/utility';

 describe('utility test', () => {
  test('utility formatUrl', () => {
    let url = 'user/getUserInfo'
      expect(Utility.formatUrl(url, {
        name: 'benjamin',
        age: 18
      })).toMatch(url + "?name=benjamin&age=18");
  });
  test('utility formatUrl', () => {
    let url = 'user/getUserInfo'
    expect(Utility.formatUrl(url, {})).toMatch(url);
  });

  test('utility formatUrl', () => {
    let url = ''
    expect(Utility.formatUrl(url, {
      name: 'benjamin',
      age: 18
    })).toMatch(url + "?name=benjamin&age=18");
  });

  test('utility formatUrl', () => {
    let url = 'user/getUserInfo?'
    expect(Utility.formatUrl(url, {
      name: 'benjamin',
      age: 18
    })).toMatch(url + "&name=benjamin&age=18");
  });
});

