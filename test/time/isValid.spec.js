'use strict';

import { expect } from 'chai';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.should();

import { isValid } from '../../src/time';

describe('Time: isValid()', () => {

  let date;
  beforeEach( () => {
    date = new Date();
  });

  it('Up & Running', () => {
    expect(isValid).to.be.ok;
  });

  it('Use using name of currency', () => {
    expect(isValid(date)).to.be.true;
    // expect(isValid('hello world')).to.be.false;
  });
0});
