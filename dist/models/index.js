let e = e => require(e),
  o = e('mongoose'),
  l = './files/',
  m = e(l + 'heroes'),
  s = e(l + 'item'),
  r = e(l + 'heroComboSchema'),
  a = e(l + 'teamHeroSchema'),
  i = e(l + 'roonSchema'),
  t = e(l + 'latensSkillsSchema'),
  h = e(l + 'ChallengerSkillsSchema'),
  S = e(l + 'tierListSchema'),
  n = o.model('Items', s),
  d = o.model('Hero', m),
  c = o.model('Roons', i),
  k = o.model('ComboHero', r),
  C = o.model('LatensSkills', t),
  H = o.model('ChallengerSkills', h),
  g = o.model('Tierlist', S),
  L = o.model('teamhero', a)
module.exports = {
  Hero: d,
  Roons: c,
  LatensSkills: C,
  ChallengerSkills: H,
  Items: n,
  TierList: g,
  ComboHero: k,
  teamHero: L
}