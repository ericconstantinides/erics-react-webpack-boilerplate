module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
	  "eslint:recommended",
	  "plugin:react/recommended"
	],
	"globals": {
		"process": true,
		"require": true,
		"module": true,
		"__dirname": true,
		"gtag": true,
		"test": true,
		"expect": true
	},
	// "parserOptions": {
	//     "ecmaFeatures": {
	//         "experimentalObjectRestSpread": true,
	//         "jsx": true
	//     },
	//     "sourceType": "module"
	// },
	"plugins": [
		"react",
		"immutable"
	],
	"rules": {
		"indent": [
			"error",
			2,
			{ "SwitchCase": 1 }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"warn",
			"single"
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"semi": [
			"error",
			"never"
		],
		"eqeqeq": [
			"error",
			"always"
		],
		"no-unused-vars": [
			"warn", {
				"vars": "all",
				"args": "none",
				"ignoreRestSiblings": true
			}
		],
		"lines-between-class-members": [
		  "error",
		  "always",
		  { exceptAfterSingleLine: true }
		],
		// ! "space-before-function-paren" commented out because VSCode ESLint error:
		// ! "Cannot read property 'range' of null"
		// "space-before-function-paren": [
		// 	"error", {
		// 		"anonymous": "always",
		// 		"named": "never",
		// 		"asyncArrow": "always"
		// 	}
		// ],
		// "padding-line-between-statements": [
		//     "error",
		//     {
		//         blankLine: "always", prev: "*", next: ["if", "return"]
		//     }
		// ],
		"no-console": [
			"warn",
			{
				"allow": [
					"warn",
					"error"
				]
			}
		],
		// "require-jsdoc": ["warn", {
		//     "require": {
		//         "FunctionDeclaration": true,
		//         "MethodDefinition": false,
		//         "ClassDeclaration": true,
		//         "ArrowFunctionExpression": false,
		//         "FunctionExpression": false
		//     }
		// }]
		"object-shorthand": ["warn", "always"],
		"react/prop-types": 0,
		// "react/destructuring-assignment": ["warn", 'always'],
		// "react/forbid-elements": ['warn', { "forbid": ['div', 'span'] }],
		"react/no-access-state-in-setstate": ["error", "always"],
		"react/no-array-index-key": ["warn"],
		// "react/prefer-stateless-function": ["warn"],
		"react/self-closing-comp": ["warn"],
		"react/sort-comp": [
			"warn", {
				"order": [
					'type-annotations',
					'static-methods',
					'instance-variables',
					'lifecycle',
					'everything-else',
					'render'
				],
				groups: {
					rendering: [
						'/^render.+$/',
						'render'
					]
				}
			}
		],
		"react/jsx-handler-names": ["warn"],
		"react/jsx-no-bind": ["warn"],
		"react/jsx-wrap-multilines": ["warn"]
	}
}
