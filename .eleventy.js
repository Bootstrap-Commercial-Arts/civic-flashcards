const eleventyGoogleFonts = require("eleventy-google-fonts");
const faviconPlugin = require("eleventy-favicon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('CSS');
    eleventyConfig.addPassthroughCopy('JS');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPlugin(eleventyGoogleFonts);    
    eleventyConfig.addPlugin(faviconPlugin);
};