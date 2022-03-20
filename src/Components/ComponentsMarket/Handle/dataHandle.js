let invoicesHandle = [
    {
      img:require("./../../../assets/Collection/Handle/Handle1.png"),
      name: "Beretta",
      number: 1,
      amount: ["$10,800"],
      due: "12/05/1995",
    },
    {
      img:require("./../../../assets/Collection/Handle/Handle2.png"),
      name: "Scar",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      img:require("./../../../assets/Collection/Handle/Handle3.png"),
      name: "Nova",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
        img:require("./../../../assets/Collection/Handle/Handle4.png"),
        name: "Nova",
        number: 3,
        amount: "$9,500",
        due: "07/22/2003",
      },
    
];




export function getInvoicesHandle() {
    return invoicesHandle;
  }

  export function getInvoiceHandle(number) {
    return invoicesHandle.find(
      (invoiceHandle) => invoiceHandle.number === number
    );
  }