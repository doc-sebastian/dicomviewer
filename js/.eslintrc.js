module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 4],
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "no-continue": 0,
        "no-console": 0,
        "class-methods-use-this": 0,
        "no-control-regex": 0,
        "valid-typeof": 0,
        "no-prototype-builtins": 0,
        "no-restricted-globals": 0,
        "import/prefer-default-export": 0,
        "consistent-return": 0
    },
    "globals": {
        "OC": true,
        "OCA": true,
        "Files": true,
        "FileList": true,
        "XMLHttpRequest": true,
        "window": true,
        "navigator": true,
        "document": true,
        "history": true
    }
};