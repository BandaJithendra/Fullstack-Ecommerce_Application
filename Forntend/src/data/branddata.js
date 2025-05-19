// import dotenv from "dotenv";

// dotenv.config();
// const BASE_URL = process.env.BASE_URL;

export const brandData = ["Kilos", "Mobiles", "Fashion", "Electronics", "Home & Furniture", "Appliances", "Flight Bookings", "Beauty, Toys & More", "Two wheelers"]

// export const categories = ["Fashions", "Electronics", "Accessories", "Groceries"]

// export const clothing_section = ["Men", "Women", "Kids"]

// export const product = {
//     Men: ["Tshirts", "Shirts", "Pants", "Jeans", "Shoes"],
//     Women: ["Dress", "Saree"],
//     Kids: ["Shirts-k", "Pants-k", "Shoes-k"]
// }

// export const productTypes = {
//     Men: {
//         Tshirts: [
//             {
//                 tshirtOrg: "sti",
//                 tshirtName: "Men Printed Round Neck Polyester Multicolor T-Shirt",
//                 sp: "229",
//                 cp: "1499",
//                 dis: "84",
//                 image:"/Images/productListItems/Tshirts/Tshirt-1.webp"
//             },
//             {
//                 tshirtOrg: "VeBNoR",
//                 tshirtName: "Men Printed Round Neck Polyester Grey T-Shirt",
//                 sp: "249",
//                 cp: "999",
//                 dis: "75",
//                 image:"/Images/productListItems/Tshirts/Tshirt-2.webp"
//             },
//             {
//                 tshirtOrg: "StyleFlick",
//                 tshirtName: "Men Printed Round Neck Poly Cotton Green T-Shirt",
//                 sp: "268",
//                 cp: "1299",
//                 dis:"30",
//                 image:"/Images/productListItems/Tshirts/Tshirt-3.webp"
//             },
//             {
//                 tshirtOrg: "JUGULAR",
//                 tshirtName: "Men Printed Round Neck Pure Cotton Red T-Shirt",
//                 sp: "239",
//                 cp: "888",
//                 dis: "73",
//                 image:"/Images/productListItems/Tshirts/Tshirt-4.webp"

//             },
//             {
//                 tshirtOrg: "The Souled Store",
//                 tshirtName: "Men Printed, Typography Hooded Neck Pure Cotton White T-Shirt",
//                 sp: "1298",
//                 cp: "1299",
//                 dis: "1",
//                 image:"/Images/productListItems/Tshirts/Tshirt-5.webp"
                
//             }

//         ],

//         Jeans: [

            


//         ],
//         Shoes: ["Nike", "Jimmy-choo"],
//         shirts: ["US-polo", "Raymond"],
//         pants: ["cotton-pant", "Nylon-pants"]
//     },
//     Women: {
//         Dress: ["Dress1", "Dress2"],
//         Saree: ["Saree1,Saree2"]
//     },
//     Kids: {
//         Shirts: ["Shirt-k1", "Shirt-k2"],
//         Pants: ["Pant-k1", "Pant-k2"],
//         Shoes: ["Shoes-k1", "Shoes-k2"]
//     }
// }


