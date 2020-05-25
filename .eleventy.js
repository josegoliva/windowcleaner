const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("/*.png");
    eleventyConfig.addPassthroughCopy("/*.png");
    eleventyConfig.addPassthroughCopy("/*.xml");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.addPlugin(pluginSass, {});
};