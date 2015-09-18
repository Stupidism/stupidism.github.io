    CModifiable.DeSerialize: {
      name=elementLabelName(element),
      DeSerializeComponent(name): {
        if(element.HasElements){
          ctor=getDefaultCtorByClass(name),
          mod=ctor.Invoke(...),
          mod.DeSerialize(element),
          addModifiable(mod)
        }else{
          addStrComp(element)
        }
      }
    },
    CVsDataContainer.DeSerialize: {
      dataContainer.DeSerialize(element),
      CModifiable.DeSerialize(element.Element(nameSpace+labelName));
    },
    CAnyOtherModel.DeSerialize: {
      base.DeSerialize:{
        //Overrided or original workflow of above two base classes
      }
    }
