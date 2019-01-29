const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns string if string is less than max length', () => {
    expect(wrap('Hello world', 20)).to.equal('Hello world');
  });

  it('Returns a string on multiple lines no more than max length', () => {
    expect(wrap('How are you doing? I am great!', 10)).to.equal('How are \nyou doing? \nI am \ngreat!');
  });
});