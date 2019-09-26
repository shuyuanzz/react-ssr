const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const glob = require("glob");
const autoprefixer = require("autoprefixer");
const projectRootDir = process.cwd();

const setMpa = () => {
    const entry = {};
    const htmlWebpackPlugin = [];
    const entryFiles = glob.sync(path.join(projectRootDir,"src/*/index.tsx"));
    console.log('entryFiles',entryFiles)
}

setMpa()
module.exports = {


}