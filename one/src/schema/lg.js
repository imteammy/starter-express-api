let ComboTypeA = {
  name: SchemaType,
  image: SchemaType,
};
let ComboTypeB = {
  one: ComboTypeA,
  two: ComboTypeA,
  three: ComboTypeA,
  four: ComboTypeA,
  five: ComboTypeA,
};
const ComboSchema = new mongoose.Schema({
  comboName: SchemaType,
  comboImage: SchemaType,
  heroCombo: ComboTypeB,
  comboLost: ComboTypeB,
  itemsSolution: ComboTypeB,
  comboWin: ComboTypeB,
});

let TeamTypeA = {
  name: SchemaType,
  image: SchemaType,
};
const teamSchema = new mongoose.Schema({
  teamName: SchemaType,
  teamImage: SchemaType,
  team: {
    one: TeamTypeA,
    two: TeamTypeA,
    three: TeamTypeA,
    four: TeamTypeA,
    five: TeamTypeA,
  },
});
