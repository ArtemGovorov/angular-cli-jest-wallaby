import 'jest';
import { should } from 'should';
import * as td from 'testdouble';
const { reset, when } = td;

describe('automated test infrastructure', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });
});

interface MyInterface {
}

describe('interfaces', () => {
  it(`can have mockito-like test doubles`, () => {
    const mock = td.object<MyInterface>('');

    when(mock.do('wil')).thenReturn('Pannell');
    const lastName = mock.do('wil');
    lastName.should.equal('Pannell');
  });

  afterEach(() => {
    reset();
  });
});
