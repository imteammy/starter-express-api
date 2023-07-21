import { addAliases } from "module-alias";
let S = __dirname + /src/;
addAliases({
  "@models": S + "models",
  "@controllers": S + "controllers",
  "@middleware": S + "middleware",
  "@config": S + "config",
  "@route": S + "routes",
});
