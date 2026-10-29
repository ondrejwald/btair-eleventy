module.exports = function(eleventyConfig) {
    // Static assets (CSS, fonts, logos, bg) passthrough — copied as-is to _site
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("admin");

    // Collections for Decap CMS editable content
    eleventyConfig.addCollection("pilots", collection =>
        collection.getFilteredByGlob("src/content/pilots/*.md")
                  .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
    eleventyConfig.addCollection("events", collection =>
        collection.getFilteredByGlob("src/content/events/*.md")
                  .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    );
    eleventyConfig.addCollection("research", collection =>
        collection.getFilteredByGlob("src/content/research/*.md")
                  .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
    eleventyConfig.addCollection("reports", collection =>
        collection.getFilteredByGlob("src/content/reports/*.md")
                  .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
    eleventyConfig.addCollection("partners", collection =>
        collection.getFilteredByGlob("src/content/partners/*.md")
                  .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );
    eleventyConfig.addCollection("signpost", collection =>
        collection.getFilteredByGlob("src/content/signpost/*.md")
                  .sort((a, b) => (a.data.order || 999) - (b.data.order || 999))
    );

    // Date formatter
    eleventyConfig.addFilter("formatDate", (value, format = "long") => {
        const d = new Date(value);
        if (isNaN(d)) return value;
        if (format === "short") {
            return d.toLocaleDateString("en-GB", { day: "numeric", month: "numeric" }) + ".";
        }
        return d.toLocaleDateString("en-GB", {
            weekday: "short", day: "numeric", month: "long", year: "numeric"
        });
    });

    // Return config
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        // Change this if deployed to a subpath (GitHub Pages = "/<repo-name>/")
        // When you connect custom domain btair.eu, change back to "/"
        pathPrefix: process.env.PATH_PREFIX || "/"
    };
};
