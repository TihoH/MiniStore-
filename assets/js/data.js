export const products = [
  {
    id: 104,
    category: "watch",
    title: "Samsung Galaxy Watch Ultra",
    brand: "Samsung",
    rating: 4.9,
    image: "./assets/images/products/watch/watch-4.webp",
    tags: ["premium"],
    description:
      "Samsung Galaxy Watch Ultra is a premium smartwatch with a durable body, bright display, advanced health tracking and long battery life for everyday use.",
    fullDescription:
      "Samsung Galaxy Watch Ultra is designed for users who want a strong, premium and functional smartwatch for everyday life, sport and travel. It has a durable body, a bright display and a comfortable design that works well both for active days and daily use. The watch helps you track workouts, monitor health indicators, receive notifications and stay connected without constantly using your phone. It is a great option for people who need a smartwatch with reliable performance, stylish appearance and advanced features in one device.",
    additionalInfo:
      "Brand: Samsung. Category: Smartwatch. SKU: WATCH-104. Available colors: Orange, Green, Blue, Black. Available sizes: XL, L, M, S. This model is suitable for fitness tracking, outdoor activity, daily notifications and health monitoring. It is positioned as a premium product with strong build quality and advanced smart features.",
    reviews: [
      {
        author: "Alex Morgan",
        rating: 5,
        text: "The watch feels very premium and solid. The display is bright, the design looks modern and the fitness features are useful every day.",
      },
      {
        author: "Emma Wilson",
        rating: 4,
        text: "A strong smartwatch with great build quality and useful features. It may feel a little large for some people, but overall it is excellent.",
      },
    ],
    colors: ["Orange", "Green", "Blue", "Black"],
    variants: [
      { size: "XL", price: 699, stock: 8 },
      { size: "L", price: 679, stock: 6 },
      { size: "M", price: 659, stock: 5 },
      { size: "S", price: 649, stock: 4 },
    ],
    sku: "WATCH-104",
  },
  {
    id: 3,
    category: "mobile",
    title: "Samsung Galaxy S24",
    brand: "Samsung",
    rating: 4.8,
    image: "./assets/images/products/galaxy-s24.webp",
    tags: ["popular", "new"],
    description:
      "Samsung Galaxy S24 is a powerful smartphone with a sharp display, fast performance, modern camera system and reliable battery for daily tasks.",
    fullDescription:
      "Samsung Galaxy S24 is a modern smartphone made for people who need speed, a high-quality screen and a reliable camera in daily use. It is suitable for browsing, social media, photos, videos, games and work tasks. The phone offers smooth performance, a clean design and a comfortable size for everyday handling. It is a strong choice for users who want a flagship-style Android experience with good battery life and stable performance throughout the day.",
    additionalInfo:
      "Brand: Samsung. Category: Mobile phone. SKU: MOBILE-3. Available colors: Black, White, Blue, Gray. Available storage options: 128GB, 256GB, 512GB. This phone is suitable for daily tasks, content creation, communication, entertainment and mobile photography.",
    reviews: [
      {
        author: "Daniel Carter",
        rating: 5,
        text: "The phone is fast, comfortable and has a very sharp display. The camera quality is also strong for everyday photos and videos.",
      },
      {
        author: "Olivia Brown",
        rating: 4,
        text: "A very good smartphone with smooth performance and a premium feel. Battery life is reliable for a full day of normal use.",
      },
    ],
    colors: ["Black", "White", "Blue", "Gray"],
    variants: [
      { size: "128GB", price: 1199, stock: 10 },
      { size: "256GB", price: 1299, stock: 7 },
      { size: "512GB", price: 1499, stock: 4 },
    ],
    sku: "MOBILE-3",
  },
  {
    id: 201,
    category: "headphones",
    title: "AirPods Pro 2",
    brand: "Apple",
    rating: 4.9,
    image: "./assets/images/products/headphones/airpods-pro-2.webp",
    tags: ["premium", "popular"],
    description:
      "AirPods Pro 2 offer clear sound, active noise cancellation, comfortable fit and seamless wireless connection for music, calls and travel.",
    fullDescription:
      "AirPods Pro 2 are premium wireless earbuds designed for comfortable listening, calls, travel and everyday use. They offer clear sound, strong noise cancellation and a compact design that is easy to carry. The earbuds are convenient for music, podcasts, online meetings and phone calls. They are especially useful for users who want a simple wireless experience, quick connection and comfortable fit during daily activities.",
    additionalInfo:
      "Brand: Apple. Category: Headphones. SKU: HEADPHONES-201. Available colors: White, Black, Silver. Size: One Size. This product is suitable for music, calls, travel, studying, work and everyday wireless listening.",
    reviews: [
      {
        author: "Sophia Miller",
        rating: 5,
        text: "Very comfortable earbuds with clear sound and strong noise cancellation. They connect quickly and are easy to use every day.",
      },
      {
        author: "James Anderson",
        rating: 5,
        text: "Great for music and calls. The case is compact, the sound is clean and the fit feels comfortable for long use.",
      },
    ],
    colors: ["White", "Black", "Silver"],
    variants: [{ size: "One Size", price: 349, stock: 14 }],
    sku: "HEADPHONES-201",
  },
  {
    id: 108,
    category: "watch",
    title: "Amazfit Balance",
    brand: "Amazfit",
    rating: 4.5,
    image: "./assets/images/products/watch/watch-8.webp",
    tags: ["budget"],
    description:
      "Amazfit Balance is a lightweight smartwatch with fitness tracking, health monitoring, stylish design and strong battery life at a good price.",
    fullDescription:
      "Amazfit Balance is a lightweight smartwatch for users who want useful smart features without paying for a premium flagship model. It is good for fitness tracking, daily activity control, notifications and basic health monitoring. The watch has a stylish design, comfortable fit and strong battery life, making it practical for everyday use. It is a balanced choice for people who need a reliable smartwatch for work, sport and daily routines.",
    additionalInfo:
      "Brand: Amazfit. Category: Smartwatch. SKU: WATCH-108. Available colors: Black, Blue, Green, Gray. Available sizes: XL, L, M, S. This model is focused on value, comfort, fitness features and long battery life.",
    reviews: [
      {
        author: "Michael Scott",
        rating: 4,
        text: "Good smartwatch for the price. It is light, comfortable and has enough functions for everyday use and workouts.",
      },
      {
        author: "Grace Taylor",
        rating: 5,
        text: "I like the battery life and simple design. It works well for steps, notifications and basic health tracking.",
      },
    ],
    colors: ["Black", "Blue", "Green", "Gray"],
    variants: [
      { size: "XL", price: 299, stock: 18 },
      { size: "L", price: 289, stock: 14 },
      { size: "M", price: 279, stock: 12 },
      { size: "S", price: 269, stock: 9 },
    ],
    sku: "WATCH-108",
  },
  {
    id: 1,
    category: "mobile",
    title: "iPhone 15 Pro",
    brand: "Apple",
    rating: 4.9,
    image: "./assets/images/products/iphone15.webp",
    tags: ["premium"],
    description:
      "iPhone 15 Pro is a premium smartphone with a powerful chip, excellent camera, smooth display and elegant design for everyday and professional use.",
    fullDescription:
      "iPhone 15 Pro is a premium smartphone for users who want high performance, a strong camera system and a smooth everyday experience. It is suitable for photos, video recording, social media, gaming, work tasks and daily communication. The phone has a stylish design, fast performance and a high-quality display. It is a good choice for users who want a reliable device with premium materials, long-term software support and strong overall performance.",
    additionalInfo:
      "Brand: Apple. Category: Mobile phone. SKU: MOBILE-1. Available colors: Black, White, Blue, Natural. Available storage options: 128GB, 256GB, 512GB. This product is suitable for professional use, content creation, photography, video, work and everyday communication.",
    reviews: [
      {
        author: "Liam Harris",
        rating: 5,
        text: "The phone feels premium, works very fast and takes excellent photos. It is expensive, but the quality is clear.",
      },
      {
        author: "Mia Johnson",
        rating: 5,
        text: "Great display, strong camera and smooth performance. It is a reliable phone for both work and daily use.",
      },
    ],
    colors: ["Black", "White", "Blue", "Natural"],
    variants: [
      { size: "128GB", price: 1499, stock: 8 },
      { size: "256GB", price: 1649, stock: 6 },
      { size: "512GB", price: 1899, stock: 3 },
    ],
    sku: "MOBILE-1",
  },
  {
    id: 105,
    category: "watch",
    title: "Google Pixel Watch 3",
    brand: "Google",
    rating: 4.7,
    image: "./assets/images/products/watch/watch-5.webp",
    tags: ["new"],
    description:
      "Google Pixel Watch 3 combines a clean design, smart notifications, fitness features and smooth integration with Android devices.",
    fullDescription:
      "Google Pixel Watch 3 is a modern smartwatch with a clean design and useful smart features for Android users. It is made for daily notifications, fitness tracking, health monitoring and quick access to important information. The watch looks minimal, feels comfortable and works well as part of a connected Android setup. It is a good option for users who want a stylish smartwatch with simple controls and practical features for everyday life.",
    additionalInfo:
      "Brand: Google. Category: Smartwatch. SKU: WATCH-105. Available colors: Black, Silver, Blue, Green. Available sizes: XL, L, M, S. This smartwatch is suitable for Android users, daily notifications, workouts and health tracking.",
    reviews: [
      {
        author: "Noah White",
        rating: 5,
        text: "Very clean design and smooth connection with Android. It is comfortable to wear and useful during the day.",
      },
      {
        author: "Ava Martin",
        rating: 4,
        text: "Good smartwatch with a simple interface and nice fitness features. I like the design and notification support.",
      },
    ],
    colors: ["Black", "Silver", "Blue", "Green"],
    variants: [
      { size: "XL", price: 549, stock: 9 },
      { size: "L", price: 529, stock: 7 },
      { size: "M", price: 509, stock: 6 },
      { size: "S", price: 499, stock: 5 },
    ],
    sku: "WATCH-105",
  },
  {
    id: 6,
    category: "mobile",
    title: "Xiaomi 14",
    brand: "Xiaomi",
    rating: 4.7,
    image: "./assets/images/products/xiaomi14.webp",
    tags: ["popular", "sale"],
    description:
      "Xiaomi 14 is a fast and stylish smartphone with a bright display, strong camera, quick charging and excellent value for its price.",
    fullDescription:
      "Xiaomi 14 is a powerful and stylish smartphone that offers strong performance, a bright display and fast charging at a competitive price. It is suitable for people who use their phone actively during the day for browsing, videos, photos, games and communication. The phone combines modern hardware, a clean design and practical battery features. It is a good choice for users who want flagship-level speed and comfort without choosing the most expensive option.",
    additionalInfo:
      "Brand: Xiaomi. Category: Mobile phone. SKU: MOBILE-6. Available colors: Black, White, Green, Blue. Available storage options: 128GB, 256GB, 512GB. This model is suitable for fast charging, media, games, photos and daily productivity.",
    reviews: [
      {
        author: "Ethan Clark",
        rating: 5,
        text: "Fast phone with a bright screen and very quick charging. It feels like a great value for the price.",
      },
      {
        author: "Chloe Lewis",
        rating: 4,
        text: "The design is nice and performance is smooth. Camera quality is good for daily photos and videos.",
      },
    ],
    colors: ["Black", "White", "Green", "Blue"],
    variants: [
      { size: "128GB", price: 799, stock: 14 },
      { size: "256GB", price: 899, stock: 10 },
      { size: "512GB", price: 1099, stock: 6 },
    ],
    sku: "MOBILE-6",
  },
  {
    id: 202,
    category: "headphones",
    title: "Sony WH-1000XM5",
    brand: "Sony",
    rating: 4.8,
    image: "./assets/images/products/headphones/sony-wh-1000xm5.webp",
    tags: ["premium"],
    description:
      "Sony WH-1000XM5 headphones deliver premium sound, excellent noise cancellation, soft ear cushions and long battery life for music and calls.",
    fullDescription:
      "Sony WH-1000XM5 headphones are designed for people who want premium sound quality, strong noise cancellation and comfort during long listening sessions. They are suitable for music, work, travel, calls and studying. The headphones have soft ear cushions, a modern design and long battery life, making them convenient for daily use. They are a strong option for users who need clear sound and a quiet listening experience in noisy environments.",
    additionalInfo:
      "Brand: Sony. Category: Headphones. SKU: HEADPHONES-202. Available colors: Black, Silver, Blue. Size: One Size. This product is suitable for travel, office work, online calls, music, studying and noise reduction.",
    reviews: [
      {
        author: "Benjamin Hall",
        rating: 5,
        text: "Excellent headphones with very strong noise cancellation. They are comfortable and sound great for music and calls.",
      },
      {
        author: "Emily Young",
        rating: 4,
        text: "The sound quality is premium and the battery lasts long. They are comfortable even after several hours of use.",
      },
    ],
    colors: ["Black", "Silver", "Blue"],
    variants: [{ size: "One Size", price: 399, stock: 9 }],
    sku: "HEADPHONES-202",
  },
  {
    id: 102,
    category: "watch",
    title: "Apple Watch Ultra 2",
    brand: "Apple",
    rating: 5.0,
    image: "./assets/images/products/watch/watch-2.webp",
    tags: ["premium", "popular"],
    description:
      "Apple Watch Ultra 2 is a high-end smartwatch with a rugged case, bright display, advanced workout tracking and strong battery performance.",
    fullDescription:
      "Apple Watch Ultra 2 is a high-end smartwatch made for users who need durability, advanced workout tracking and premium smart features. It is suitable for sport, travel, outdoor activity and everyday use. The watch offers a rugged design, bright screen, useful health tools and strong integration with Apple devices. It is a great choice for people who want a powerful smartwatch that can handle active lifestyles while still looking premium and modern.",
    additionalInfo:
      "Brand: Apple. Category: Smartwatch. SKU: WATCH-102. Available colors: Orange, Black, Blue, White. Available sizes: XL, L, M, S. This product is suitable for sport, outdoor activity, health monitoring, Apple ecosystem users and premium everyday use.",
    reviews: [
      {
        author: "Henry Adams",
        rating: 5,
        text: "Amazing smartwatch with a very bright display and premium feel. It works perfectly for workouts and daily notifications.",
      },
      {
        author: "Ella Wright",
        rating: 5,
        text: "The build quality is excellent. It feels strong, looks expensive and has many useful features for sport and travel.",
      },
    ],
    colors: ["Orange", "Black", "Blue", "White"],
    variants: [
      { size: "XL", price: 1199, stock: 6 },
      { size: "L", price: 1169, stock: 5 },
      { size: "M", price: 1149, stock: 4 },
      { size: "S", price: 1129, stock: 3 },
    ],
    sku: "WATCH-102",
  },
  {
    id: 4,
    category: "mobile",
    title: "Samsung Galaxy A55",
    brand: "Samsung",
    rating: 4.6,
    image: "./assets/images/products/galaxy-a55.webp",
    tags: ["budget", "sale"],
    description:
      "Samsung Galaxy A55 is a reliable mid-range smartphone with a quality display, good camera, solid battery life and modern design.",
    fullDescription:
      "Samsung Galaxy A55 is a reliable mid-range smartphone for users who want a good balance between price, design and performance. It is suitable for everyday communication, social media, browsing, videos and simple games. The phone offers a quality display, solid camera and dependable battery life. It is a practical choice for people who do not need the most expensive flagship model but still want a modern smartphone with good features.",
    additionalInfo:
      "Brand: Samsung. Category: Mobile phone. SKU: MOBILE-4. Available colors: Black, White, Blue, Purple. Available storage options: 128GB, 256GB. This model is suitable for everyday use, social media, calls, photos and general mobile tasks.",
    reviews: [
      {
        author: "Lucas King",
        rating: 4,
        text: "Good phone for the price. The display is nice, battery life is solid and performance is enough for daily use.",
      },
      {
        author: "Lily Green",
        rating: 5,
        text: "I like the design and simple user experience. It is a reliable phone for calls, apps and everyday tasks.",
      },
    ],
    colors: ["Black", "White", "Blue", "Purple"],
    variants: [
      { size: "128GB", price: 499, stock: 15 },
      { size: "256GB", price: 599, stock: 10 },
    ],
    sku: "MOBILE-4",
  },
  {
    id: 107,
    category: "watch",
    title: "Huawei Watch GT 5",
    brand: "Huawei",
    rating: 4.6,
    image: "./assets/images/products/watch/watch-7.webp",
    tags: ["budget"],
    description:
      "Huawei Watch GT 5 is a stylish smartwatch with fitness tracking, health features, elegant design and long battery life.",
    fullDescription:
      "Huawei Watch GT 5 is a stylish smartwatch for users who want long battery life, a clean design and useful fitness features. It is suitable for tracking daily activity, workouts, health indicators and notifications. The watch has an elegant appearance that works well with casual and business clothing. It is a strong option for people who want a practical smartwatch with good battery performance and comfortable everyday use.",
    additionalInfo:
      "Brand: Huawei. Category: Smartwatch. SKU: WATCH-107. Available colors: Black, Green, Blue, Silver. Available sizes: XL, L, M, S. This model is suitable for daily activity tracking, health features, notifications and long battery life.",
    reviews: [
      {
        author: "Jack Baker",
        rating: 4,
        text: "Very stylish watch with good battery life. It is comfortable and useful for daily activity tracking.",
      },
      {
        author: "Sofia Hill",
        rating: 5,
        text: "The design looks elegant and the watch works well for workouts, notifications and health monitoring.",
      },
    ],
    colors: ["Black", "Green", "Blue", "Silver"],
    variants: [
      { size: "XL", price: 399, stock: 15 },
      { size: "L", price: 379, stock: 12 },
      { size: "M", price: 359, stock: 10 },
      { size: "S", price: 349, stock: 8 },
    ],
    sku: "WATCH-107",
  },
  {
    id: 2,
    category: "mobile",
    title: "iPhone 14",
    brand: "Apple",
    rating: 4.8,
    image: "./assets/images/products/iphone14.webp",
    tags: ["popular", "sale"],
    description:
      "iPhone 14 is a fast and reliable smartphone with a smooth display, strong camera, clean design and excellent everyday performance.",
    fullDescription:
      "iPhone 14 is a reliable smartphone for users who want smooth performance, a strong camera and a clean everyday experience. It is suitable for communication, social media, photos, videos, work apps and entertainment. The phone has a comfortable design, stable performance and a familiar Apple interface. It remains a good choice for people who want a premium smartphone experience without choosing the newest and most expensive model.",
    additionalInfo:
      "Brand: Apple. Category: Mobile phone. SKU: MOBILE-2. Available colors: Black, White, Blue, Red. Available storage options: 128GB, 256GB, 512GB. This model is suitable for everyday tasks, photos, videos, communication and Apple ecosystem users.",
    reviews: [
      {
        author: "Mason Turner",
        rating: 5,
        text: "Still a very good phone. It is fast, simple to use and has a strong camera for everyday photos.",
      },
      {
        author: "Amelia Walker",
        rating: 4,
        text: "Great phone with smooth performance and nice design. It feels reliable and comfortable for daily use.",
      },
    ],
    colors: ["Black", "White", "Blue", "Red"],
    variants: [
      { size: "128GB", price: 999, stock: 12 },
      { size: "256GB", price: 1099, stock: 8 },
      { size: "512GB", price: 1299, stock: 4 },
    ],
    sku: "MOBILE-2",
  },
  {
    id: 301,
    category: "powerbank",
    title: "Anker PowerCore 20000",
    brand: "Anker",
    rating: 4.8,
    image: "./assets/images/products/powerbank/anker-powercore-20000.webp",
    tags: ["popular"],
    description:
      "Anker PowerCore 20000 is a reliable high-capacity power bank for charging phones, headphones and other devices during travel or work.",
    fullDescription:
      "Anker PowerCore 20000 is a high-capacity power bank designed for users who need reliable charging during travel, work, study or long days outside. It can help keep phones, headphones and other compatible devices powered when there is no socket nearby. The compact design makes it easy to carry in a bag, while the large capacity gives extra confidence during trips. It is a practical accessory for anyone who uses mobile devices heavily throughout the day.",
    additionalInfo:
      "Brand: Anker. Category: Power bank. SKU: POWERBANK-301. Available colors: Black, White. Capacity: 20000mAh. This product is suitable for travel, work, daily charging, emergency backup power and mobile accessories.",
    reviews: [
      {
        author: "Logan Phillips",
        rating: 5,
        text: "Very useful power bank with strong capacity. It is great for travel and charges my devices reliably.",
      },
      {
        author: "Nora Campbell",
        rating: 4,
        text: "Good build quality and enough capacity for long days. It is a little bigger than small models, but very practical.",
      },
    ],
    colors: ["Black", "White"],
    variants: [{ size: "20000mAh", price: 89, stock: 13 }],
    sku: "POWERBANK-301",
  },
  {
    id: 106,
    category: "watch",
    title: "Garmin Venu 3",
    brand: "Garmin",
    rating: 4.8,
    image: "./assets/images/products/watch/watch-6.webp",
    tags: ["premium"],
    description:
      "Garmin Venu 3 is a premium fitness smartwatch with health tracking, sports modes, bright display and long battery life.",
    fullDescription:
      "Garmin Venu 3 is a premium fitness smartwatch for users who want detailed sport tracking, health monitoring and long battery life. It is suitable for workouts, running, gym training, daily activity and sleep tracking. The watch has a bright display, comfortable design and many sports modes, making it useful for active people. It is a strong choice for users who care about fitness data and want a reliable watch for both sport and daily life.",
    additionalInfo:
      "Brand: Garmin. Category: Smartwatch. SKU: WATCH-106. Available colors: Black, Silver, Blue, Green. Available sizes: XL, L, M, S. This model is suitable for sport, fitness tracking, health monitoring, workouts and long battery life.",
    reviews: [
      {
        author: "Oscar Evans",
        rating: 5,
        text: "Excellent fitness watch with many useful tracking features. It is comfortable and battery life is very good.",
      },
      {
        author: "Isabella Collins",
        rating: 4,
        text: "Great for workouts and daily health tracking. The display is clear and the sports modes are very useful.",
      },
    ],
    colors: ["Black", "Silver", "Blue", "Green"],
    variants: [
      { size: "XL", price: 649, stock: 7 },
      { size: "L", price: 629, stock: 6 },
      { size: "M", price: 609, stock: 5 },
      { size: "S", price: 599, stock: 4 },
    ],
    sku: "WATCH-106",
  },
  {
    id: 8,
    category: "mobile",
    title: "Nothing Phone 2",
    brand: "Nothing",
    rating: 4.5,
    image: "./assets/images/products/nothing-phone-2.webp",
    tags: ["new", "sale"],
    description:
      "Nothing Phone 2 is a stylish smartphone with a unique transparent design, smooth display, solid performance and clean software experience.",
    fullDescription:
      "Nothing Phone 2 is a stylish smartphone for users who want something different from standard phone designs. It has a unique transparent look, smooth display and clean software experience. The phone is suitable for everyday apps, communication, media, photos and productivity tasks. It is a good option for people who value design, simplicity and solid performance in a modern Android smartphone.",
    additionalInfo:
      "Brand: Nothing. Category: Mobile phone. SKU: MOBILE-8. Available colors: Black, White, Gray. Available storage options: 128GB, 256GB, 512GB. This model is suitable for users who want a unique design, clean software and smooth daily performance.",
    reviews: [
      {
        author: "Ryan Edwards",
        rating: 4,
        text: "The design is very unique and the phone feels smooth in daily use. It is a nice choice if you want something different.",
      },
      {
        author: "Victoria Reed",
        rating: 5,
        text: "I really like the clean software and transparent style. Performance is good for apps, browsing and media.",
      },
    ],
    colors: ["Black", "White", "Gray"],
    variants: [
      { size: "128GB", price: 699, stock: 11 },
      { size: "256GB", price: 799, stock: 8 },
      { size: "512GB", price: 999, stock: 4 },
    ],
    sku: "MOBILE-8",
  },
  {
    id: 203,
    category: "headphones",
    title: "Samsung Galaxy Buds 3 Pro",
    brand: "Samsung",
    rating: 4.7,
    image: "./assets/images/products/headphones/galaxy-buds-3-pro.webp",
    tags: ["new", "popular"],
    description:
      "Samsung Galaxy Buds 3 Pro offer clear sound, comfortable fit, noise control and stable wireless connection for everyday listening.",
    fullDescription:
      "Samsung Galaxy Buds 3 Pro are wireless earbuds designed for everyday listening, calls, travel and work. They offer clear sound, comfortable fit and useful noise control features. The compact case makes them easy to carry, while the stable wireless connection helps during music, videos and calls. They are a good choice for users who want practical earbuds with modern features and a clean design.",
    additionalInfo:
      "Brand: Samsung. Category: Headphones. SKU: HEADPHONES-203. Available colors: White, Black, Silver. Size: One Size. This product is suitable for music, calls, everyday listening, travel and mobile use.",
    reviews: [
      {
        author: "David Morris",
        rating: 5,
        text: "Comfortable earbuds with clear sound and good connection. They are very convenient for daily listening and calls.",
      },
      {
        author: "Hannah Cooper",
        rating: 4,
        text: "Good sound quality and nice design. The earbuds fit well and work great with a phone during the day.",
      },
    ],
    colors: ["White", "Black", "Silver"],
    variants: [{ size: "One Size", price: 249, stock: 16 }],
    sku: "HEADPHONES-203",
  },
  {
    id: 101,
    category: "watch",
    title: "Apple Watch Series 10",
    brand: "Apple",
    rating: 4.9,
    image: "./assets/images/products/watch/watch-1.webp",
    tags: ["new", "popular"],
    description:
      "Apple Watch Series 10 is a modern smartwatch with a slim design, health features, workout tracking and smooth Apple ecosystem support.",
    fullDescription:
      "Apple Watch Series 10 is a modern smartwatch for users who want a slim design, health features and smooth connection with Apple devices. It is useful for daily notifications, workouts, health tracking, calls and quick access to important information. The watch is comfortable for everyday wear and works well as part of the Apple ecosystem. It is a great choice for people who want a stylish and practical smartwatch for daily life.",
    additionalInfo:
      "Brand: Apple. Category: Smartwatch. SKU: WATCH-101. Available colors: Black, Silver, Pink, Blue. Available sizes: XL, L, M, S. This model is suitable for Apple users, daily notifications, workouts, health tracking and everyday wear.",
    reviews: [
      {
        author: "William Parker",
        rating: 5,
        text: "Very comfortable and stylish watch. It works smoothly with iPhone and has many useful features for daily use.",
      },
      {
        author: "Zoe Peterson",
        rating: 5,
        text: "Great smartwatch with a slim design and clear display. I use it for workouts, notifications and health tracking.",
      },
    ],
    colors: ["Black", "Silver", "Pink", "Blue"],
    variants: [
      { size: "XL", price: 799, stock: 12 },
      { size: "L", price: 779, stock: 10 },
      { size: "M", price: 759, stock: 8 },
      { size: "S", price: 749, stock: 6 },
    ],
    sku: "WATCH-101",
  },
  {
    id: 5,
    category: "mobile",
    title: "Google Pixel 9",
    brand: "Google",
    rating: 4.7,
    image: "./assets/images/products/pixel9.webp",
    tags: ["new"],
    description:
      "Google Pixel 9 is a smart Android phone with a clean interface, strong camera features, fast performance and helpful AI tools.",
    fullDescription:
      "Google Pixel 9 is a smart Android phone for users who want a clean interface, strong camera features and helpful software tools. It is suitable for everyday communication, photos, videos, browsing, work apps and social media. The phone offers smooth performance and a simple Android experience. It is a good option for people who like clean software, useful smart features and reliable camera quality in daily use.",
    additionalInfo:
      "Brand: Google. Category: Mobile phone. SKU: MOBILE-5. Available colors: Black, White, Green, Pink. Available storage options: 128GB, 256GB, 512GB. This phone is suitable for Android users, photography, daily productivity, communication and smart features.",
    reviews: [
      {
        author: "Nathan Bailey",
        rating: 5,
        text: "Very clean Android experience and great camera features. The phone feels smooth and simple to use.",
      },
      {
        author: "Aria Richardson",
        rating: 4,
        text: "Good performance, nice design and useful smart tools. It is a strong phone for daily use.",
      },
    ],
    colors: ["Black", "White", "Green", "Pink"],
    variants: [
      { size: "128GB", price: 1099, stock: 7 },
      { size: "256GB", price: 1199, stock: 5 },
      { size: "512GB", price: 1399, stock: 3 },
    ],
    sku: "MOBILE-5",
  },
  {
    id: 103,
    category: "watch",
    title: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    rating: 4.8,
    image: "./assets/images/products/watch/watch-3.webp",
    tags: ["popular"],
    description:
      "Samsung Galaxy Watch 7 is a comfortable smartwatch with health monitoring, workout tracking, notifications and a clean modern design.",
    fullDescription:
      "Samsung Galaxy Watch 7 is a comfortable smartwatch designed for daily health monitoring, workouts and notifications. It has a clean modern design and works well for people who want to track activity, receive alerts and stay connected during the day. The watch is suitable for sport, work and casual use. It is a practical choice for users who need a reliable smartwatch with good features and comfortable wear.",
    additionalInfo:
      "Brand: Samsung. Category: Smartwatch. SKU: WATCH-103. Available colors: Black, Green, Silver, Blue. Available sizes: XL, L, M, S. This model is suitable for health monitoring, workouts, notifications and everyday smartwatch use.",
    reviews: [
      {
        author: "Leo Mitchell",
        rating: 5,
        text: "Comfortable watch with useful health features. It looks modern and works well for notifications and activity tracking.",
      },
      {
        author: "Scarlett Roberts",
        rating: 4,
        text: "Good smartwatch for everyday use. The design is clean and the fitness features are easy to use.",
      },
    ],
    colors: ["Black", "Green", "Silver", "Blue"],
    variants: [
      { size: "XL", price: 499, stock: 10 },
      { size: "L", price: 479, stock: 8 },
      { size: "M", price: 459, stock: 7 },
      { size: "S", price: 449, stock: 5 },
    ],
    sku: "WATCH-103",
  },
  {
    id: 7,
    category: "mobile",
    title: "OnePlus 12",
    brand: "OnePlus",
    rating: 4.6,
    image: "./assets/images/products/oneplus12.webp",
    tags: ["premium", "sale"],
    description:
      "OnePlus 12 is a powerful smartphone with fast performance, smooth display, quick charging and a premium design.",
    fullDescription:
      "OnePlus 12 is a powerful smartphone for users who want fast performance, a smooth display and quick charging. It is suitable for gaming, browsing, videos, multitasking, photos and daily communication. The phone has a premium design and strong hardware, making it a good choice for users who need speed and comfort. It is especially useful for people who use their phone heavily and want reliable performance throughout the day.",
    additionalInfo:
      "Brand: OnePlus. Category: Mobile phone. SKU: MOBILE-7. Available colors: Black, White, Green. Available storage options: 128GB, 256GB, 512GB. This model is suitable for gaming, fast charging, media, multitasking and everyday performance.",
    reviews: [
      {
        author: "Samuel Carter",
        rating: 5,
        text: "Very fast phone with a smooth display and quick charging. It feels powerful and comfortable for daily use.",
      },
      {
        author: "Layla Nelson",
        rating: 4,
        text: "Good premium design and strong performance. It works well for apps, games and videos.",
      },
    ],
    colors: ["Black", "White", "Green"],
    variants: [
      { size: "128GB", price: 899, stock: 9 },
      { size: "256GB", price: 999, stock: 7 },
      { size: "512GB", price: 1199, stock: 4 },
    ],
    sku: "MOBILE-7",
  },
  {
    id: 302,
    category: "powerbank",
    title: "Xiaomi Mi Power Bank 3",
    brand: "Xiaomi",
    rating: 4.7,
    image: "./assets/images/products/powerbank/xiaomi-mi-power-bank-3.webp",
    tags: ["budget", "sale"],
    description:
      "Xiaomi Mi Power Bank 3 is a compact and affordable power bank with good capacity, simple design and reliable charging for daily use.",
    fullDescription:
      "Xiaomi Mi Power Bank 3 is a compact and affordable power bank for users who need extra battery power during the day. It is suitable for charging phones, headphones and other small devices at work, school, travel or outside. The simple design makes it easy to carry, while the available capacity options allow users to choose what fits their needs. It is a practical accessory for everyday backup charging.",
    additionalInfo:
      "Brand: Xiaomi. Category: Power bank. SKU: POWERBANK-302. Available colors: Black, White. Available capacity options: 10000mAh, 20000mAh. This product is suitable for everyday charging, travel, work, study and backup power.",
    reviews: [
      {
        author: "Jacob Stewart",
        rating: 5,
        text: "Good power bank for the price. It is compact, simple and useful when I need extra charge outside.",
      },
      {
        author: "Mila Sanchez",
        rating: 4,
        text: "Nice affordable power bank with reliable charging. The design is simple and easy to carry in a bag.",
      },
    ],
    colors: ["Black", "White"],
    variants: [
      { size: "10000mAh", price: 59, stock: 18 },
      { size: "20000mAh", price: 79, stock: 12 },
    ],
    sku: "POWERBANK-302",
  },
];