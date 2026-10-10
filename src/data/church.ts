export const church = {
  name: "House of Prayer for All Nations",
  shortName: "HOPFAN",
  tagline: "The Lord Is Here",
  mission: "ALL FLESH TO SEE THE SALVATION OF THE LORD",
  founded: "3rd April 2005",
  location: "Mtwapa, Mombasa",
  contact: {
    pastorName: "Apostle Stephen Karisa Iha",
    email: "kkarisa810@gmail.com",
    phone: "+254 729 870 123",
  },
  address: "Mtwapa, Mombasa",
  serviceTimes: "Sunday services from 9:00 AM to 3:00 PM",
  giving: {
    accountName:
      "Spring Of Miracles Ministry / House Of Prayer For All Nations",
    accountNumber: "1190282585415",
  },
  scriptures: [
    {
      reference: "Isaiah 56:7",
      text: "My house shall be called an house of prayer for all nations.",
    },
    {
      reference: "Ezekiel 48:35",
      text: "The LORD is there.",
    },
    {
      reference: "Luke 3:4–6",
      text: "The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight. Every valley shall be filled, and every mountain and hill shall be brought low; and the crooked shall be made straight, and the rough ways shall be made smooth; And all flesh shall see the salvation of God.",
    },
  ],
};

export const weeklyServices = [
  {
    day: "Tuesday",
    featured: false,
    services: [{ name: "Weekday Service", time: "5:30 PM – 7:30 PM" }],
  },
  {
    day: "Wednesday",
    featured: false,
    services: [{ name: "Weekday Service", time: "5:30 PM – 7:30 PM" }],
  },
  {
    day: "Friday",
    featured: false,
    services: [{ name: "Deliverance Service", time: "5:30 PM – 7:00 PM" }],
  },
  {
    day: "Saturday",
    featured: false,
    services: [{ name: "Youth Fellowship & Praise Practices", time: null }],
  },
  {
    day: "Sunday",
    featured: true,
    services: [
      { name: "First Service", time: "9:00 AM – 10:00 AM", language: "Swahili" },
      { name: "Second Service", time: "10:00 AM – 1:00 PM", language: "English" },
      { name: "Anointing & Deliverance Service", time: "1:00 PM – 3:00 PM" },
    ],
  },
] as const;

export const leadership = [
  {
    id: "apostle-stephen",
    name: "Apostle Stephen Karisa Iha",
    title: "Senior Pastor & Founder",
    bio: "Apostle Stephen Karisa Iha founded the House of Prayer for All Nations on 3rd April 2005 in Mtwapa, Mombasa - beginning in a classroom, trusting God for growth. He is married to Bahati Mataza, and together they are blessed with three sons and two daughters. His ministry is anchored in the mission: All Flesh to See the Salvation of the Lord.",
    photo: "/images/apostle.jpeg",
    ministryFocus: "Prayer, Evangelism, Community Impact",
    contact: { email: "kkarisa810@gmail.com", phone: "+254 729 870 123" },
  },
];

export const ministries = [
  {
    id: "prayer-worship",
    name: "Prayer & Worship",
    description:
      "The heartbeat of our church. We are a house built on prayer, offering regular prayer gatherings, intercession, and worship experiences that draw us closer to God.",
    image: "/images/prayer-worship.jpeg",
    audience: "All",
    meetingInfo: "Every Sunday and throughout the week",
    icon: "🙏",
  },
  {
    id: "children",
    name: "Children",
    description:
      "Sunday School and our community kindergarten bring faith and education together. Every child matters - we create safe, joyful spaces for children to grow in faith and knowledge.",
    image: "/images/children-ministry.jpeg",
    audience: "Children",
    meetingInfo: "Sunday School every Sunday",
    icon: "⭐",
  },
  {
    id: "youth",
    name: "Youth Ministry",
    description:
      "A vibrant community for young people to encounter God, build lasting friendships, grow in faith, and discover their purpose in God's kingdom.",
    image: "/images/youth.jpeg",
    audience: "Youth & Young Adults",
    meetingInfo: "Saturdays — time to be announced",
    icon: "🔥",
  },
  {
    id: "women",
    name: "Women's Fellowship",
    description:
      "A powerful fellowship of women who pray together, encourage one another, and grow in faith and community. Meeting every first week of the month.",
    image: "/images/women-fellowship.jpeg",
    audience: "Women",
    meetingInfo: "",
    icon: "🌸",
  },
  {
    id: "community-care",
    name: "Community Care",
    description:
      "Every Sunday we run a feeding program, and year-round we provide support for orphans and vulnerable children. Serving the community is central to who we are.",
    image: "/images/community-care.jpg",
    audience: "Community",
    meetingInfo: "Feeding program on Sunday",
    icon: "❤️",
  },
  {
    id: "outreach",
    name: "Outreach & Evangelism",
    description:
      'Rallies, evangelistic crusades, and our "Jesus in the Village" initiative bring the gospel to communities near and far. All flesh shall see the salvation of God.',
    image: "/images/outreach.jpg",
    audience: "Community & Villages",
    meetingInfo: "",
    icon: "🌍",
  },
];

