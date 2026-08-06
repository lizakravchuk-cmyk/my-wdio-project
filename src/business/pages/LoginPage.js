import { $ } from '@wdio/globals'
import BasePage from '../../core/pages/BasePage.js'

const LOGIN_PATH = '/login'

/**
 * Business layer.
 *
 * Page object for the Login page. Owns everything specific to that page:
 * selectors and user-facing actions (login), so tests never touch
 * selectors directly.
 */
class LoginPage extends BasePage {
    get inputUsername() {
        return $('#username')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnSubmit() {
        return $('button[type="submit"]')
    }

    /**
     * Fill in credentials and submit the login form.
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    open() {
        return super.open(LOGIN_PATH)
    }
}

export default new LoginPage()
