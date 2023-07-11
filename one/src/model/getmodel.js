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
        return TierListModel; 
      case 'herocombos':
        return HeroComboModel; 
      case 'latens':
        return LatenModel; 
      case 'teams':
        return TeamModel; 
      default:
        return null;
    }
  };