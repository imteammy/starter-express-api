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
      one: {
        name: SchemaType,
        image: SchemaType,
        total: SchemaType,
      },
      two: {
        name: SchemaType,
        image: SchemaType,
        total: SchemaType,
      },
      three: {
        name: SchemaType,
        image: SchemaType,
        total: SchemaType,
      },
    },
    challengerSkills: {
      name: SchemaType,
      image: SchemaType,
      effect: SchemaType,
    },
    LatensSkills: {
      one: {
        one: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
        two: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
        three: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
      },
      two: {
        one: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
        two: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
      },
      three: {
        one: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
        two: {
          name: SchemaType,
          image: SchemaType,
          effect: SchemaType,
        },
      },
    },
    comboHero: {
      one: {
        name: SchemaType,
        image: SchemaType,
      },
      two: {
        name: SchemaType,
        image: SchemaType,
      },
      three: {
        name: SchemaType,
        image: SchemaType,
      },
      four: {
        name: SchemaType,
        image: SchemaType,
      },
      five: {
        name: SchemaType,
        image: SchemaType,
      },
    },
  });