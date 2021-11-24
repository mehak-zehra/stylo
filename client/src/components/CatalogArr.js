const catalog = [
    {
        id: 1,
        category: "women",
        title: "Casual",
        type: "Monthly",
        description: "This is the basic package for women clothing who are looking for casual clothes, and like to keep up with the latest trends",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_casual_monthly.jpeg",
        items: [
            { name: "Dress", quantity: 2 },
            { name: "Matching Bag", quantity: 1 },
            { name: "Shoes", quantity: 1 },
            { name: "Scarf", quantity: 2 },
        ],
        price: 49.99
    },
    {
        id: 2,
        category: "women",
        title: "Casual",
        type: "Quarterly",
        description: "This is the basic package for woman clothing for those who are looking for casual clothes, but don't find shopping interesting",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_casual_quarterly.jpeg",
        items: [
            { name: "Dress", quantity: 5 },
            { name: "Matching Bag", quantity: 3 },
            { name: "Shoes", quantity: 3 },
            { name: "Scarf", quantity: 6 },
        ],
        price: 199.99
    },
    {
        id: 3,
        category: "women",
        title: "Casual",
        type: "Annual",
        description: "This is the basic package for women who wear casual clothes but have no style. Don't worry, we are were to help!",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_casual_annual.jpeg",
        items: [
            { name: "Dress", quantity: 10 },
            { name: "Matching Bag", quantity: 5 },
            { name: "Shoes", quantity: 6 },
            { name: "Scarf", quantity: 10 },
        ],
        price: 499.99
    },
    {
        id: 4,
        category: "women",
        title: "Business",
        type: "Monthly",
        description: "This is the business package for women looking for professional clothes, and need to look their best",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_business_monthly.jpeg",
        items: [
            { name: "Dress", quantity: 2 },
            { name: "Matching Bag", quantity: 1 },
            { name: "Shoes", quantity: 1 },
            { name: "Scarf", quantity: 2 },
        ],
        price: 49.99
    },
    {
        id: 5,
        category: "women",
        title: "Business",
        type: "Quarterly",
        description: "This is the business package for those who are looking for the average individual looking to new work clothes",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_business_quarterly.png",
        items: [
            { name: "Dress", quantity: 5 },
            { name: "Matching Bag", quantity: 3 },
            { name: "Shoes", quantity: 3 },
            { name: "Scarf", quantity: 6 },
        ],
        price: 199.99
    },
    {
        id: 6,
        category: "women",
        title: "Business",
        type: "Annual",
        description: "This is the business women package is perfect for those who are working from home but want to update their collection every year",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_business_annual.png",
        items: [
            { name: "Dress", quantity: 10 },
            { name: "Matching Bag", quantity: 5 },
            { name: "Shoes", quantity: 6 },
            { name: "Scarf", quantity: 10 },
        ],
        price: 499.99
    },
    {
        id: 4,
        category: "women",
        title: "Formal",
        type: "Monthly",
        description: "This is the professional package for those who want to make a statement each and every month",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_formal_monthly.jpeg",
        items: [
            { name: "Dress", quantity: 2 },
            { name: "Matching Bag", quantity: 1 },
            { name: "Shoes", quantity: 1 },
            { name: "Scarf", quantity: 2 },
        ],
        price: 49.99
    },
    {
        id: 5,
        category: "women",
        title: "Formal",
        type: "Quarterly",
        description: "This is the professional package for those need to look stunning, and have events to attend every now and again",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_formal_quarterly.jpeg",
        items: [
            { name: "Dress", quantity: 5 },
            { name: "Matching Bag", quantity: 3 },
            { name: "Shoes", quantity: 3 },
            { name: "Scarf", quantity: 6 },
        ],
        price: 199.99
    },
    {
        id: 6,
        category: "women",
        title: "Formal",
        type: "Annual",
        description: "This is the professional women package is perfect for those who steal the show every time these step out of the house",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_women_formal_annual..jpeg",
        items: [
            { name: "Dress", quantity: 10 },
            { name: "Matching Bag", quantity: 5 },
            { name: "Shoes", quantity: 6 },
            { name: "Scarf", quantity: 10 },
        ],
        price: 499.99
    },
    {
        id: 1,
        category: "men",
        title: "Casual",
        type: "Monthly",
        description: "This is the basic package for men clothing who are looking for casual clothes, and like to keep up with the latest trends",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_casual_monthly.jpeg",
        items: [
            { name: "Dress", quantity: 2 },
            { name: "Watches", quantity: 1 },
            { name: "Shoes", quantity: 1 },
            { name: "Scarf", quantity: 2 },
        ],
        price: 49.99
    },
    {
        id: 2,
        category: "men",
        title: "Casual",
        type: "Quarterly",
        description: "This is the basic package for men clothing for those who are looking for casual clothes, but don't find shopping interesting",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_casual_quarterly.jpeg",
        items: [
            { name: "Dress", quantity: 5 },
            { name: "Watches", quantity: 3 },
            { name: "Shoes", quantity: 3 },
            { name: "Scarf", quantity: 6 },
        ],
        price: 199.99
    },
    {
        id: 3,
        category: "men",
        title: "Casual",
        type: "Annual",
        description: "This is the basic package for men who wear casual clothes but have no style. Don't worry, we are were to help!",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_casual_annual.jpeg",
        items: [
            { name: "Dress", quantity: 10 },
            { name: "Watches", quantity: 5 },
            { name: "Shoes", quantity: 6 },
            { name: "Scarf", quantity: 10 },
        ],
        price: 499.99
    },
    {
        id: 4,
        category: "men",
        title: "Formal",
        type: "Monthly",
        description: "This is the professional package for those who want to make a statement each and every month",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_formal_montly.jpeg",
        items: [
            { name: "Dress", quantity: 2 },
            { name: "Watches", quantity: 1 },
            { name: "Shoes", quantity: 1 },
            { name: "Scarf", quantity: 2 },
        ],
        price: 49.99
    },
    {
        id: 5,
        category: "men",
        title: "Formal",
        type: "Quarterly",
        description: "This is the professional package for those need to look stunning, and have events to attend every now and again",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_formal_quarterly.jpeg",
        items: [
            { name: "Dress", quantity: 5 },
            { name: "Watches", quantity: 3 },
            { name: "Shoes", quantity: 3 },
            { name: "Scarf", quantity: 6 },
        ],
        price: 199.99
    },
    {
        id: 6,
        category: "men",
        title: "Formal",
        type: "Annual",
        description: "This is the professional men package is perfect for those who steal the show every time these step out of the house",
        image_url: "https://mehak-file-service.herokuapp.com/file/stylo_men_formal_annual.jpeg",
        items: [
            { name: "Dress", quantity: 10 },
            { name: "Watches", quantity: 5 },
            { name: "Shoes", quantity: 6 },
            { name: "Scarf", quantity: 10 },
        ],
        price: 499.99
    },
];

export default catalog;