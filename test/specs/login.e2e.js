import { expect } from '@wdio/globals'
import LoginPage from '../../src/business/pages/LoginPage.js'
import SecurePage from '../../src/business/pages/SecurePage.js'
import { users } from '../../src/business/data/users.js'
import { loginMessages } from '../../src/business/data/messages.js'

describe('Login functionality', () => {
    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should log in successfully with valid credentials', async () => {
        await LoginPage.login(users.valid.username, users.valid.password)

        const flashMessage = await SecurePage.getFlashMessage()
        expect(flashMessage).toContain(loginMessages.success)
    })

    it('should reject login with invalid credentials', async () => {
        await LoginPage.login(users.invalid.username, users.invalid.password)

        const flashMessage = await SecurePage.getFlashMessage()
        expect(flashMessage).toContain(loginMessages.failure)
    })
})
