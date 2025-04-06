import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

export const shopItems = [
  {
    name: "Prescription Medicine",
    lk: "/Prescription Medicine"
  },
  {
    name: "Non-Prescription Medicine",
    lk: "/NonPrescription Medicine"
  }, 
  {
    name: "Nutritional Supplements",
    lk: "/NutritionalSupplements"
  },{
    name: "Ayurvedic Products",
    lk: "/AyurvedicProducts"
  },
  {
    name: "Personal Care Products",
    lk: "/PersonalCareProducts"
  },
  {
    name: "Medical Equipments",
    lk: "/MedicalEquipments"
  },
  {
    name: "Health Checkup",
    lk: "/HealthCheckup"
  }
];

export const supportData = [
    "About Us",
    "Contact Us",
    "FAQs",
    "Privacy Policy",
    "Terms of Service"
];

export const followData = [
    { 
        name: "Facebook", 
        icon: TbBrandMeta, 
        href: "https://www.facebook.com" 
    },
    { 
        name: "Instagram",  
        icon: IoLogoInstagram , 
        href: "https://www.instagram.com" 
    },
    { 
        name: "Twitter", 
        icon: RiTwitterXLine, 
        href: "https://www.x.com" 
    }
];

export const navItems = [
    {
      name: "Home",
      lk: "/"
    },
    {
      name: "Shop",
      lk: ["/PrescriptionMedicine", "NonPrescriptionMedicine", "NutritionalSupplements", "AyurvedicProducts", "PersonalCareProducts", "MedicalEquipments"] 
    },
    {
      name: "Track Order",
      lk: "/TrackOrder"
    },
    {
      name: "WishList",
      lk: "/Wishlist"
    },
    {
      name: "Contact Us",
      lk: "/ContactUs"
    }   
];

export const categoryImages = [
    {
        name: "Prescription Medicine",
        img: '#',
    },
    {
        name: "Non-Prescription Medicine",
        img: '#',
    },
    {
        name: "Nutritional Supplements",
        img: '#',
    },
    {
        name: "Ayurvedic Products",
        img: '#',
    },
    {
        name: "Personal Care Products",
        img: '#',
    },
    {
        name: "Medical Equipments",
        img: '#',
    },
    {
      name: "Health Checkup",
      img: '#',
  },
];
export const Products = [
    {
      id: 1,
      name: "Dr. Morepen Collagen Powder",
      price: 1169,
      mrp: 1799,
      discount: 35,
      packaging: "jar of 250.0 gm Powder",
      image: "https://picsum.photos/200?random=1"
    },
    {
      id: 2,
      name: "Clocip Anti-Fungal Powder",
      price: 99.1,
      mrp: 140,
      discount: 29,
      packaging: "bottle of 100.0 gm Dusting Powder",
      image: "https://picsum.photos/200?random=2"
    },
    {
      id: 3,
      name: "Cofsils Mouth Wash",
      price: 124,
      mrp: 170,
      discount: 27,
      packaging: "bottle of 100.0 ml Gargle",
      image: "https://picsum.photos/200?random=3"
    },
    {
      id: 4,
      name: "Himalaya Aloe Vera Gel",
      price: 113,
      mrp: 125,
      discount: 10,
      packaging: "box of 100.0 gm Gel",
      image: "https://picsum.photos/200?random=4"
    },
    {
      id: 5,
      name: "Omnigel Pain Relief",
      price: 203,
      mrp: 286,
      discount: 29,
      packaging: "tube of 100.0 gm spray",
      image: "https://picsum.photos/200?random=5"
    },
    {
      id: 6,
      name: 'Crocin',
      price: 32,
      mrp: 35,
      discount: 10,
      packaging: "pack of 10 tablets",
      image: "https://picsum.photos/200?random=6"
    },
    {
      id: 7,
      name: 'Corex',
      price: 120,
      mrp: 150, 
      discount: 35,
      packaging: "bottle of 100.0 ml",
      image: "https://picsum.photos/200?random=7"
    },
    {
      id: 8,
      name: 'Augmentin',
      price: 150,
      mrp: 180, 
      discount: 35,
      packaging: "pack of 10 tablets",
      image: "https://picsum.photos/200?random=8"
    },
    {
      id: 9,
      name: 'Digene',
      price: 156,
      mrp: 185, 
      discount: 35,
      packaging: "bottle of 200.0 ml",
      image: "https://picsum.photos/200?random=9"
    },
    {
      id: 10,
      name: 'Eno',
      price: 50,
      mrp: 70, 
      discount: 15,
      packaging: "box with 6 sachets",
      deliveryDate: "30 mins",
      image: "https://picsum.photos/200?random=10"
    },
    {
      id: 11,
      name: 'Vicks Action 500',
      price: 65,
      mrp: 100, 
      discount: 35,
      packaging: "bottle of 100.0 ml",
      image: "https://picsum.photos/200?random=11"
    },
    {
      id: 12,
      name: 'Dettol Antiseptic Liquid',
      price: 76,
      mrp: 96, 
      discount: 18,
      packaging: "bottle of 125.0 ml",
      image: "https://picsum.photos/200?random=12"
    },
    {
      id: 14,
      name: 'Savlon Antiseptic Liquid',
      price: 55,
      mrp: 80, 
      discount: 22,
      packaging: "bottle of 100.0 ml",
      image: "https://picsum.photos/200?random=14"
    },
    {
      id: 15,
      name: 'Betadine Antiseptic Liquid',
      price: 377,
      mrp: 419, 
      discount: 20,
      packaging: "tube of 125 gm ointment",
      image: "https://picsum.photos/200?random=15"
    }
  ];

  export const featuresData = [
    {
        icon: HiShoppingBag,
        heading: "FREE SHIPPING",
        message: "On all orders over ₹200"
    },
    {
        icon: HiArrowPathRoundedSquare,
        heading: "7 DAYS RETURN",
        message: "Money back guarantee"
    },
    {
        icon: HiOutlineCreditCard,
        heading: "SECURE CHECKOUT",
        message: "100% secured checkout process"
    }
];

export const healthPackages = [
  {
    name: "Comprehensive Gold Full Body Checkup",
    currentPrice: 1999,
    oldPrice: 4498,
    discount: "56% Off",
    safe: true,
  },
  {
    name: "Good Health Silver Package",
    currentPrice: 699,
    oldPrice: 1398,
    discount: "50% Off",
    safe: true,
  },
  {
    name: "Comprehensive Silver Full Body",
    currentPrice: 1699,
    oldPrice: 3798,
    discount: "55% Off",
    safe: true,
  },
  {
    name: "Comprehensive Platinum Full Body",
    currentPrice: 3599,
    oldPrice: 7198,
    discount: "50% Off",
    safe: true,
  },
  {
    name: "Good Health Platinum",
    currentPrice: 1499,
    oldPrice: 2998,
    discount: "50% Off",
    safe: true,
  },
];

export const mockOrders = [
  {
      _id: 1,
      createdAt: new Date(),
      shippingAddress: { city: "Delhi", country: "India" },
      orderItems: [
          {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1"
          },
      ],
      totalPrice: 100,
      isPaid: true
  },
  {
      _id: 2,
      createdAt: new Date(),
      shippingAddress: { city: "Mumbai", country: "India" },
      orderItems: [
          {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2"
          },
      ],
      totalPrice: 500,
      isPaid: true
  },
];