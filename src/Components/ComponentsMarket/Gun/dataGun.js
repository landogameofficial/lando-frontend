let invoicesGun = [
    {
      img:require("./../../../assets/Collection/Gun/gun1.png"),
      name: "Beretta",
      number: 1,
      amount: ["$10,800"],
      due: "12/05/1995",
    },
    {
      img:require("./../../../assets/Collection/Gun/gun2.png"),
      name: "Scar",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      img:require("./../../../assets/Collection/Gun/gun3.png"),
      name: "Nova",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      img:require("./../../../assets/Collection/Gun/gun4.png"),
      name: "Majesty",
      number: 4,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      img:require("./../../../assets/Collection/Gun/gun5.png"),
      name: "Cougar",
      number: 5,
      amount: "$4,600",
      due: "01/27/1998",
    },
    {
      img:require("./../../../assets/Collection/Gun/gun6.png"),
      name: "Leon",
      number: 6,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun7.png"),
      name: "Riveter",
      number: 7,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun8.png"),
      name: "Heroin",
      number: 8,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun9.png"),
      name: "Mario",
      number: 9,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun10.png"),
      name: "Dante",
      number: 10,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun11.png"),
      name: "Terror",
      number: 11,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun12.png"),
      name: "Cortez",
      number: 12,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun13.png"),
      name: "Devlin",
      number: 13,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun14.png"),
      name: "Ultra",
      number: 14,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun15.png"),
      name: "Marcus",
      number: 15,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun16.png"),
      name: "Vanity",
      number: 16,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun17.png"),
      name: "Rayman",
      number: 17,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun18.png"),
      name: "Nathan",
      number: 18,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun19.png"),
      name: "Banjo",
      number: 19,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun20.png"),
      name: "Billy",
      number: 20,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun21.png"),
      name: "Xenon",
      number: 21,
    },

  ];
  
  export function getInvoicesGun() {
    return invoicesGun;
  }

  export function getInvoiceGun(number) {
    return invoicesGun.find(
      (invoiceGun) => invoiceGun.number === number
    );
  }