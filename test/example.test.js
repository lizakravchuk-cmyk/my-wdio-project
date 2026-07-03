import { expect, should as chaiShould, assert } from 'chai';

// Ініціалізація should
chaiShould();

describe('Chai Assert interface', () => {
    it('should check that user is logged in', () => {
        const isLoggedIn = true;
        assert.isTrue(isLoggedIn);
    });

    it('should check that product name is correct', () => {
        const productName = 'Hammer';
        assert.equal(productName, 'Hammer');
    });

    it('should check that cart has items', () => {
        const cartItems = ['Hammer', 'Pliers', 'Screwdriver'];
        assert.lengthOf(cartItems, 3);
    });
});

describe('Chai Expect interface', () => {
    it('should check that search returns results', () => {
        const searchResults = ['Hammer', 'Pliers'];
        expect(searchResults).to.have.length(2);
    });

    it('should check that user email is valid', () => {
        const email = 'user@example.com';
        expect(email).to.include('@');
    });

    it('should check that product price exists', () => {
        const price = 19.99;
        expect(price).to.exist;
    });
});

describe('Chai Should interface', () => {
    it('should check that username is not empty', () => {
        const username = 'John';
        username.should.not.be.empty;
    });

    it('should check that basket total is correct', () => {
        const total = 100;
        total.should.equal(100);
    });

    it('should check that product is available', () => {
        const isAvailable = true;
        isAvailable.should.be.true;
    });
});