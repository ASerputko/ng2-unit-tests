/** describe - is known as suite */
describe('1st test', () => {

  /** beforeAll is called once before all specs in the describe in which it is called */
  beforeAll(() => {
    console.log('beforeAll is called');
  });

  /** beforeEach is called once before each spec in the describe in which it is called */
  beforeEach(() => {
    console.log('beforeEach is called');
  });

  /** afterEach is called once after each spec in the describe in which it is called */
  afterEach(() => {
    console.log('afterEach is called');
  });

  /** afterAll is called once after all specs in the describe in which it is called */
  afterAll(() => {
    console.log('afterAll is called');
  });

  /** it - is known as spec */
  it('true is true', () => {
    expect(true).toBe(true)
  });

  /** add `x` before `it` if you whant to skip test case */
  xit('skipped', () => {
    expect(true).toBe(true)
  });

  /** done helps to resolve async requests */
  it('async spec', (done) => {
    expect(true).toBe(true);
    done();
  });
});
