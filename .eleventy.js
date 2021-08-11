const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('CSS');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPlugin(eleventyGoogleFonts);    
};