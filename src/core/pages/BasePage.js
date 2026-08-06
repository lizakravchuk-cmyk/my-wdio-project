import { browser } from '@wdio/globals'

/**
 * Core layer.
 *
 * BasePage contains only generic, project-agnostic functionality that any
 * page object in any project could reuse (navigation, waiting helpers).
 * It must never contain selectors, URLs or logic specific to the
 * application under test - that belongs in the business layer.
 */
export default class BasePage {
    /**
     * Navigate to a path relative to the configured `baseUrl`
     * (see wdio.conf.js). Keeping the domain out of this class is what
     * makes it reusable across projects.
     * @param {string} path relative path, e.g. '/login'
     */
    async open(path = '/') {
        return browser.url(path)
    }

    /**
     * Wait until an element is displayed. Shared by every page object
     * instead of every subclass re-implementing its own wait logic.
     * @param {WebdriverIO.Element} element
     * @param {number} [timeout]
     */
    async waitForDisplayed(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout })
    }
}
