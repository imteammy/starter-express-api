const itemSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  itemPassive: SchemaType,
  cooldown: SchemaType,
  cost: SchemaType,
});

const roonSchema = new mongoose.Schema({
  name: SchemaType,
  color: SchemaType,
  image: SchemaType,
  effect: SchemaType,
});

const ChallengerSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  cooldown: SchemaType,
});

const latenSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  color: SchemaType,
});

const tierlistSchema = new mongoose.Schema({
  image: SchemaType,
});
