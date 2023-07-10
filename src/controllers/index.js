const r = (r) => require(r);
const f = "./future/";
const hero = r(f + "hero");
const tierlist = r(f + "tierlist");
const items = r(f + "items");
const herocombo = r(f + "herocombo");
const roons = r(f + "roons");
const challengersskill = r(f + "challengerskills");
const latensskill = r(f + "latensskill");
module.exports = {
  hero,
  tierlist,
  items,
  herocombo,
  roons,
  latensskill,
  challengersskill,
};
