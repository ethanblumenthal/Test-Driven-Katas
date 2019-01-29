const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns an empty array if an empty array is passed in', () => {
    expect(twoSum([])).to.eql([]);
  });

  it('Returns an empty array if only one element in input array', () => {
    expect(twoSum([1], 2)).to.eql([]);
  });

  it('Returns an empty array if no two numbers equal target', () => {
    expect(twoSum([1, 2], 4)).to.eql([]);
  });

  it('Returns the indices of two distinct elements that sum to target as an array', () => {
    expect(twoSum([1, 2, 3], 5)).to.eql([1, 2]);
  });
});
