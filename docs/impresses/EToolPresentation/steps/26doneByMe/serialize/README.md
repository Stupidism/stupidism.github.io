    CModifiable.Serialize: {
      addHeadAttributes(),
      addComponents: {
        addnewXElement(_strComponents),
        add_modComponents.Serialize()
      }
    },
    CVsDataContainer.Serialize: {
      CModifiable.Serialize(),
      vsDataXElement(),
      dataContainerAddElements: {
        dataContainer.addComponents()
      },
      addConfigAttribute()
    },
    CAnyOtherModel.Serialize: {
      Overrided or original workflow of above two base classes
    }
