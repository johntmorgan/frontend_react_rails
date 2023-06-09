/***
 * Excerpted from "Modern Front-End Development for Rails",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
***/
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const webpackConfig = require('./base')

module.exports = webpackConfig

Object.defineProperty(RegExp.prototype, "toJSON", {
  value: RegExp.prototype.toString
});

console.log(JSON.stringify(module.exports, null, 2))