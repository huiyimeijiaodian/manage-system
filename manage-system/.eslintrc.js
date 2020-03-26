module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", /** "@vue/prettier" */],
    rules: {
        "no-console": "off",
        "no-unused-vars": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        indent: "off",
        "no-tabs": 0,
        "generator-star-spacing": 0,
        "space-before-function-paren": 0
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};