export const products = [
  {
    
    product_id: "101",
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type:"Jeans",
    title: "ROLPH",
    description: "Men Loose Fit Mid Rise Light Blue Jeans",
    price: 803,
    rating: {
      rate: 4.5,
      count: 200,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 102,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type:"Jeans",
    title: "DENIM LOOK",
    description: "Men Loose Fit Mid Rise Grey Jeans",
    price: 479,
    rating: {
      rate: 4.5,
      count: 200,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 103,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type:"Jeans",
    title: "Spykar",
    description: "Men Slim Mid Rise Blue Jeans",
    price: 1049,
    rating: {
      rate: 4.5,
      count: 200,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 104,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "T-shirt",
    title: "Madfrog",
    description: "Men Solid Round Neck Polyester White T-Shirt",
    price: 269,
    rating: {
      rate: 4.2,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 105,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "T-shirt",
    title: "Force",
    description: "Men Printed Round Neck Pure Cotton Grey T-Shirt",
    price: 295,
    rating: {
      rate: 4.2,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 106,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "T-shirt",
    title: "VeBNoR",
    description: "Men Printed Polo Neck Polyester Grey T-Shirt",
    price: 269,
    rating: {
      rate: 4.2,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 107,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "Jacket",
    title: "BEWAKOOF",
    description: "Men Printed Puffer Jacket",
    price: 1699,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 108,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "Jacket",
    title: "FUGAZEE",
    description: "Men Self Design Casual Jacket",
    price: 2599,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 109,
    category: "Fashions",
    sub_category: "Men's Wear",
    product_type: "Jacket",
    title: "Roadster",
    description: "Men Washed Jacket",
    price: 756,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 110,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Dress",
    title: "PURVAJA",
    description: "Women Fit and Flare Multicolor Dress",
    price: 274,
    rating: {
      rate: 4.7,
      count: 220,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 111,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Dress",
    title: "HANDSOME KING",
    description: "Women Gown Multicolor Dress",
    price: 500,
    rating: {
      rate: 4.7,
      count: 220,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 112,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Dress",
    title: "Janasya",
    description: "Women Tiered Yellow, Light Green Dress",
    price: 839,
    rating: {
      rate: 4.7,
      count: 220,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 113,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Sarees",
    title:"Samah",
    description: "Embellished, Embroidered Bollywood Net Saree  (Brown)",
    price: 993,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 114,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Sarees",
    title: "Tejal Creation",
    description: "Embellished Bollywood Cotton Silk Saree  (Green)",
    price: 648,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 115,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Sarees",
    title: "Balika bodhu",
    description: "Solid/Plain Handloom Pure Cotton Saree  (Blue, White)",
    price: 361,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 116,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Blouse",
    title: "Fashiony",
    description: "Round Neck Women Blouse",
    price: 238,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 117,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Blouse",
    title: "Bong ButiQ",
    description: "V-Neck Women Blouse",
    price: 339,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 118,
    category: "Fashions",
    sub_category: "Women's Wear",
    product_type: "Blouse",
    title: "NANCY DESIGNER",
    description: "V-Neck Women Blouse",
    price: 333,
    rating: {
      rate: 4.0,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 119,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Shirt",
    title: "MADE IN THE SHADE",
    description: "Boys Regular Fit Self Design Casual Shirt",
    price: 474,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 120,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Shirt",
    title: "GUNJA FASHION",
    description: "Boys Regular Fit Checkered Spread Collar Casual Shirt",
    price: 376,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 121,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Shirt",
    title: "NTD FASHION",
    description: "Girls Regular Fit Striped Casual Shirt",
    price: 234,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 122,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Pants",
    title: "clothclub",
    description: "Boys & Girls Regular Mid Rise Dark Blue Jeans",
    price: 495,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 123,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Pants",
    title: "Wishkaro",
    description: "Boys & Girls Jogger Fit Mid Rise Dark Blue Jeans",
    price: 476,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 124,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "Pants",
    title: "NSS JNS",
    description: "Girls Relaxed Fit Mid Rise White Jeans",
    price: 726,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 125,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "T-shirts & Shorts",
    title: "SmartRAHO",
    description: "Boys Casual T-shirt Shorts (BLUE)",
    price: 330,
    rating: {
      rate: 4.3,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 126,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "T-shirts & Shorts",
    title: "ACTLIVE",
    description: "Boys Casual T-shirt Shorts  (GREEN)",
    price: 398,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 127,
    category: "Fashions",
    sub_category: "Kid's Wear",
    product_type: "T-shirts & Shorts",
    title: "new gen",
    description: "Baby Girls Casual T-shirt Shorts  (Pink)",
    price: 166,
    rating: {
      rate: 4.6,
      count: 100,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 201,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone",
    title: "Google Pixel 9",
    description: "Google Pixel 9 (Porcelain, 256 GB) (12 GB RAM)",
    price: 74999,
    rating: {
      rate: 4.8,
      count: 500,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 202,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone",
    title: "Apple iPhone 16",
    description: "Apple iPhone 16 (Teal, 128 GB)",
    price: 74900,
    rating: {
      rate: 4.8,
      count: 500,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 203,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone",
    title: "SAMSUNG Galaxy S25 Ultra 5G",
    description: "SAMSUNG Galaxy S25 Ultra 5G (Titanium Black, 256 GB) (12 GB RAM)",
    price: 129999,
    rating: {
      rate: 4.8,
      count: 500,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 204,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone Case",
    title: "Fablue Back Cover",
    description: "Fablue Back Cover for Motorola Edge 50 Fusion, Moto Edge 50 Fusion  (Blue, Rugged Armor, Pack of: 1)",
    price: 293,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 205,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone Case",
    title: "GLOBAL NOMAD Back Cover",
    description: "GLOBAL NOMAD Back Cover for Samsung Galaxy M04, Samsung Galaxy F04, Samsung Galaxy A04e  (Black, Shock Proof, Pack of: 1)",
    price: 219,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 206,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Smartphone Case",
    title: "Flipkart SmartBuy Back Cover",
    description: "Flipkart SmartBuy Back Cover for Samsung Galaxy S24 Plus 5G  (Blue, Magsafe, Pack of: 1)",
    price: 289,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 207,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Mobile Chargers",
    title: "SB 80 W SuperVOOC 7.3",
    description: "SB 80 W SuperVOOC 7.3 A Wall Charger for Mobile with Detachable Cable  (White, Cable Included)",
    price: 349,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 208,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Mobile Chargers",
    title: "MAK 25 W PD 3",
    description: "MAK 25 W PD 3 A Wall Charger for Mobile with Detachable Cable  (White, Cable Included)",
    price: 399,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 209,
    category: "Electronics",
    sub_category: "Mobile Phones",
    product_type: "Mobile Chargers",
    title: "Webilla 5 W 3.1",
    description: "Webilla 5 W 3.1 A Wall Charger for Mobile with Detachable Cable  (Black, Cable Included)",
    price: 286,
    rating: {
      rate: 4.3,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 210,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptops",
    title: "Apple MacBook AIR Apple M2",
    description: "Apple MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY13HN/A (13.6 Inch, Starlight, 1.24 kg)",
    price: 78099,
    rating: {
      rate: 4.9,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 211,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptops",
    title: "ASUS ROG Strix G15",
    description: "ASUS ROG Strix G15 AMD Ryzen 7 Octa Core 6800HS - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) G513RC-HN061W Gaming Laptop (15.6 Inch, Eclipse Gray, 2.10 Kg)",
    price: 78999,
    rating: {
      rate: 4.9,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 212,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptops",
    title: "ASUS Vivobook 15",
    description: "ASUS Vivobook 15 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) X1504ZA-NJ322WS Thin and Light Laptop (15.6 Inch, Cool Silver, 1.70 Kg, With MS Office)",
    price: 32990,
    rating: {
      rate: 4.9,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 213,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Sleeve",
    title: "Tomtoc",
    description: "Defender A13 Laptop Sleeve - Pink 13 to 14 Inchs",
    price: 3295,
    rating: {
      rate: 4.1,
      count: 80,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 214,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Sleeve",
    title: "Straplt Laptop Sleeve With Pouch Case Cover",
    description: "Straplt Laptop Sleeve With Pouch Case Cover for 15.6-16 Inch With Handle, Waterproof Laptop Sleeve/Cover (Grey, 16 inch)",
    price: 283,
    rating: {
      rate: 4.1,
      count: 80,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 215,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Sleeve",
    title: "Inateck",
    description: "EdgeKeeper Laptop Bag - Black Grey 15.6 Inches",
    price: 4495,
    rating: {
      rate: 4.1,
      count: 80,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 216,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Skins",
    title: "SCOTLON All Panel_Blue jeep_Premium Laptop Skin",
    description: "SCOTLON All Panel_Blue jeep_Premium Laptop Skin Vinyl Laptop Decal 15.6",
    price: 249,
    rating: {
      rate: 4.1,
      count: 150,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 217,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Skins",
    title: "Skinny Full Body Laptop Skin",
    description: "Skinny Full Body Laptop Skin HD Quality Sticker for Laptops Upto 15.6 FullBody_34 Printing Vinyl Laptop Decal 15.6",
    price: 195,
    rating: {
      rate: 3.8,
      count: 120,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 218,
    category: "Electronics",
    sub_category: "Laptops",
    product_type: "Laptop Skins",
    title: "Skinny Full Body Laptop Skin Bubble-Free",
    description: "Skinny Full Body Laptop Skin Bubble-Free HD Quality Sticker for Laptops Upto 15.6 _K31 Babble free Vinyl Laptop Decal 15.6",
    price: 173,
    rating: {
      rate: 3.4,
      count: 246,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 219,
    category: "Electronics",
    sub_category: "Headphones",
    product_type: "Wireless Headphones",
    title: "boAt Rockerz 450 w",
    description: "boAt Rockerz 450 w/ 40mm Drivers, 15 HRS Playback, Soft Padded Earcups Bluetooth (Hazel Beige, On the Ear)",
    price: 1299,
    rating: {
      rate: 4.3,
      count: 380,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 220,
    category: "Electronics",
    sub_category: "Headphones",
    product_type: "Wireless Headphones",
    title: "SONY 310AP Wired",
    description: "SONY 310AP Wired  (Black, On the Ear)",
    price: 949,
    rating: {
      rate: 4.2,
      count: 270,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 221,
    category: "Electronics",
    sub_category: "Headphones",
    product_type: "Wireless Headphones",
    title: "Bose QuietComfort Headphones",
    description: "Noise-cancelling wireless headphones",
    price: 899,
    rating: {
      rate: 3.9,
      count: 190,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Accessories",
    sub_category: "Watches",
    title: "Smart Watch",
    description: "track your health and fitness with a smart watch",
    price: 150,
    rating: {
      rate: 4.4,
      count: 220,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Accessories",
    sub_category: "Jewelry",
    title: "Necklace",
    description: "beautiful gold necklace",
    price: 300,
    rating: {
      rate: 4.9,
      count: 130,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Accessories",
    sub_category: "Bags",
    title: "Leather Handbag",
    description: "premium leather handbag",
    price: 250,
    rating: {
      rate: 4.6,
      count: 90,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Accessories",
    sub_category: "Sunglasses",
    title: "Sunglasses",
    description: "stylish sunglasses for summer",
    price: 80,
    rating: {
      rate: 4.3,
      count: 350,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Fruits",
    title: "Apple",
    description: "fresh and organic apples",
    price: 5,
    rating: {
      rate: 4.8,
      count: 200,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Vegetables",
    title: "Carrot",
    description: "fresh carrots from local farm",
    price: 2,
    rating: {
      rate: 4.6,
      count: 180,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Beverages",
    title: "Orange Juice",
    description: "freshly squeezed orange juice",
    price: 4,
    rating: {
      rate: 4.7,
      count: 300,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Snacks",
    title: "Chips",
    description: "crispy potato chips",
    price: 3,
    rating: {
      rate: 4.2,
      count: 400,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Beverages",
    title: "Coffee",
    description: "premium ground coffee",
    price: 10,
    rating: {
      rate: 4.5,
      count: 350,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  },
  {
    product_id: 101,
    category: "Groceries",
    sub_category: "Fruits",
    title: "Banana",
    description: "fresh bananas",
    price: 1,
    rating: {
      rate: 4.4,
      count: 500,
    }
    // image: ${BASE_URL}/images/jeans.jpg,
  }
];

