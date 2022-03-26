let invoicesHandle = [
    {
      img:require("./../../../assets/Collection/Handle/Handle1.png"),
      name: "Axe-A",
      number: 1111,
    },
    {
      img:require("./../../../assets/Collection/Handle/Handle2.png"),
      name: "Axe-K",
      number: 2222,

    },
    {
      img:require("./../../../assets/Collection/Handle/Handle3.png"),
      name: "Axe-W",
      number: 3333,
    },
    {
        img:require("./../../../assets/Collection/Handle/Handle4.png"),
        name: "Axe-X",
        number: 4444,
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