let invoicesSkill = [
    {
      img:require("./../../../assets/Collection/Skill/Skill1.png"),
      name: "Beretta",
      number: 1,
      amount: ["$10,800"],
      due: "12/05/1995",
    },
    {
      img:require("./../../../assets/Collection/Skill/Skill2.png"),
      name: "Scar",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      img:require("./../../../assets/Collection/Skill/Skill3.png"),
      name: "Nova",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
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