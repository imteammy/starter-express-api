const HeroSkillType = {
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  cooldown: SchemaType,
}
const HeroItemType = {
  name: SchemaType,
  image: SchemaType,
  price: SchemaType,
}
const HeroRoonType = {
  name: SchemaType,
  image: SchemaType,
  total: SchemaType,
}
const HeroLatenType = {
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
}
const HeroComboType = {
  name: SchemaType,
  image: SchemaType,
}

const heroSchema = new mongoose.Schema({
    name: SchemaType,
    story: SchemaType,
    image: SchemaType,
    role: {
      main: SchemaType,
      sub: SchemaType,
    },
    passiveSkill: HeroSkillType,
    firstSkill: HeroSkillType,
    secondSkill: HeroSkillType,
    ultimateSkill: HeroSkillType,
    items: {
      one: HeroItemType,
      two: HeroItemType,
      three: HeroItemType,
      four: HeroItemType,
      five: HeroItemType,
      six: HeroItemType,
    },
    roons: {
      one: HeroRoonType,
      two: HeroRoonType,
      three: HeroRoonType,
    },
    challengerSkills: {
      name: SchemaType,
      image: SchemaType,
      effect: SchemaType,
    },
    LatensSkills: {
      one: {
        one: HeroLatenType,
        two: HeroLatenType,
        three: HeroLatenType,
      },
      two: {
        one: HeroLatenType,
        two: HeroLatenType,
      },
      three: {
        one: HeroLatenType,
        two: HeroLatenType,
      },
    },
    comboHero: {
      one: HeroComboType,
      two: HeroComboType,
      three: HeroComboType,
      four: HeroComboType,
      five: HeroComboType,
    },
  });