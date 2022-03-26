let invoicesGun = [
    {
      img:require("./../../../assets/Collection/Gun/gun1.png"),
      name: "Mini Uzi",
      number: 5248,

    },
    {
      img:require("./../../../assets/Collection/Gun/gun2.png"),
      name: "G36C",
      number: 3641,

    },
    {
      img:require("./../../../assets/Collection/Gun/gun3.png"),
      name: "G3A4",
      number: 3784,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun4.png"),
      name: "UMP45",
      number: 8544,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun5.png"),
      name: "R700",
      number: 1285,
 
    },
    {
      img:require("./../../../assets/Collection/Gun/gun6.png"),
      name: "Galil",
      number: 6741,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun7.png"),
      name: "Steyr",
      number: 4777,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun8.png"),
      name: "M240 SAW",
      number: 8574,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun9.png"),
      name: "M4A1",
      number: 7419,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun10.png"),
      name: "K10",
      number: 1410,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun11.png"),
      name: "Kriss35",
      number: 1741,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun12.png"),
      name: "P228",
      number: 7812,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun13.png"),
      name: "MP7",
      number: 1747,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun14.png"),
      name: "M21",
      number: 7124,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun15.png"),
      name: "Famas",
      number: 6512,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun16.png"),
      name: "M14",
      number: 1963,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun17.png"),
      name: "M9",
      number: 9677,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun18.png"),
      name: "Mini Uzi-R",
      number: 8672,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun19.png"),
      name: "Mini Uzi-X",
      number: 6779,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun20.png"),
      name: "USP45",
      number: 6241,
    },
    {
      img:require("./../../../assets/Collection/Gun/gun21.png"),
      name: "Shotgun",
      number: 7541,
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