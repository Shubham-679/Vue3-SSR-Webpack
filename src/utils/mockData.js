export const products =  [
    { 
        id: 0, 
        name: "Onion",
        mrpRup: 'MRP: Rs 27',
        exressDelivery: true,
        discountPrice: 100,
        discountPercent: null,
        image: "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
        qtyAndPrice: [
            { id: 1, qty: '1Kg',  price: 27, isSelected:true },
            { id: 2, qty: '2Kg',  price: 53, isSelected:false },
            { id: 3, qty: '5Kg',  price: 137, isSelected:false },
        ]
    },
    { 
        id: 1, 
        name: "Farm Eggs Tray",
        mrpRup: 'MRP: Rs 120',
        exressDelivery: true,
        discountPrice: '16',
        discountPercent: null,
        image: "https://www.bigbasket.com/media/uploads/p/s/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
        qtyAndPrice: [
            { id: 1, qty: '12 pcs',  price: 120, isSelected: true },
            { id: 1, qty: '30 pcs',  price: 290, isSelected: false },
        ]
    },
    { 
        id: 2, 
        name: "Dettol Antiseptic",
        mrpRup: 'MRP: Rs 27',
        exressDelivery: true,
        discountPrice: '100',
        discountPercent: null,
        image: "https://www.bigbasket.com/media/uploads/p/s/253539_9-dettol-antiseptic-disinfectant-liquid.jpg",
        qtyAndPrice: [
            { id: 1, qty: '60 ml',  price: 27, isSelected: true },
            { id: 2, qty: '250 ml',  price: 110, isSelected: false },
            { id: 3, qty: '500 ml',  price: 210, isSelected: false },
            { id: 4, qty: '1 litre',  price: 420, isSelected: false },
        ]
    },
    { 
        id: 3, 
        name: "Ashirvad Atta",
        mrpRup: 'MRP: Rs 20',
        exressDelivery: true,
        discountPrice: null,
        discountPercent: '6%',
        image: "https://www.bigbasket.com/media/uploads/p/s/161826_7-aashirvaad-atta-whole-wheat.jpg",
        qtyAndPrice: [
            { id: 1, qty: '1 kg Pouch',  price: 20, isSelected: false },
            { id: 2, qty: '2 kg Pouch',  price: 40, isSelected: true },
            { id: 3, qty: '5 kg Pouch',  price: 90, isSelected: false },
            { id: 4, qty: '10 kg Pouch',  price: 150, isSelected: false },
        ]
    },
    { 
        id: 4, 
        name: "Carrot",
        mrpRup: 'MRP: Rs 70',
        exressDelivery: true,
        discountPrice: null,
        discountPercent: '6%',
        image: "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
        qtyAndPrice: [
            { id: 1, qty: '1 kg',  price: 70, isSelected: false },
            { id: 2, qty: '2 kg',  price: 140, isSelected: true },
            { id: 3, qty: '5 kg',  price: 300, isSelected: false },
        ]
    }
]