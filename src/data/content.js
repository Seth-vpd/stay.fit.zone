// All website content in one place for easy management

export const siteConfig = {
  name: "FitZone",
  tagline: "TRANSFORM YOUR LIFE",
  heroTitle: "PUSH YOUR LIMITS",
  heroSubtitle: "Join the ultimate fitness experience with cutting-edge equipment, world-class trainers, and a community that drives you to excellence.",
  stats: [
    { value: "500+", label: "MEMBERS" },
    { value: "15+", label: "TRAINERS" },
    { value: "20+", label: "PROGRAMS" }
  ]
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" }
];

export const features = [
  {
    icon: "🏋️",
    title: "MODERN EQUIPMENT",
    description: "State-of-the-art machines and free weights for all fitness levels"
  },
  {
    icon: "👥",
    title: "EXPERT TRAINERS",
    description: "Certified professionals dedicated to your success and safety"
  },
  {
    icon: "🏆",
    title: "PROVEN RESULTS",
    description: "Track your progress with our advanced fitness assessment tools"
  },
  {
    icon: "🕐",
    title: "24/7 ACCESS",
    description: "Work out on your schedule with round-the-clock facility access"
  }
];

export const programs = [
  {
    id: 1,
    title: "WEIGHT TRAINING",
    description: "Build strength and muscle with our comprehensive weight training programs",
    image: "weight-training.jpg",
    features: ["Free weights", "Machines", "Personal coaching"]
  },
  {
    id: 2,
    title: "CROSSFIT",
    description: "High-intensity functional training for maximum results",
    image: "crossfit.jpg",
    features: ["HIIT workouts", "Group classes", "Competition prep"]
  },
  {
    id: 3,
    title: "YOGA & WELLNESS",
    description: "Find balance and flexibility with yoga and meditation classes",
    image: "yoga.jpg",
    features: ["Multiple styles", "All levels", "Mind-body focus"]
  },
  {
    id: 4,
    title: "GROUP FITNESS",
    description: "Stay motivated with energizing group fitness classes",
    image: "group-fitness.jpg",
    features: ["Cardio classes", "Dance fitness", "Boot camps"]
  }
];

export const trainers = [
  {
    id: 1,
    name: "SARAH JOHNSON",
    role: "Head Strength Coach",
    image: "sarah-johnson.jpg",
    specialties: ["WEIGHT TRAINING", "NUTRITION", "BODY BUILDING"]
  },
  {
    id: 2,
    name: "MIKE CHEN",
    role: "CrossFit Specialist",
    image: "mike-chen.jpg",
    specialties: ["HIIT", "CROSSFIT", "ATHLETIC PERFORMANCE"]
  },
  {
    id: 3,
    name: "EMMA DAVIS",
    role: "Yoga Instructor",
    image: "emma-davis.jpg",
    specialties: ["YOGA", "MEDITATION", "FLEXIBILITY"]
  },
  {
    id: 4,
    name: "JASON MARTINEZ",
    role: "Group Fitness Lead",
    image: "jason-martinez.jpg",
    specialties: ["CARDIO", "BOOT CAMP", "DANCE FITNESS"]
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "BASIC",
    tagline: "PERFECT FOR GETTING STARTED",
    price: 29,
    popular: false,
    features: [
      "Gym access during off-peak hours",
      "Basic equipment usage",
      "Locker room access",
      "Online workout library",
      "Mobile app access"
    ]
  },
  {
    id: 2,
    name: "PRO",
    tagline: "OUR MOST POPULAR PLAN",
    price: 59,
    popular: true,
    features: [
      "24/7 gym access",
      "All equipment & facilities",
      "Group fitness classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Guest passes (2/month)"
    ]
  },
  {
    id: 3,
    name: "ELITE",
    tagline: "FOR SERIOUS ATHLETES",
    price: 99,
    popular: false,
    features: [
      "Everything in Pro",
      "8 personal training sessions/month",
      "Custom meal plans",
      "Body composition analysis",
      "Priority class booking",
      "Unlimited guest passes",
      "Spa & sauna access"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "ALEX THOMPSON",
    role: "MEMBER FOR 2 YEARS",
    rating: 5,
    text: "FitZone transformed my life! The trainers are incredibly supportive and the community is amazing. I've lost 40 pounds and gained so much confidence."
  },
  {
    id: 2,
    name: "MARIA GARCIA",
    role: "MEMBER FOR 1 YEAR",
    rating: 5,
    text: "Best gym I've ever joined. The equipment is top-notch and the variety of classes keeps things interesting. My strength has improved tremendously!"
  },
  {
    id: 3,
    name: "DAVID KIM",
    role: "MEMBER FOR 6 MONTHS",
    rating: 5,
    text: "The personal training sessions are worth every penny. My trainer helped me achieve goals I never thought possible. Highly recommend!"
  },
  {
    id: 4,
    name: "LISA CHEN",
    role: "MEMBER FOR 3 YEARS",
    rating: 5,
    text: "The 24/7 access is perfect for my schedule. Clean facilities, friendly staff, and great atmosphere. Wouldn't train anywhere else!"
  }
];

export const contactInfo = {
  address: "123 Fitness Street, Health City, HC 12345",
  phone: "(555) 123-4567",
  email: "info@fitzone.com",
  hours: [
    { day: "MONDAY - FRIDAY:", time: "5:00 AM - 11:00 PM" },
    { day: "SATURDAY:", time: "6:00 AM - 10:00 PM" },
    { day: "SUNDAY:", time: "7:00 AM - 9:00 PM" }
  ],
  note: "* ELITE MEMBERS HAVE 24/7 ACCESS"
};
