const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      additionalWebpackConfig: {
        entry: ["babel-polyfill", "./index.js"],
        plugins: [
          new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
          }),
          new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
          new webpack.DefinePlugin({ process: { env: {} } }),
        ],
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/, 
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-react",
                    { plugins: ["@babel/plugin-proposal-class-properties"] },
                  ],
                },
              },
            },
          ],
        },
        resolve: {
          alias: { "react-native$": "react-native-web" },
          extensions: [".web.js", ".js", ".web.ts", ".ts"],
        },
      },
    },
    argv
  );
  // Customize the config before returning it.
  return config;
};