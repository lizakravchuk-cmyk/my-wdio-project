import { expect } from 'chai';

describe('My first Chai test', () => {
    it('should check that 2 + 2 equals 4', () => {
        expect(2 + 2).to.equal(4);
    });

    it('should check that true is true', () => {
        expect(true).to.be.true;
    });

    it('should check that string contains word', () => {
        expect('hello world').to.include('world');
    });
});