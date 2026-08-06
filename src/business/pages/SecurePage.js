import { $ } from '@wdio/globals'
import BasePage from '../../core/pages/BasePage.js'

/**
 * Business layer.
 *
 * Page object for the "Secure Area" page shown after a successful login.
 */
class SecurePage extends BasePage {
    get flashAlert() {
        return $('#flash')
    }

    /**
     * Convenience method encapsulating the "wait then read" pattern so
     * tests don't repeat it (DRY) and don't depend on the element's
     * internal wait behaviour (encapsulation).
     */
    async getFlashMessage() {
        await this.waitForDisplayed(this.flashAlert)
        return this.flashAlert.getText()
    }
}

export default new SecurePage()
