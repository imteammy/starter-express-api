const moduleAlias = require("module-alias");
let d = __dirname;
let s = "/src/";
moduleAlias.addAliases({
  "@models": d + s + "models",
  "@controllers": d + s + "controllers",
  "@middleware": d + s + "middleware",
  "@config": d + s + "config",
  "@route": d + s + "routes",
});
