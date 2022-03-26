let invoices = [
    {
      img:require("./../../../assets/Collection/Character/Character1.png"),
      name: "Beretta",
      number: 2354,

    },
    {
      img:require("./../../../assets/Collection/Character/Character2.png"),
      name: "Scar",
      number: 3674,

    },
    {
      img:require("./../../../assets/Collection/Character/Character3.png"),
      name: "Nova",
      number: 5421,

    },
    {
      img:require("./../../../assets/Collection/Character/Character4.png"),
      name: "Majesty",
      number: 5358,

    },
    {
      img:require("./../../../assets/Collection/Character/Character5.png"),
      name: "Cougar",
      number: 3456,

    },
    {
      img:require("./../../../assets/Collection/Character/Character6.png"),
      name: "Leon",
      number: 6839,
    },
    {
      img:require("./../../../assets/Collection/Character/Character7.png"),
      name: "Riveter",
      number: 7584,
    },
    {
      img:require("./../../../assets/Collection/Character/Character8.png"),
      name: "Heroin",
      number: 7414,
    },
    {
      img:require("./../../../assets/Collection/Character/Character9.png"),
      name: "Mario",
      number: 1578,
    },
    {
      img:require("./../../../assets/Collection/Character/Character10.png"),
      name: "Dante",
      number: 1066,
    },
    {
      img:require("./../../../assets/Collection/Character/Character11.png"),
      name: "Terror",
      number: 1071,
    },
    {
      img:require("./../../../assets/Collection/Character/Character12.png"),
      name: "Cortez",
      number: 3512,
    },
    {
      img:require("./../../../assets/Collection/Character/Character13.png"),
      name: "Devlin",
      number: 9818,
    },
    {
      img:require("./../../../assets/Collection/Character/Character14.png"),
      name: "Ultra",
      number: 7524,
    },
    {
      img:require("./../../../assets/Collection/Character/Character15.png"),
      name: "Marcus",
      number: 9875,
    },
    {
      img:require("./../../../assets/Collection/Character/Character16.png"),
      name: "Vanity",
      number: 1756,
    },
    {
      img:require("./../../../assets/Collection/Character/Character17.png"),
      name: "Rayman",
      number: 8577,
    },
    {
      img:require("./../../../assets/Collection/Character/Character18.png"),
      name: "Nathan",
      number: 1875,
    },
    {
      img:require("./../../../assets/Collection/Character/Character19.png"),
      name: "Banjo",
      number: 1679,
    },
    {
      img:require("./../../../assets/Collection/Character/Character20.png"),
      name: "Billy",
      number: 7820,
    },
    {
      img:require("./../../../assets/Collection/Character/Character21.png"),
      name: "Xenon",
      number: 6681,
    },
    {
      img:require("./../../../assets/Collection/Character/Character22.png"),
      name: "Vixen",
      number: 2472,
    },
    {
      img:require("./../../../assets/Collection/Character/Character23.png"),
      name: "Countess",
      number: 2783,
    },
    {
      img:require("./../../../assets/Collection/Character/Character24.png"),
      name: "Widow",
      number: 2463,
    },
    {
      img:require("./../../../assets/Collection/Character/Character25.png"),
      name: "Akira",
      number: 7825,
    },
    {
      img:require("./../../../assets/Collection/Character/Character26.png"),
      name: "Jack",
      number: 8586,
    },
    {
      img:require("./../../../assets/Collection/Character/Character27.png"),
      name: "Siren",
      number: 8527,
    },
    {
      img:require("./../../../assets/Collection/Character/Character28.png"),
      name: "Harlem",
      number: 2845,
    },
    {
      img:require("./../../../assets/Collection/Character/Character29.png"),
      name: "Riveter",
      number: 1279,
    },
    {
      img:require("./../../../assets/Collection/Character/Character30.png"),
      name: "Sora",
      number: 9840,
    },
    
    
  ];
  
  export function getInvoices() {
    return invoices;
  }

  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }