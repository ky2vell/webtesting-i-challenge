const { success, fail, repair, get } = require('./enhancer.js');

describe('enhancer unit tests', () => {
  describe('repair function', () => {
    it('should have durability equal 100', () => {
      let actual = { durability: 77 };
      let expected = { durability: 100 };
      expect(repair(actual)).toStrictEqual(expected);
    });
  });

  describe('sucess function', () => {
    it('should increase enhancement by 1 and not change durability', () => {
      let actual = { durability: 77, enhancement: 15 };
      let expected = { durability: 77, enhancement: 16 };
      expect(success(actual)).toStrictEqual(expected);
    });

    it('should not change enhancement level if equal to 20', () => {
      let actual = { enhancement: 20 };
      let expected = { enhancement: 20 };
      expect(success(actual)).toStrictEqual(expected);
    });
  });

  describe('fail function', () => {
    it('should decrease durability by 5 if enhancement is less than 15', () => {
      let actual = { durability: 77, enhancement: 14 };
      let expected = { durability: 72, enhancement: 14 };
      expect(fail(actual)).toStrictEqual(expected);
    });
    it('should decrease durability by 10 if enhancement is 15 or more', () => {
      let actual = { durability: 77, enhancement: 15 };
      let expected = { durability: 67, enhancement: 15 };
      expect(fail(actual)).toStrictEqual(expected);
    });
    it('should decrement enhancement level by 1 if greater than 16', () => {
      let actual = { durability: 70, enhancement: 17 };
      let expected = { durability: 60, enhancement: 16 };
      expect(fail(actual)).toStrictEqual(expected);
    });
  });

  describe('get function', () => {
    it('should display enhancment level prior to name if greater than zero', () => {
      let actual = { name: 'Link', enhancement: 17 };
      let expected = { name: '[+17] Link', enhancement: 17 };
      expect(get(actual)).toStrictEqual(expected);
    });
  });
});
