/**
 * Business layer.
 *
 * Domain test data. Centralising credentials here means adding a new
 * scenario (e.g. invalid user) never requires touching the specs -
 * just adding an entry here (open/closed, DRY).
 */
export const users = {
    valid: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!'
    },
    invalid: {
        username: 'invalidUser',
        password: 'wrongPassword'
    }
}
