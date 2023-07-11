const getModel = (models) => {
    switch (models) {
      case 'hero':
        return HeroModel; 
      case 'items':
        return ItemModel;
      case 'challengers':
        return ChallengerModel; 
      case 'roons':
        return RoonModel; 
      case 'tierlist':
        return TierlistModel; 
      case 'herocombos':
        return ComboModel; 
      case 'latens':
        return LatenModel; 
      case 'teams':
        return TeamModel; 
      default:
        return false;
    }
  };