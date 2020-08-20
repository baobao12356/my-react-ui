module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
		"@storybook/addon-actions",
		"@storybook/addon-links",
		"@storybook/addon-viewport",
		"@storybook/addon-knobs",
		{ name: "@storybook/addon-docs", options: { configureJSX: true } },
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				// 在编写story之前，我们需要对props table进行设置，props table是docs插件借助dockgen产生的，前面编写好Button组件后，自动会出来一堆属性，这些属性有很多是不用展示的，不需要全部列举出来。所以我们需要对属性进行过滤。
				{
					loader: require.resolve("react-docgen-typescript-loader"),
					options: {
						shouldExtractLiteralValuesFromEnum: true,
						propFilter: (prop) => {
						  if (prop.parent) {
							return !prop.parent.fileName.includes(
							  "node_modules"
							);
						  }
						  return true;
						},
					  },
				},
			],
		});
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
}