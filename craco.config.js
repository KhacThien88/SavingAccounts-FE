/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@/assets": path.resolve(__dirname, "./src/assets"),
			"@/components": path.resolve(__dirname, "./src/components"),
			"@/constants": path.resolve(__dirname, "./src/constants"),
			"@/contexts": path.resolve(__dirname, "./src/contexts"),
			"@/hooks": path.resolve(__dirname, "./src/hooks"),
			"@/libs": path.resolve(__dirname, "./src/libs"),
			"@/pages": path.resolve(__dirname, "./src/pages"),
			"@/services": path.resolve(__dirname, "./src/services"),
			"@/utils": path.resolve(__dirname, "./src/utils"),
			"@/icons": path.resolve(__dirname, "./src/icons"),
			"@/types": path.resolve(__dirname, "./src/types"),
		},
	},
};
