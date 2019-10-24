/**
 * [Products]
 */
export const productSelector = state => state.products;

/**
 * [User]
 */
export const tokenSelector = state => state.account.token;
export const isAuthSelector = state => state.account.isAuth;