export const sermons = [
  // {
  //   id: null,
  //   title: "",
  //   speaker: "",
  //   date: "_ _/ _ _ / _ _ _ _",
  //   series: "",
  //   scripture: "",
  //   thumbnail: "",
  //   videoUrl: "",
  //   audioUrl: null,
  //   description: "",
  //   duration: "",
  // },
  // {
  //   id: "1",
  //   title: "The Voice Crying in the Wilderness",
  //   speaker: "Apostle Stephen Karisa Iha",
  //   date: "2024-12-01",
  //   series: "Prepare the Way",
  //   scripture: "Luke 3:4–6",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=340&fit=crop&auto=format",
  //   videoUrl: "[SERMON VIDEO URL TO BE CONFIRMED]",
  //   audioUrl: null,
  //   description:
  //     "A powerful message on preparing the way for the Lord - leveling every valley, straightening every crooked path, so that all flesh may see the salvation of God.",
  //   duration: "[DURATION]",
  // },
  // {
  //   id: "2",
  //   title: "A House of Prayer for All Nations",
  //   speaker: "Apostle Stephen Karisa Iha",
  //   date: "2024-11-24",
  //   series: "Our Identity",
  //   scripture: "Isaiah 56:7",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=340&fit=crop&auto=format",
  //   videoUrl: "[SERMON VIDEO URL TO BE CONFIRMED]",
  //   audioUrl: null,
  //   description:
  //     "Understanding our identity as a house of prayer established for all nations - a place where every person can encounter the living God.",
  //   duration: "[DURATION]",
  // },
  // {
  //   id: "3",
  //   title: "The Lord Is Here",
  //   speaker: "Apostle Stephen Karisa Iha",
  //   date: "2024-11-17",
  //   series: "Our Identity",
  //   scripture: "Ezekiel 48:35",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=340&fit=crop&auto=format",
  //   videoUrl: "[SERMON VIDEO URL TO BE CONFIRMED]",
  //   audioUrl: null,
  //   description:
  //     "The promise that changed everything - Jehovah Shammah, the Lord is there. A message on the abiding presence of God in our midst.",
  //   duration: "[DURATION]",
  // },
];

export const events = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: "Sunday",
    startTime: "9:00 AM",
    endTime: "3:00 PM",
    location: church.address,
    image: "/images/podium.jpeg",
    description: "Join us every Sunday for worship, prayer, the Word of God, and community. All are welcome.",
    registrationUrl: null,
    speaker: "Apostle Stephen Karisa Iha",
    category: "Worship",
  },
  // {
  //   id: "2",
  //   title: "Women's Fellowship",
  //   date: "[FIRST WEEK OF MONTH - DATE TO BE CONFIRMED]",
  //   startTime: "[TIME]",
  //   endTime: "[TIME]",
  //   location: church.address,
  //   image:
  //     "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=340&fit=crop&auto=format",
  //   description:
  //     "Women's fellowship - a time of prayer, encouragement, and growing together in faith. All women are welcome.",
  //   registrationUrl: null,
  //   speaker: null,
  //   category: "Women",
  // },
  // {
  //   id: "3",
  //   title: "Jesus in the Village",
  //   date: "[EVENT DATE TO BE CONFIRMED]",
  //   startTime: "[TIME]",
  //   endTime: "[TIME]",
  //   location: "[VILLAGE LOCATION TO BE CONFIRMED]",
  //   image:
  //     "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=340&fit=crop&auto=format",
  //   description:
  //     "Our evangelistic village crusade - bringing the good news of Jesus Christ to communities in the region. All flesh shall see the salvation of God.",
  //   registrationUrl: null,
  //   speaker: "Apostle Stephen Karisa Iha",
  //   category: "Outreach",
  // },
];

export const beliefs = [
  "We believe in one God, revealed in three Persons: God the Father, God the Son, and God the Holy Spirit.",
  "We believe in salvation through the name of Jesus Christ.",
  "We believe in water baptism and baptism in the Holy Spirit.",
  "We believe in the biblical gift of speaking in tongues and in the power of God to perform miracles.",
  "We believe in the second coming of Jesus Christ and the resurrection of the dead.",
  "We believe that the Church is the body of Christ and the bride of Christ.",
];

export const history = [
  {
    year: "2005",
    title: "The Beginning",
    description:
      "The church started on 3rd April 2005 in a classroom in Mtwapa, Mombasa - a small beginning with a great vision.",
  },
  {
    year: "2007",
    title: "A Bigger Place",
    description:
      "As the ministry grew, the church moved from the classroom to a bigger place. God was faithful.",
  },
  {
    year: "Today",
    title: "Growing in Mission",
    description:
      "Today, HOPFAN continues to fulfil the mission: All Flesh to See the Salvation of the Lord - through prayer, worship, community care, and outreach.",
  },
];

const img2 = "/images/hero-img2.jpeg";
const img4 = "/images/hero-img4.jpeg";

export const heroSlides = [
  {
    image: "/images/hero-img1.jpeg",
    eyebrow: "House of Prayer for All Nations",
    title: "THE LORD IS HERE",
    description:
      "A place of prayer, worship, faith, fellowship and transformation.",
    duration: 6000,
  },
  {
    image: img2,
    eyebrow: "All Flesh to See the Salvation of the Lord",
    title: "COME AS YOU ARE",
    description: "There is a place for you here. Seek God with us.",
    duration: 6000,
  },
  {
    image: "/images/hero-img3.jpeg",
    eyebrow: "Community & Outreach",
    title: "SERVING ALL NATIONS",
    description:
      "From Mtwapa to the villages - we bring the gospel with love and action.",
    duration: 6000,
  },
  {
    image: img4,
    eyebrow: "Isaiah 56:7",
    title: "A HOUSE OF PRAYER",
    description: "My house shall be called an house of prayer for all nations.",
    duration: 6000,
  },
];
