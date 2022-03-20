let invoices = [
    {
      img:require("./../../../assets/Collection/Character/Character1.png"),
      name: "Beretta",
      number: 1,
      amount: ["$10,800"],
      due: "12/05/1995",
    },
    {
      img:require("./../../../assets/Collection/Character/Character2.png"),
      name: "Scar",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      img:require("./../../../assets/Collection/Character/Character3.png"),
      name: "Nova",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      img:require("./../../../assets/Collection/Character/Character4.png"),
      name: "Majesty",
      number: 4,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      img:require("./../../../assets/Collection/Character/Character5.png"),
      name: "Cougar",
      number: 5,
      amount: "$4,600",
      due: "01/27/1998",
    },
    {
      img:require("./../../../assets/Collection/Character/Character6.png"),
      name: "Leon",
      number: 6,
    },
    {
      img:require("./../../../assets/Collection/Character/Character7.png"),
      name: "Riveter",
      number: 7,
    },
    {
      img:require("./../../../assets/Collection/Character/Character8.png"),
      name: "Heroin",
      number: 8,
    },
    {
      img:require("./../../../assets/Collection/Character/Character9.png"),
      name: "Mario",
      number: 9,
    },
    {
      img:require("./../../../assets/Collection/Character/Character10.png"),
      name: "Dante",
      number: 10,
    },
    {
      img:require("./../../../assets/Collection/Character/Character11.png"),
      name: "Terror",
      number: 11,
    },
    {
      img:require("./../../../assets/Collection/Character/Character12.png"),
      name: "Cortez",
      number: 12,
    },
    {
      img:require("./../../../assets/Collection/Character/Character13.png"),
      name: "Devlin",
      number: 13,
    },
    {
      img:require("./../../../assets/Collection/Character/Character14.png"),
      name: "Ultra",
      number: 14,
    },
    {
      img:require("./../../../assets/Collection/Character/Character15.png"),
      name: "Marcus",
      number: 15,
    },
    {
      img:require("./../../../assets/Collection/Character/Character16.png"),
      name: "Vanity",
      number: 16,
    },
    {
      img:require("./../../../assets/Collection/Character/Character17.png"),
      name: "Rayman",
      number: 17,
    },
    {
      img:require("./../../../assets/Collection/Character/Character18.png"),
      name: "Nathan",
      number: 18,
    },
    {
      img:require("./../../../assets/Collection/Character/Character19.png"),
      name: "Banjo",
      number: 19,
    },
    {
      img:require("./../../../assets/Collection/Character/Character20.png"),
      name: "Billy",
      number: 20,
    },
    {
      img:require("./../../../assets/Collection/Character/Character21.png"),
      name: "Xenon",
      number: 21,
    },
    {
      img:require("./../../../assets/Collection/Character/Character22.png"),
      name: "Vixen",
      number: 22,
    },
    {
      img:require("./../../../assets/Collection/Character/Character23.png"),
      name: "Countess",
      number: 23,
    },
    {
      img:require("./../../../assets/Collection/Character/Character24.png"),
      name: "Widow",
      number: 24,
    },
    {
      img:require("./../../../assets/Collection/Character/Character25.png"),
      name: "Akira",
      number: 25,
    },
    {
      img:require("./../../../assets/Collection/Character/Character26.png"),
      name: "Jack",
      number: 26,
    },
    {
      img:require("./../../../assets/Collection/Character/Character27.png"),
      name: "Siren",
      number: 27,
    },
    {
      img:require("./../../../assets/Collection/Character/Character28.png"),
      name: "Harlem",
      number: 28,
    },
    {
      img:require("./../../../assets/Collection/Character/Character29.png"),
      name: "Riveter",
      number: 29,
    },
    {
      img:require("./../../../assets/Collection/Character/Character30.png"),
      name: "Sora",
      number: 30,
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