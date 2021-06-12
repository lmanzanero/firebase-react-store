require('./src/styles/global.css');
const { CartProvider } = require('./src/services/context/CartContext');
const React = require("react")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <CartProvider {...props}>{element}</CartProvider>
}