let invoicesSkill = [
    {
      img:require("./../../../assets/Collection/Skill/Skill1.png"),
      name: "Resist Bullets",
      number: 1011,

    },
    {
      img:require("./../../../assets/Collection/Skill/Skill2.png"),
      name: "Jump",
      number: 2022,

    },
    {
      img:require("./../../../assets/Collection/Skill/Skill3.png"),
      name: "Throw Fire",
      number: 3033,

    },
    
];




export function getInvoicesSkill() {
    return invoicesSkill;
  }

  export function getInvoiceSkill(number) {
    return invoicesSkill.find(
      (invoiceSkill) => invoiceSkill.number === number
    );
  }