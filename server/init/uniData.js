const { model } = require("mongoose");

const uniData = [
  {

    universityName: "University of New Hampshire",
    countryName: "USA",
    location: "Durham, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹14.47 L - 22.92 L",
    uniType: "Public",
    imageUrl:"https://images.shiksha.com/mediadata/images/1511853795php3M5jzM_270x200.jpg", 
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thompson_Hall%2C_UNH_Sunset.jpg/972px-Thompson_Hall%2C_UNH_Sunset.jpg",
    image3:"https://upload.wikimedia.org/wikipedia/commons/c/c6/Durham_NH_001.jpg",
    image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/UNHGrad.jpg/500px-UNHGrad.jpg",
    logo:"https://www.unh.edu/sites/default/files/styles/max_width_480px/public/media/2024-05/unhbrand_cs_w_rgb_r_0.png?itok=DutJb15W ",

    description: "University of New Hampshire description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1447000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "GRE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],
        credential: "Bachelor's degree"
      }
    ],

  },
  {
    universityName: "University of Central Florida",
    countryName: "USA",
    location: "Orlando, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹14.98 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534139541phpyHQKLa_270x200.jpg",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/UCF_Memory_Mall_%2830395273585%29.jpg/500px-UCF_Memory_Mall_%2830395273585%29.jpg",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/UCF_Student_Union_%2830395278155%29.jpg/500px-UCF_Student_Union_%2830395278155%29.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/UcfComLakeNonaJune2010.jpg/500px-UcfComLakeNonaJune2010.jpg",
    logo:" https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_University_of_Central_Florida.svg/1200px-Seal_of_the_University_of_Central_Florida.svg.png",
    description: "University of Central Florida description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1498000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],
      }
    ],

  },
  {
    universityName: "Miami University-Oxford",
    countryName: "USA",
    location: "Oxford, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹22.42 L - 24.06 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1593692160php5nRL9W_270x200.jpg ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tri_Delta_Sundial%2C_Miami_University_5-2-2022.jpg/500px-Tri_Delta_Sundial%2C_Miami_University_5-2-2022.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Stoddard_Hall%2C_Miami_University.jpg/500px-Stoddard_Hall%2C_Miami_University.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Differdange_Castle1.JPG/440px-Differdange_Castle1.JPG ",
    logo:"https://miamioh.edu/_hannonhill/_files/images/logos/primary-alternate-logos/alt-logo-stacked-oxford-black.png ",
    description: "Miami University-Oxford description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2242000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "GRE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],
      }
    ],

  },
  {
    universityName: "San Jose State University",
    countryName: "USA",
    location: "San Jose, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹14.11 L - 14.98 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533813832phpeWuPgT_270x200.jpg",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Faculty_and_Staff_Housing_%282530372232%29.jpg/500px-Faculty_and_Staff_Housing_%282530372232%29.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Cesar-chavez-arch.jpg/500px-Cesar-chavez-arch.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Spartan_stadium_DSC0768-Edit.jpg/1200px-Spartan_stadium_DSC0768-Edit.jpg ",
    logo:" https://1000logos.net/wp-content/uploads/2021/07/San-Jose-State-Spartans-logo.png",
    description: "San Jose State University description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1411000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],

      }
    ],

  },
  {
    universityName: "State University of New York at New Paltz",
    countryName: "USA",
    location: "New Paltz, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹16.11 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1547106543phpN4UlfX_270x200.jpg ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Academic_Spine_-_SUNY_New_Paltz.JPG/500px-Academic_Spine_-_SUNY_New_Paltz.JPG ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Atrium_-_SUNY_New_Paltz.JPG/440px-The_Atrium_-_SUNY_New_Paltz.JPG ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Van_den_Berg_Hall_-_SUNY_New_Paltz.JPG/500px-Van_den_Berg_Hall_-_SUNY_New_Paltz.JPG ",
    logo:"https://www.newpaltz.edu/media/ocm/toolkit/the-new-paltz-brand/vdp_pg13-2415x873.jpg ",
    description: "State University of New York at New Paltz description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1611000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],

      }
    ],

  },
  {
    universityName: "Temple University - USA",
    countryName: "USA",
    location: "Philadelphia, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹25.31 L",
    uniType: "Public",
    imageUrl: " https://images.shiksha.com/mediadata/images/1411983907php5kWUWg_270x200.jpg",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Temple_University_Performing_Arts_Center_in_2017.jpg/440px-Temple_University_Performing_Arts_Center_in_2017.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/O%27Connor_Plaza_in_2018.jpg/500px-O%27Connor_Plaza_in_2018.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Library_winter_jeh.jpg/500px-Charles_Library_winter_jeh.jpg ",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Temple_T_logo.svg/1811px-Temple_T_logo.svg.png ",
    description: "Temple University description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2531000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],

      }
    ],

  },
  {
    universityName: "Mississippi State University",
    countryName: "USA",
    location: "Starkville, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹22.11 L - 22.23 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537789181phpCB7mna_270x200.png ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/DrillFieldPanorama.jpg/2000px-DrillFieldPanorama.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Davis_Wade.jpg/500px-Davis_Wade.jpg ",
    image4: " ",
    logo:" https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mississippi_State_University_Bulldogs_Logo_Official.svg/1200px-Mississippi_State_University_Bulldogs_Logo_Official.svg.png",
    description: "Mississippi State University description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2211000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],

      }
    ],

  },
  {
    universityName: "University of Oklahoma",
    countryName: "USA",
    location: "Norman, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹17.15 L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1536667304phpl8hjpn_270x200.jpg ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/University_of_Oklahoma_July_2019_69_%28Bizzell_Memorial_Library%29.jpg/500px-University_of_Oklahoma_July_2019_69_%28Bizzell_Memorial_Library%29.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/SouthOval_N.jpg/500px-SouthOval_N.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/OMSEastSide.jpg/500px-OMSEastSide.jpg ",
    logo:" https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Oklahoma_Sooners_logo.svg/1200px-Oklahoma_Sooners_logo.svg.png",
    description: "University of Oklahoma description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1715000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],

      }
    ],

  },
  {
    universityName: "Ohio University",
    countryName: "USA",
    location: "Athens, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹13.54L",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534497252phpLTf4xB_270x200.jpg",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BakercenterOU.JPG/500px-BakercenterOU.JPG ",
    image3:" https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/OU_Irvine_Hall.JPG/500px-OU_Irvine_Hall.JPG",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ohio_University_Cutler_Hall.png/500px-Ohio_University_Cutler_Hall.png ",
    logo:" https://i.pinimg.com/474x/38/61/7b/38617b0a190faea294f439e700b1fed0.jpg",
    description: "Massachusetts Institute of Technology description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 4471000,
        duration: "1 year",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" },
          { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
        ],
      }
    ],

  },
  {
    universityName: "Lawrence Technological University",
    countryName: "USA",
    location: "Southfield, USA",
    ranking: null,
    acceptanceRate: null,
    fees: "₹18.57L - ₹20.07L",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537961817phpvz3MRj_270x200.jpg",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Don_Ridler_Fieldhouse.JPG/500px-Don_Ridler_Fieldhouse.JPG ",
    image3:"https://upload.wikimedia.org/wikipedia/en/2/28/Cimr_ltu.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/University_Technology_and_Learning_Center.JPG/250px-University_Technology_and_Learning_Center.JPG ",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_of_Lawrence_Technological_University.svg/1200px-Logo_of_Lawrence_Technological_University.svg.png",
    description: "Texas A & M University description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1534000,
        duration: "1 year",
        exams: [
          {
            examName: "IELTS",
            examName: "TOEFL",
            examName: "Duolingo"
          }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
        ],

      }
    ],

  },
  // {
  //   universityName: "Western Michigan University",
  //   countryName: "USA",
  //   location: "Kalamazoo, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹17.29 L - 21.59 L",
  //   uniType: "Public",
  //   imageUrl: " https://images.shiksha.com/mediadata/images/1536648230phpDkvgql_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WMUCampus2.jpg/440px-WMUCampus2.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/WMU_Student_Center_interior_gathering_stairs.jpg/500px-WMU_Student_Center_interior_gathering_stairs.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Western_Michigan_University_East_Hall.JPG/500px-Western_Michigan_University_East_Hall.JPG ",
  //   logo:"https://cdn.vox-cdn.com/thumbor/xfCo02V63SiR9SQI2rCPdiAdYG0=/0x0:2124x1332/1200x0/filters:focal(0x0:2124x1332):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22640486/Screen_Shot_2021_06_06_at_12.20.18_AM.png",
  //   description: "University of California - Berkeley Campus description here",
  //   PG: [
  //     {
  //       courseName: "MS in Computer Science",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2577000,
  //       duration: "1 year",
  //       exams: [
  //         {
  //           examName: "IELTS",
  //           examName: "TOEFL",
  //           examName: "GRE"
  //         }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Winter", intakeDate: "2024-12-01", deadline: "2024-09-01" }
  //       ],

  //     }
  //   ],

  // },
  // {
  //   universityName: "Harrisburg University of Science and Technology",
  //   countryName: "USA",
  //   location: "Harrisburg, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹14.38 L",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1547015041phpRiAeqP_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/4th_Street_towards_Pennsylvania_State_Capitol_Building%2C_Harrisburg%2C_PA_-_52441723198.jpg/500px-4th_Street_towards_Pennsylvania_State_Capitol_Building%2C_Harrisburg%2C_PA_-_52441723198.jpg ",
  //   image3:" ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Harrisburg-U-Logo-Full.png",
  //   description: "Auburn University description here",
  //   PG: [
  //     {
  //       courseName: "MS in Computer Science",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2675000,
  //       duration: "1 year",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "GRE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
  //       ],

  //     }
  //   ],

  // },
  // {
  //   universityName: "Washington State University",
  //   countryName: "USA",
  //   location: "Pullman, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹24.48L",
  //   uniType: "Public",
  //   websiteLink:"https://wsu.edu/",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1724676434phpSCiWz4_270x200.jpg ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/WSU_Thompson_hall.jpg/500px-WSU_Thompson_hall.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Stadium_Way_-_panoramio.jpg/500px-Stadium_Way_-_panoramio.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/StimsonHallWSU.jpg/500px-StimsonHallWSU.jpg ",
  //   logo:" https://1000logos.net/wp-content/uploads/2024/12/Washington-State-University-Logo.png",
  //   description: "University of Wyoming description here",
  //   PG: [
  //     {
  //       courseName: "MS in Computer Science",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1269000,
  //       duration: "1 year",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "GRE" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
  //       ],

  //     }
  //   ],

  // },
  // {
  //   universityName: "University of Tulsa",
  //   countryName: "USA",
  //   location: "Tulsa, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹20.52 L",
  //   uniType: "Private",
  //   websiteLink:"https://utulsa.edu/",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540469430php24hy98_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/d/db/Skellylg.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Uoftulsapano.jpg/2000px-Uoftulsapano.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/McFarlin-Library-University-Of-Tulsa.jpg/340px-McFarlin-Library-University-Of-Tulsa.jpg ",
  //   logo:"https://utulsa.edu/wp-content/uploads/2020/11/favicon.png",
  //   description: "University of Tulsa description here",
  //   PG: [
  //     {
  //       courseName: "MS in Computer Science",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2052000,
  //       duration: "1 year",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GRE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Summer", intakeDate: "2024-06-01", deadline: "2024-03-01" }
  //       ]
  //     }
  //   ],
  // },
  // {
  //   universityName: "Tennessee Technological University",
  //   countryName: "USA",
  //   location: "Cookeville, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹16.6 L",
  //   uniType: "Public",
  //   websiteLink: " https://www.tntech.edu/",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tennessee-technological-university-hh.jpg/500px-Tennessee-technological-university-hh.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Laboratory-Science-Commons-se-TTU.jpg/2560px-Laboratory-Science-Commons-se-TTU.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Derryberry-eagle-Tennessee-Tech-tn.jpg/2560px-Derryberry-eagle-Tennessee-Tech-tn.jpg",
  //   description: "Tennessee Technological University description here",
  //   PG: [
  //     {
  //       courseName: "MS in Mechanical Engineering",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1660000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GRE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //       ]
  //     }
  //   ],
  // },

  // {
  //   universityName: "Tennessee Technological University",
  //   countryName: "USA",
  //   location: "Cookeville, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹16.6 L",
  //   uniType: "Public",
  //   websiteLink:"https://www.tntech.edu/",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Tennessee-technological-university-hh.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Laboratory-Science-Commons-se-TTU.jpg/500px-Laboratory-Science-Commons-se-TTU.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/TuckerStadium.jpg/500px-TuckerStadium.jpg ",
  //   logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJPf5JvklbbnC3QY0SWzrvAhaD3cOw7t1Qw&s",
  //   description: "Tennessee Technological University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "University of California - Riverside Campus",
  //   countryName: "USA",
  //   location: "Riverside, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹24.65 L - ₹25.11 L",
  //   uniType: "Public",
  //   websiteLink:"https://www.ucr.edu/",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1560938046phpnYJEd9_270x200.jpg",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/UCR_University_Ave_entrance.JPG/500px-UCR_University_Ave_entrance.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dundee_UCR.png/500px-Dundee_UCR.png ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/UCR_Multidisplinary_Research_Building.png/500px-UCR_Multidisplinary_Research_Building.png ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/0/0b/UC_Riverside_Athletics_Logo_2020.png",
  //   description: "University of California - Riverside Campus description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "University of North Dakota",
  //   countryName: "USA",
  //   location: "Grand Forks, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹14.58 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1718708185php2cPc55_270x200.jpg",
  //   websiteLink:"https://und.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ralph_Engelstadt_Arena_2007.JPG/500px-Ralph_Engelstadt_Arena_2007.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Cfl001.jpg/250px-Cfl001.jpg ",
  //   image4: " ",
  //   logo:"https://campus.und.edu/brand/_files/images/logos/logosystem-verticalfull-2022-600x250.jpg",
  //   description: "University of North Dakota description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "Drexel University",
  //   countryName: "USA",
  //   location: "Philadelphia, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹30.31 L - ₹32.37 L",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533899516phpJZqzni_270x200.jpg",
  //   websiteLink:"https://drexel.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anthony_J._Drexel_by_Moses_Ezekiel_%281844-1917%29_-_Drexel_University_-_IMG_7320.JPG/500px-Anthony_J._Drexel_by_Moses_Ezekiel_%281844-1917%29_-_Drexel_University_-_IMG_7320.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Drexel_Main_Building_int.jpg/500px-Drexel_Main_Building_int.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/SR2015_Drexel_Campus_162.jpg/2880px-SR2015_Drexel_Campus_162.jpg ",
  //   logo:"https://drexel.edu/identity/~/media/Drexel/UMaC-Site-Group/Identity/Images/pageLogos/resized_Drexel-logos/Horizontal---Blue-on-White---3200x1800.jpg",
  //   description: "Drexel University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "University of Colorado Denver",
  //   countryName: "USA",
  //   location: "Denver, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹19.12 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535106307phpUqQS3g_270x200.jpg",
  //   websiteLink:"https://www.ucdenver.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CU_Denver_Student_Wellness_Center_and_Student_Commons_Building_on_the_Downtown_Denver_Campus_.jpg/500px-CU_Denver_Student_Wellness_Center_and_Student_Commons_Building_on_the_Downtown_Denver_Campus_.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Old_Main_-_Colorado.jpg/2560px-Old_Main_-_Colorado.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CU_Denver_Student_Wellness_Center_and_Student_Commons_Building_on_the_Downtown_Denver_Campus_.jpg/2560px-CU_Denver_Student_Wellness_Center_and_Student_Commons_Building_on_the_Downtown_Denver_Campus_.jpg ",
  //   logo:" https://www.cu.edu/sites/default/files/cu-standalone.png",
  //   description: "University of Colorado Denver description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "Northeastern University",
  //   countryName: "USA",
  //   location: "Boston, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹19.54 L - ₹24.94 L",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1532692041php44m6zE_270x200.jpg",
  //   websiteLink:"https://www.northeastern.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Northeastern_University.jpg/2560px-Northeastern_University.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shillman_Hall_03%2C_Northeastern_University.jpg/2560px-Shillman_Hall_03%2C_Northeastern_University.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Centennial_Common%2C_Northeastern_University.jpg/2560px-Centennial_Common%2C_Northeastern_University.jpg",
  //   logo:"https://brand.northeastern.edu/wp-content/uploads/2025/01/notched-northeastern.jpg ",
  //   description: "Northeastern University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "The University of Utah",
  //   countryName: "USA",
  //   location: "Salt Lake, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹26.93 L - ₹34.47 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1411123131phpYoVgbH_270x200.jpg",
  //   websiteLink:"https://www.utah.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/e/e1/University_of_Utah_Hospital_in_2009.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Saec_univ_of_utah.jpg/2880px-Saec_univ_of_utah.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sjquinney_law_univ_of_utah.jpg/2880px-Sjquinney_law_univ_of_utah.jpg ",
  //   logo:"https://logos-world.net/wp-content/uploads/2023/05/University-of-Utah-Logo.png ",
  //   description: "The University of Utah description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "Southeast Missouri State University",
  //   countryName: "USA",
  //   location: "Cape Girardeau, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹10.54 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539599863phpN0SSgZ_270x200.jpg",
  //   websiteLink:"https://semo.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/BedellHalll.jpg/340px-BedellHalll.jpg ",
  //   image3:" ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Southeast_Missouri_State_University_logo.svg/2880px-Southeast_Missouri_State_University_logo.svg.png",
  //   description: "Southeast Missouri State University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "California State University - Chico Campus",
  //   countryName: "USA",
  //   location: "Chico, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹13.41 L - ₹13.62 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1684135058phpmW1v0M_270x200.jpg",
  //   websiteLink:"https://www.csuchico.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Trinity_Hall_as_seen_from_George_Petersen_Rose_Garden.jpg/2880px-Trinity_Hall_as_seen_from_George_Petersen_Rose_Garden.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kendall_Hall%2C_Chico_State_%282023%29-L1003366.jpg/2560px-Kendall_Hall%2C_Chico_State_%282023%29-L1003366.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chico_State%2C_Arts_%26_Humanities_Building%2C_in_March_2020.jpg/1280px-Chico_State%2C_Arts_%26_Humanities_Building%2C_in_March_2020.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Caifornia_stat_univ_chico_seal.svg/1920px-Caifornia_stat_univ_chico_seal.svg.png",
  //   description: "California State University - Chico Campus description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "California State University San Marcos",
  //   countryName: "USA",
  //   location: "San Marcos, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹12.34 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1496299809phpq1z0wl_270x200.jpg",
  //   websiteLink:"https://www.csusm.edu/index.html ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kellogg_Library.jpg/2880px-Kellogg_Library.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/USUCSUSM.jpg/2880px-USUCSUSM.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Csusm_from_sprinter.jpg/2560px-Csusm_from_sprinter.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/CSU_San_Marcos_seal.svg/1920px-CSU_San_Marcos_seal.svg.png",
  //   description: "California State University San Marcos description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "The University of Texas at San Antonio",
  //   countryName: "USA",
  //   location: "San Antonio, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹22.5 L - ₹25.16 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1433846506phpc7Akkg_270x200.jpg",
  //   websiteLink:"https://www.utsa.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/e/e0/UTSA_downtown_campus.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/HemisFair_Park_May_2018_13_%28Institute_of_Texan_Cultures%29.jpg/2880px-HemisFair_Park_May_2018_13_%28Institute_of_Texan_Cultures%29.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/UTSA_Campus_University_Center_And_Convocation_Center.jpg/2560px-UTSA_Campus_University_Center_And_Convocation_Center.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/UTSA_Logo.svg/2880px-UTSA_Logo.svg.png",
  //   description: "The University of Texas at San Antonio description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "Northern Arizona University",
  //   countryName: "USA",
  //   location: "Flagstaff, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹22.56 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1493104266phpe0wXqh_270x200.jpg",
  //   websiteLink:"https://nau.edu/location/nau-flagstaff-campus/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/NAU_Campus.jpg/2880px-NAU_Campus.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/6230_spring_candid_20180410.jpg/2880px-6230_spring_candid_20180410.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/c/c8/3099_nacc_20170404_%281%29.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/2/26/NAU_Primary_Logo.png",
  //   description: "Northern Arizona University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "California State University Sacramento",
  //   countryName: "USA",
  //   location: "Sacramento, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹13.19 L - ₹14 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1495093826phpkj3pKx_270x200.jpg",
  //   websiteLink:"https://www.csus.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/6/69/Sac_State_North_Entrance.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Sac_State_Library_Quad.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/1/16/Sac_State_Sequoia_Hall.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/California_State_University%2C_Sacramento_logo.svg/2880px-California_State_University%2C_Sacramento_logo.svg.png",
  //   description: "California State University Sacramento description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "Florida Atlantic University",
  //   countryName: "USA",
  //   location: "Boca Raton, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹14.59 L - ₹14.72 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1416912437phpLSfw7L_270x200.jpg",
  //   websiteLink:"https://www.fau.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/0/01/FAU_Social_Science_Building.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Schmidt_Biomedical_Center.jpeg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/FAU_Parliament_Hall.JPG/2560px-FAU_Parliament_Hall.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/US_Army_Air_Corps_Hap_Arnold_Wings.svg/1920px-US_Army_Air_Corps_Hap_Arnold_Wings.svg.png",
  //   description: "Florida Atlantic University description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },
  // {
  //   universityName: "University of South Dakota",
  //   countryName: "USA",
  //   location: "Vermillion, USA",
  //   ranking: null,
  //   acceptanceRate: null,
  //   fees: "₹10.91 L",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1634125647phpP6AT0j_270x200.jpg",
  //   websiteLink:"https://www.usd.edu/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/f/f8/USDWellnessCenter.png ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/4/45/BeacomSchoolofBusiness.png ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/4/4d/AlNeuharthMediaCenter.png ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/University_of_South_Dakota_logo.svg/2880px-University_of_South_Dakota_logo.svg.png",
  //   description: "University of South Dakota description here",
  //   PG: [{
  //     courseName: "MS in Mechanical Engineering",
  //     degree: "Masters",
  //     degreeLevel: "PG",
  //     price: 1660000,
  //     duration: "2 years",
  //     exams: [
  //       { examName: "IELTS" },
  //       { examName: "TOEFL" },
  //       { examName: "PTE" },
  //       { examName: "GRE" },
  //       { examName: "Duolingo" }
  //     ],
  //     scholarships: [],
  //     intakes: [
  //       { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //     ]
  //   }],
  // },


  {
    universityName: "The University of British Columbia",
    countryName: "Canada",
    location: "Vancouver, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_270x200.jpg",
    websiteLink:" https://www.ubc.ca/",
    image2:"https://upload.wikimedia.org/wikipedia/commons/8/86/Irving_K._Barber_Library.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vancouver_school_of_theology_%28UBC-2009%29.JPG/2560px-Vancouver_school_of_theology_%28UBC-2009%29.JPG ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Engineering_Management_and_Education_%28UBC_Okanagan%29.jpg ",
    logo:"https://e7.pngegg.com/pngimages/922/702/png-clipart-university-of-british-columbia-university-of-california-berkeley-university-of-chicago-igec-sagar-route-66-logo-text-logo-thumbnail.png",
    description: "University of South Dakota description here",
    PG: [
      {
        courseName: "MS in Mechanical Engineering",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1660000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "GRE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
        ]
      }
    ]
  },
  {
    universityName: "University of Alberta",
    countryName: "Canada",
    location: "Edmonton, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533646004phpFUNLK4_270x200.jpg",
    websiteLink:"https://www.ualberta.ca/en/campus-life/our-campuses/index.html ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/University_of_Alberta_Biology_Building_Pano.jpg/2880px-University_of_Alberta_Biology_Building_Pano.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/ETLC.JPG/2560px-ETLC.JPG ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Dentistry_Pharmacy_Building.jpg/2560px-Dentistry_Pharmacy_Building.jpg ",
    logo:"https://seekvectorlogo.com/wp-content/uploads/2022/02/university-of-alberta-vector-logo-2022.png",
    description: "University of Alberta description here",
    PG: [
      {
        courseName: "MS in Computer Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1500000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
        ]
      }
    ]
  },
  {
    universityName: "Northeastern University",
    countryName: "Canada",
    location: "Toronto, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1722231922php5eJzx7_270x200.jpg",
    websiteLink:"https://toronto.northeastern.edu/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Northeastern_University.jpg/2560px-Northeastern_University.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shillman_Hall_03%2C_Northeastern_University.jpg/500px-Shillman_Hall_03%2C_Northeastern_University.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Behrakis_Health_Sciences_Center_02%2C_Northeastern_University.jpg/500px-Behrakis_Health_Sciences_Center_02%2C_Northeastern_University.jpg ",
    logo:"https://brand.northeastern.edu/wp-content/uploads/2022/05/clearspace_primary-type-a.png",
    description: "Northeastern University description here",
    PG: [
      {
        courseName: "MS in Data Science",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2000000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Spring", intakeDate: "2024-01-01", deadline: "2023-11-01" }
        ]
      }
    ]
  },
  {
    universityName: "Trent University",
    countryName: "Canada",
    location: "Peterborough, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1537356102php0pdMGX_270x200.jpg",
    websiteLink:" https://www.trentu.ca/",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Otonabee_by_SillyPuttyEnemies.jpg/1100px-Otonabee_by_SillyPuttyEnemies.jpg ",
    image3: " ",
    image4: " ",
    logo:"https://static.wixstatic.com/media/6d93ff_8e8f1060e4624e7c97fdcb6236a42348~mv2.png/v1/crop/x_4,y_0,w_796,h_248/fill/w_378,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Trent-University-Logo.png",
    description: "Trent University description here",
    PG: [
      {
        courseName: "MA in International Development",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1500000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
        ]
      }
    ]
  },
  {
    universityName: "McGill University",
    countryName: "Canada",
    location: "Montreal, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1513922151phpyhMkzk_270x200.png",
    websiteLink:"https://www.mcgill.ca/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Arts_Building%2C_McGill_University%2C_Aug_31_2022.jpg/2880px-Arts_Building%2C_McGill_University%2C_Aug_31_2022.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MUHC_Superhospital_%28May_2015%29.jpg/2880px-MUHC_Superhospital_%28May_2015%29.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Elizabeth_Wirth_Music_Building_-_01.jpg/2560px-Elizabeth_Wirth_Music_Building_-_01.jpg ",
    logo:"https://collegecomposed.com/wp-content/uploads/2019/04/mcgill-university-logo-png-transparent.png",
    description: "McGill University description here",
    PG: [
      {
        courseName: "MBA",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2500000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "GMAT" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
        ]
      }
    ]
  },
  {
    universityName: "University of Calgary",
    countryName: "Canada",
    location: "Calgary, Canada",
    ranking: null,
    acceptanceRate: null,
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1588769013phpQ3woUn_270x200.jpg",
    websiteLink:"https://www.ucalgary.ca/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/McDougall_School_Calgary.jpg/2880px-McDougall_School_Calgary.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/4/45/University_of_Calgary_entrance.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Alberta_Children%27s_Hospital_3%2B4.jpg/2880px-Alberta_Children%27s_Hospital_3%2B4.jpg ",
    logo:"https://cdn.freebiesupply.com/logos/large/2x/university-of-calgary-logo-png-transparent.png",
    description: "University of Calgary description here",
    PG: [
      {
        courseName: "MSc in Petroleum Engineering",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1800000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "GRE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
        ]
      }
    ]
  },
  // {
  //   universityName: "McMaster University",
  //   countryName: "Canada",
  //   location: "Hamilton, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533813768phpVozIV9_270x200.jpg",
  //   websiteLink:" https://www.mcmaster.ca/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hamilton_Hall_at_McMaster_University.jpg/2880px-Hamilton_Hall_at_McMaster_University.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/9/97/McMaster_Museum_of_Art_2017.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/BMOPavilion.jpg/2560px-BMOPavilion.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/5/53/McMaster_University_logo.svg",
  //   description: "McMaster University description here",
  //   PG: [
  //     {
  //       courseName: "MSc in Health Sciences",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1600000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Thompson Rivers University",
  //   countryName: "Canada",
  //   location: "Kamloops, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533105684phpWW5jsZ_270x200.jpg",
  //   websiteLink:"https://www.tru.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thompson_Rivers_University_Brown_Family_House_of_Learning.jpg/2880px-Thompson_Rivers_University_Brown_Family_House_of_Learning.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/House_of_Learning.jpg/2560px-House_of_Learning.jpg ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Thompson_Rivers_University_Logo.svg/2880px-Thompson_Rivers_University_Logo.svg.png ",
  //   description: "Thompson Rivers University description here",
  //   PG: [
  //     {
  //       courseName: "MBA",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1700000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Spring", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Niagara Falls",
  //   countryName: "Canada",
  //   location: "Niagara Falls, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1720173555phprq7In5_270x200.jpg",
  //   websiteLink:"https://www.unfc.ca/ ",
  //   image2:" ",
  //   image3: " ",
  //   image4: " ",
  //   description: "University of Niagara Falls description here",
  //   PG: [
  //     {
  //       courseName: "MS in Business Analytics",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1900000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Western University",
  //   countryName: "Canada",
  //   location: "London, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534414486phpdHsnx1_270x200.jpg",
  //   websiteLink:"https://www.uwo.ca/index.html ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/University_College%2C_Western_University.jpg/2560px-University_College%2C_Western_University.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/UWO_Physics_and_Astronomy_building.jpg/2560px-UWO_Physics_and_Astronomy_building.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/St._Peter%27s_Seminary.JPG/2880px-St._Peter%27s_Seminary.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/9/91/University_of_Western_Ontario_Logo.svg/2880px-University_of_Western_Ontario_Logo.svg.png ",
  //   description: "Western University description here",
  //   PG: [
  //     {
  //       courseName: "MSc in Finance",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2100000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "GMAT" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   universityName: "Carleton University",
  //   countryName: "Canada",
  //   location: "Ottawa, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533124606phpkOXXXA_270x200.jpg",
  //   websiteLink:" https://carleton.ca/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/CarletonUniversity2022.jpg/2880px-CarletonUniversity2022.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ParkingGarage_Carleton_2019.jpg/1920px-ParkingGarage_Carleton_2019.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/MintoCASE_Carleton_2019.jpg/1920px-MintoCASE_Carleton_2019.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CU_Logo_Horizontal_RGB_Red_Black_on_lightBG_300.png/2880px-CU_Logo_Horizontal_RGB_Red_Black_on_lightBG_300.png ",
  //   description: "Carleton University description here",
  //   PG: [
  //     {
  //       courseName: "Master of Business Administration (MBA)",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 690000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GMAT" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Sherbrooke",
  //   countryName: "Canada",
  //   location: "Sherbrooke, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541654396phpQsQqjc_270x200.jpg",
  //   websiteLink:"https://nse.org/exchange/campus-profile/91/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Universit%C3%A9_de_Sherbrooke_-_Pavillon_Georges-Cabana.jpg/500px-Universit%C3%A9_de_Sherbrooke_-_Pavillon_Georges-Cabana.jpg",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Universit%C3%A9_de_Sherbrooke_-_Centre_multifonctionnel.jpg/2880px-Universit%C3%A9_de_Sherbrooke_-_Centre_multifonctionnel.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Collation-uds.jpg/2880px-Collation-uds.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Universit%C3%A9_de_Sherbrooke_%28logo%29.svg/2880px-Universit%C3%A9_de_Sherbrooke_%28logo%29.svg.png",
  //   description: "University of Sherbrooke description here",
  //   PG: [
  //     {
  //       courseName: "Master of Engineering",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1506000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Guelph",
  //   countryName: "Canada",
  //   location: "Guelph, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1612268932phpX8ONqb_270x200.jpg",
  //   websiteLink:"https://www.uoguelph.ca/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Johnston-Clock-Tower.jpg/1280px-Johnston-Clock-Tower.jpg",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/War_Memorial_Hall_University_of_Guelph.jpg/2560px-War_Memorial_Hall_University_of_Guelph.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alexander_building%2C_University_of_Guelph.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/University_of_Guelph_logo.svg/2880px-University_of_Guelph_logo.svg.png",
  //   description: "University of Guelph description here",
  //   PG: [
  //     {
  //       courseName: "Master of Applied Nutrition",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 960000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GMAT" },
  //         { examName: "GRE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of New Brunswick",
  //   countryName: "Canada",
  //   location: "Saint John, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537349560phplO4JPQ_270x200.jpg",
  //   websiteLink:"https://www.unb.ca/saintjohn/sjcollege/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/New_Brunswick_-CA-_%289673131989%29.jpg/2880px-New_Brunswick_-CA-_%289673131989%29.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Commons_unbsj_002.JPG/2560px-Commons_unbsj_002.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Kcirving_hall.JPG/2560px-Kcirving_hall.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/University_of_New_Brunswick_Logo.svg/2880px-University_of_New_Brunswick_Logo.svg.png ",
  //   description: "University of New Brunswick description here",
  //   PG: [
  //     {
  //       courseName: "Master of Science in Computer Science",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 863000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GMAT" },
  //         { examName: "GRE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Thompson Rivers University",
  //   countryName: "Canada",
  //   location: "Kamloops, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533105684phpWW5jsZ_270x200.jpg",
  //   websiteLink:"https://www.tru.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thompson_Rivers_University_Brown_Family_House_of_Learning.jpg/2880px-Thompson_Rivers_University_Brown_Family_House_of_Learning.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/House_of_Learning.jpg/2560px-House_of_Learning.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Liberty_Pointe_Apartments%2C_Thompson_Rivers_University.jpeg/2880px-Liberty_Pointe_Apartments%2C_Thompson_Rivers_University.jpeg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Thompson_Rivers_University_Logo.svg/2880px-Thompson_Rivers_University_Logo.svg.png",
  //   description: "Thompson Rivers University description here",
  //   PG: [
  //     {
  //       courseName: "Master of Business Administration",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1675000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Lakehead University",
  //   countryName: "Canada",
  //   location: "Thunder Bay, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1691407540phpECD11i_270x200.jpg",
  //   websiteLink:"https://www.lakeheadu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/c/cd/Lakehead_University_Advanced_Technology_Centre.jpg ",
  //   image3: " ",
  //   image4: " ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Lakehead_University_Logo.svg/2880px-Lakehead_University_Logo.svg.png",
  //   description: "Lakehead University description here",
  //   PG: [
  //     {
  //       courseName: "Master of Science in Engineering",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1428000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GMAT" },
  //         { examName: "GRE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Toronto Metropolitan University",
  //   countryName: "Canada",
  //   location: "Toronto, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533119980phpwv0DeJ_270x200.jpg",
  //   websiteLink:"https://www.torontomu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/0/09/Kerr_hall_clock_tower.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pitman_Hall_%2838957662312%29.jpg/2880px-Pitman_Hall_%2838957662312%29.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/en/0/06/Ryersonunionbuilding4.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/TMU_logo.svg/2880px-TMU_logo.svg.png ",
  //   description: "Toronto Metropolitan University description here",
  //   PG: [
  //     {
  //       courseName: "Master of Arts in International Relations",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1477000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" },
  //         { examName: "GMAT" },
  //         { examName: "GRE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Northern British Columbia",
  //   countryName: "Canada",
  //   location: "Prince George, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1510648314phpuNt6lc_270x200.jpg",
  //   websiteLink:"https://www.unbc.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/43/UNBC_Research_Laboratory.JPG ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Neyoh.jpg ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/0/07/UNBC_Logo_Green.png ",
  //   description: "University of Northern British Columbia description here",
  //   PG: [
  //     {
  //       courseName: "Master of Science in Forestry",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 316000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Winter", intakeDate: "2024-01-01", deadline: "2023-11-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Ontario Tech University",
  //   countryName: "Canada",
  //   location: "Oshawa, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539254062phpEPZ5rw.jpeg",
  //   websiteLink:"https://ontariotechu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/d/de/General_Motors_of_Canada_Automotive_Centre_of_Excellence.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/e/eb/University_of_Ontario_Institute_of_Technology_Library.jpg ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/OntarioTech_primary_2019.svg/2880px-OntarioTech_primary_2019.svg.png ",
  //   description: "Ontario Tech University description here",
  //   PG: [
  //     {
  //       courseName: "Master of Science in Management",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 700000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-05-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Brock University",
  //   countryName: "Canada",
  //   location: "St. Catharines, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534245813phpeNlhCV_270x200.png",
  //   websiteLink:"https://brocku.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Brock_University%2C_Ontario_Canada.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Brock_University_Arthur_Schmon_Tower_Aug_2008_2.JPG/2560px-Brock_University_Arthur_Schmon_Tower_Aug_2008_2.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Canada_Hair_Cloth_building_St_Catharines_2011.jpg/2560px-Canada_Hair_Cloth_building_St_Catharines_2011.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/commons/a/a8/Goodman_School_of_Business.jpg",
  //   description: "1st year Tuition Fees ₹8.35 L - 31.69 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "Trinity Western University",
  //   countryName: "Canada",
  //   location: "Langley, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539605213phpjXYJCM_270x200.jpg",
  //   websiteLink:"https://www.twu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/5/54/CanIL_building.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/6/69/Booth_House.JPG ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/6/6d/Twu-blue.png ",
  //   description: "1st year Tuition Fees ₹12.13 L - 14.99 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "Duolingo" }
  //   ]
  // },
  // {
  //   universityName: "Vancouver Island University",
  //   countryName: "Canada",
  //   location: "Nanaimo, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534157184phpt8csvM_270x200.jpg",
  //   websiteLink:"https://www.viu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vancouver_Island_University_student_union_building.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/8/88/Viuss.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/4/48/Vancouver_Island_University_Faculty_of_Management.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Vancouver_Island_University_Logo.svg/2880px-Vancouver_Island_University_Logo.svg.png ",
  //   description: "1st year Tuition Fees ₹8.58 L - 19.15 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" }
  //   ]
  // },
  // {
  //   universityName: "Laurentian University",
  //   countryName: "Canada",
  //   location: "Greater Sudbury, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537264772php506TJF_270x200.jpg",
  //   websiteLink:"https://laurentian.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/2/22/Parker_Building.jpg ",
  //   image3: " ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Laurentian_University.svg/2880px-Laurentian_University.svg.png ",
  //   description: "1st year Tuition Fees ₹20.13 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "Duolingo" }
  //   ]
  // },
  // {
  //   universityName: "Wilfrid Laurier University",
  //   countryName: "Canada",
  //   location: "Waterloo, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535113690phpx3C5ZQ_270x200.jpg",
  //   websiteLink:"https://www.wlu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/WLU_2014_Sign.jpg/2880px-WLU_2014_Sign.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Laurier_Central_Garden.JPG/2560px-Laurier_Central_Garden.JPG",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Wilfrid_Laurier_University%2C_Lyle_S._Hallman_Faculty_of_Social_Work%2C_Kitchener_Campus.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/c/c7/WLU_Primary_Logo.png",
  //   description: "1st year Tuition Fees ₹13.54 L - 32.53 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "New York Institute of Technology - Vancouver Campus",
  //   countryName: "Canada",
  //   location: "Vancouver, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.ws/public/images/instDefault.png",
  //   websiteLink:"https://vancouver.nyit.edu/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/2/27/NYCOM_III.jpg",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/DuPont-Guest_Estate.JPG/2560px-DuPont-Guest_Estate.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/f/f4/NYCOM_II.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/New_York_Institute_of_Technology_logo.svg/2880px-New_York_Institute_of_Technology_logo.svg.png ",
  //   description: "1st year Tuition Fees ₹11.83 L - 14.09 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" }
  //   ]
  // },
  // {
  //   universityName: "Cape Breton University",
  //   countryName: "Canada",
  //   location: "Sydney, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534133462phpstsHGA_270x200.jpg",
  //   websiteLink:"https://www.cbu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/School_Sign.JPG/2560px-School_Sign.JPG ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Culture_%26_Heritage_Centre.JPG/2560px-Culture_%26_Heritage_Centre.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvin_Harvey_1.JPG/2560px-Marvin_Harvey_1.JPG ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Cape_Breton_University_Logo.svg/2880px-Cape_Breton_University_Logo.svg.png",
  //   description: "1st year Tuition Fees ₹17.63 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "University of Lethbridge",
  //   countryName: "Canada",
  //   location: "Lethbridge, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1525413618phpbbrx5D_270x200.jpg",
  //   websiteLink:"https://www.ulethbridge.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/d/d4/University_of_lethbridge_SU.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/0/01/Turcotte_Hall..jpg",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/9/9f/ULethbridge_Horizontal_Logo.png ",
  //   description: "1st year Tuition Fees ₹8.4 L - 14.99 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "HEC Montreal",
  //   countryName: "Canada",
  //   location: "Montreal, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1421845161php8ZmDKL_270x200.jpg",
  //   websiteLink:"https://www.hec.ca/en/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/9/92/Hec.JPG ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/HEC_Montreal_Downtown_Building.jpg/2880px-HEC_Montreal_Downtown_Building.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Decelles_HEC.jpg/2560px-Decelles_HEC.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Logo_HEC_Montreal.svg/1920px-Logo_HEC_Montreal.svg.png",
  //   description: "1st year Tuition Fees ₹10.73 L - 38.86 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "University of Prince Edward Island",
  //   countryName: "Canada",
  //   location: "Charlottetown, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1504245848php4uKv8g_270x200.jpg",
  //   websiteLink:"https://www.upei.ca/ ",
  //   image2:" ",
  //   image3: " ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/University_of_Prince_Edward_Island_Logo.svg/2880px-University_of_Prince_Edward_Island_Logo.svg.png ",
  //   description: "1st year Tuition Fees ₹13.86 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" }
  //   ]
  // },
  // {
  //   universityName: "Saint Mary's University",
  //   countryName: "Canada",
  //   location: "Halifax, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539242650phpAv76Gj_270x200.jpg",
  //   websiteLink:"https://www.smu.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Saint_Marys_HFX.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Loyola_Residence_Building.JPG/2560px-Loyola_Residence_Building.JPG ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Saint_Mary%27s_University_Halifax_Canada_Logo.svg/2880px-Saint_Mary%27s_University_Halifax_Canada_Logo.svg.png ",
  //   description: "1st year Tuition Fees ₹22.15 L - 28.87 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "GMAT" },
  //     { examName: "GRE" }
  //   ]
  // },
  // {
  //   universityName: "Trent University",
  //   countryName: "Canada",
  //   location: "Peterborough, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537356102php0pdMGX_270x200.jpg",
  //   websiteLink:"https://www.trentu.ca/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Justin_Chiu_Stadium_covered_by_blankets_of_fog.jpg/2880px-Justin_Chiu_Stadium_covered_by_blankets_of_fog.jpg",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Trent_Athletics_Excalibur_sword_in_winter.jpg/2880px-The_Trent_Athletics_Excalibur_sword_in_winter.jpg ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Trent_University_Logo.svg/2880px-Trent_University_Logo.svg.png ",
  //   description: "1st year Tuition Fees ₹20.59 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" }
  //   ]
  // },
  // {
  //   universityName: "Royal Roads University",
  //   countryName: "Canada",
  //   location: "Colwood, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534842387phphdfhwd_270x200.jpg",
  //   websiteLink:"https://www.royalroads.ca/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Hatley_Castle_in_the_Spring.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gran_Pavillion_Ivy_08.JPG/1280px-Gran_Pavillion_Ivy_08.JPG ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hatley_Castle1.jpg/1280px-Hatley_Castle1.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Royal_Roads_University_Logo.svg/2880px-Royal_Roads_University_Logo.svg.png ",
  //   description: "1st year Tuition Fees ₹9.89 L - 23.34 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" },
  //     { examName: "Duolingo" }
  //   ]
  // },
  // {
  //   universityName: "Luther College",
  //   countryName: "Canada",
  //   location: "Regina, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1399007171phpNaGHWz_270x200.jpg",
  //   websiteLink:" https://www.luthercollege.edu/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/b/bf/LutherCollegeHS.jpg ",
  //   image3: " ",
  //   image4: " ",
  //   logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4opi9JUTAIPib_-nOiCwH2AFMXaCvhAn9TA&s ",
  //   description: "1st year Tuition Fees ₹8.93 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "GMAT" }
  //   ]
  // },
  // {
  //   universityName: "Niagara University in Ontario",
  //   countryName: "Canada",
  //   location: "Niagara Falls, Canada",
  //   ranking: null,
  //   acceptanceRate: null,
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1712651668phpxuEDEp_205x160.jpg",
  //   websiteLink:"https://www.niagara.edu/ ",
  //   image2:" ",
  //   image3: " ",
  //   image4: " ",
  //   logo:" ",
  //   description: "1st year Tuition Fees ₹12.21 L",
  //   PG: [],
  //   exams: [
  //     { examName: "IELTS" },
  //     { examName: "TOEFL" },
  //     { examName: "PTE" }
  //   ]
  // },


  {
    universityName: "University of Bath",
    countryName: "Uk",
    location: "Bath, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1497272086phpAUVQB1_270x200.jpg",
    websiteLink:"https://www.bath.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/d/da/Uni.of.bath.campus.arp.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/0/09/University_of_Bath.jpg ",
    image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/School_of_architecture_and_building_engineering_Bath_university1.jpg/1920px-School_of_architecture_and_building_engineering_Bath_university1.jpg",
    logo:"https://cdn.worldvectorlogo.com/logos/university-of-bath.svg",
    description: "The University of Bath, established in 1966 with origins dating back to 1856, is a prestigious public research university located in Bath, England. Renowned for its excellence in teaching and research, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, management, science, and humanities. With a diverse student body representing over 150 nationalities, the university provides a vibrant and inclusive academic environment. The university's main campus, situated on Claverton Down, overlooks the UNESCO World Heritage City of Bath and features state-of-the-art facilities, including the £35 million Sports Training Village. The University of Bath has been awarded triple Gold in the Teaching Excellence Framework (TEF) 2023, reflecting its outstanding teaching quality and student outcomes. In the latest Research Excellence Framework (REF 2021), 92% of its research was rated as world-leading or internationally excellent. The university consistently ranks among the top 10 in UK league tables and is recognized globally, placing 150th in the QS World University Rankings 2025.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1599000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "Cardiff University",
    countryName: "Uk",
    location: "Cardiff, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534412382phpYPav1d_270x200.jpg",
    websiteLink:"https://www.cardiff.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/4/44/Cardiff_University_main_building.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hadyn_Ellis_Building.jpg/2560px-Hadyn_Ellis_Building.jpg ",
    image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Glamorgan_Building%2C_Cardiff_University.JPG/2560px-Glamorgan_Building%2C_Cardiff_University.JPG",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cardiff_University_%28logo%29.svg/1066px-Cardiff_University_%28logo%29.svg.png",
    description: "Cardiff University, established in 1883, is a world-leading public research institution located in the vibrant city of Cardiff, Wales. As a proud member of the prestigious Russell Group, it is internationally recognized for its academic excellence, cutting-edge research, and strong industry partnerships. The university is organized into three major colleges: 1. Arts, Humanities and Social Sciences – Including top-ranked schools like Journalism, Law, and Business. 2. Biomedical and Life Sciences – Home to world-class research in Medicine, Dentistry, and Psychology. 3. Physical Sciences and Engineering – Featuring advanced programs in Computer Science, Architecture, and Engineering. Cardiff consistently ranks among the Top 150 universities worldwide, with strong subject rankings in Communication, Psychology, and Architecture. The campus is spread across Cathays Park (main campus) and Heath Park (medical sciences), offering a blend of historical architecture and modern learning facilities. The university offers a supportive environment for over 30,000 students, including thousands of international students from 130+ countries. Cardiff is known for its affordable cost of living, safe city environment, and excellent public transport, making it an ideal destination for students.Recent developments include major investments in digital learning technologies and infrastructure, while also addressing challenges through academic restructuring to ensure sustainab.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1756000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "University of Exeter",
    countryName: "Uk",
    location: "Exeter, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534164648phpB3vNSE_270x200.jpg",
    websiteLink:"https://www.exeter.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Lopes_Hall%2C_Exeter_University%2C_2011.jpg ",
    image3: " https://upload.wikimedia.org/wikipedia/commons/3/32/Reed_Hall_2.jpg",
    image4: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Exeter_University_-_St_Luke%27s_Campus.jpg ",
    logo:"https://exepose.com/wp-content/uploads/2022/09/Uni_Landscape_Pos_Lrg-e1662406285626.png",
    description: "The University of Exeter is a prestigious public research university located in the picturesque South West of England, with campuses in Exeter (Devon) and Penryn (Cornwall). Established in 1955, the university has roots dating back to 1838 through its predecessor institutions. As a member of the Russell Group, Exeter is renowned for its commitment to research excellence and high levels of student satisfaction. The university comprises three academic faculties:​1. Faculty of Environment, Science and Economy: Encompassing disciplines such as Engineering, Computer Science, and Business.​ 2. Faculty of Health and Life Sciences: Including Medicine, Psychology, and Biosciences.​ 3. Faculty of Humanities, Arts and Social Sciences: Covering areas like Law, Education, and Modern Languages. Exeter offers a diverse range of undergraduate, postgraduate, and research programs across more than 40 subjects, taught by world-leading academics. The university is particularly noted for its strengths in climate science, ecology, mining engineering, and public health. The main Streatham Campus in Exeter is celebrated for its beautiful parkland setting and state-of-the-art facilities, including the Forum complex and the Living Systems Institute. The Penryn Campus in Cornwall, shared with Falmouth University, is known for its strong focus on environmental science and sustainability. Exeter consistently ranks among the top universities in the UK and globally. In the QS World University Rankings 2024, it is placed within the top 170 worldwide. The university also received a prestigious Triple Gold award in the Teaching Excellence Framework (TEF) 2023, reflecting outstanding teaching quality, learning environment, and student outcomes.​ With a vibrant international community, the University of Exeter welcomes students from over 140 countries, offering a supportive and inclusive environment. Comprehensive support services are available for international students, including visa advice, language support, and career guidance.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1621000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "PTE" },
          { examName: "Duolingo" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "University For The Creative Arts",
    countryName: "Uk",
    location: "Canterbury, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1495605792phpNksALN_270x200.jpg",
    websiteLink:" https://www.uca.ac.uk/campuses/canterbury/",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/University_of_the_Creative_Arts%2C_Epsom_Campus_%28July_2021%29.jpg/2560px-University_of_the_Creative_Arts%2C_Epsom_Campus_%28July_2021%29.jpg ",
    image3: "https://tse2.mm.bing.net/th?id=OIP.vGb92l3XX43m-CaSoVbpnwHaE8&pid=Api ",
    image4: " ",
    logo:"https://upload.wikimedia.org/wikipedia/commons/2/20/University_for_the_Creative_Arts_%28UCA%29_logo.png",
    description: "University for the Creative Arts (UCA) is a leading UK public university dedicated to creative education in art, design, film, fashion, and media. With campuses in Farnham, Epsom, and Canterbury, UCA offers industry-focused programs through its renowned schools including the Business School for the Creative Industries and the Canterbury School of Architecture. Established in 2005 with origins dating back to 1856, UCA is ranked among the top creative arts universities in the UK and globally recognized for its research in the arts. Students gain hands-on experience with cutting-edge facilities and benefit from strong industry connections, making UCA a top choice for aspiring artists, designers, and media professionals worldwide.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1649000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "University of Northampton",
    countryName: "Uk",
    location: "Northampton, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1544164615phpEXodJC_270x200.jpg",
    websiteLink:"https://www.northampton.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/University_of_Northampton_-_Waterside_Campus.jpg/500px-University_of_Northampton_-_Waterside_Campus.jpg ",
    image3: " ",
    image4: " ",
    logo:"https://northampton.sparkplusglobal.com/img/logos/northampton-logo.png ",
    description: "The University of Northampton is a modern public university located in Northampton, England. Established in 2005, it offers a wide range of undergraduate and postgraduate programs across various disciplines. The university is known for its commitment to social impact and innovation, providing students with opportunities to engage in community projects and real-world experiences. Its state-of-the-art Waterside Campus, opened in 2018, features modern facilities designed to enhance learning and collaboration. With a diverse student body and a focus on employability, the University of Northampton aims to equip graduates with the skills and knowledge needed for successful careers",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 1677000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "Newcastle University",
    countryName: "Uk",
    location: "Newcastle upon Tyne, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534939277phpGjaL0k_270x200.jpg",
    websiteLink:"https://www.ncl.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kings_Gate_building.jpg/2880px-Kings_Gate_building.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Newcastle_University_campus.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Newcastle_University_Business_School_%28geograph_2486131%29.jpg/2880px-Newcastle_University_Business_School_%28geograph_2486131%29.jpg ",
    logo:" https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Newcastle_University_logo.svg/2880px-Newcastle_University_logo.svg.png",
    description: "Newcastle University is a prestigious public research university in Newcastle upon Tyne, England, and a founding member of the UK’s elite Russell Group. Established in 1834, it is globally recognized for excellence in medicine, engineering, data science, and sustainability. The university hosts over 28,000 students, including 7,000+ internationals from 120+ countries. With campuses in the UK, Singapore, and Malaysia, and top-150 global rankings, Newcastle offers a dynamic, research-driven education with state-of-the-art facilities and strong career outcomes.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2013000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  {
    universityName: "University of Leicester",
    countryName: "Uk",
    location: "Leicester, UK",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1510895565php11NheX_270x200.jpg",
    websiteLink:"https://le.ac.uk/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Fielding_Johnson_Building%2C_University_of_Leicester.jpg/2880px-Fielding_Johnson_Building%2C_University_of_Leicester.jpg ",
    image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/University_of_Leicester_towers_2010.jpg/2880px-University_of_Leicester_towers_2010.jpg ",
    image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Jewry_Wall_ruins_panorama_3.jpg/2880px-Jewry_Wall_ruins_panorama_3.jpg ",
    logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UniOfLeicesterLogo.svg/2880px-UniOfLeicesterLogo.svg.png ",
   description: "The University of Leicester is a prestigious public research university located in Leicester, England. Established in 1921 and granted university status in 1957, it is renowned for pioneering genetic fingerprinting and contributions to space research. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as science, engineering, medicine, law, and the humanities. With a diverse student body, including over 31% international students, and a commitment to social inclusion, Leicester provides a supportive and innovative academic environment. The university consistently ranks among the top 250 institutions globally, reflecting its excellence in teaching and research.",
   PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: 2264000,
        duration: "2 years",
        exams: [
          { examName: "IELTS" },
          { examName: "TOEFL" },
          { examName: "PTE" }
        ],
        scholarships: [],
        intakes: [
          { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
        ]
      }
    ]
  },
  // {
  //   universityName: "University of Aberdeen",
  //   countryName: "Uk",
  //   location: "Aberdeen, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535027764phpVZhAd9_270x200.jpg",
  //   websiteLink:"https://www.abdn.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DSCN3828_Marischal_College.jpg/2560px-DSCN3828_Marischal_College.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Elphinstone_Hall_Wiki.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rowett_004.jpg/1920px-Rowett_004.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/University_of_Aberdeen_Logo_Full.svg/2880px-University_of_Aberdeen_Logo_Full.svg.png ",
  //   description: "The University of Aberdeen, established in 1495, is a prestigious public research university located in Aberdeen, Scotland. As one of the UK's ancient universities, it boasts a rich history of academic excellence and innovation. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, sciences, engineering, and medicine. With a diverse student body representing over 120 countries, Aberdeen provides a supportive and inclusive environment. Its state-of-the-art facilities, including the Sir Duncan Rice Library and the Science Teaching Hub, enhance the learning experience. The university consistently ranks among the top institutions globally, reflecting its commitment to research and teaching excellence.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2057000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Salford",
  //   countryName: "Uk",
  //   location: "Manchester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537439793phpsk7VHL_270x200.jpg",
  //   websiteLink:"https://www.salford.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/0/06/Maxwell_Building%2C_Salford_University.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Peel_building_salford_university.jpg/2880px-Peel_building_salford_university.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/7/75/Salford_old_fire_station_-_geograph.org.uk_-_607242.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/e/e7/University_of_Salford_Logo.png",
  //   description: "The University of Salford is a public research university located in Salford, Greater Manchester, England. Established in 1967, it evolved from the Royal Technical Institute founded in 1896. The university offers a wide range of undergraduate and postgraduate programs across four academic schools: Arts, Media and Creative Technology; Science, Engineering and Environment; Health and Society; and Salford Business School. With a strong emphasis on practical learning and industry collaboration, Salford provides students with opportunities for real-world experience through placements and partnerships. The university's main campus is situated near Manchester city centre, offering students access to a vibrant urban environment. Salford's commitment to innovation and inclusivity makes it a dynamic choice for students worldwide.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1459000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Chester",
  //   countryName: "Uk",
  //   location: "Chester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1398425274phpzPQ1SO_270x200.jpg",
  //   websiteLink:"https://www.chester.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Marriss_House_aerial.jpg/580px-Marriss_House_aerial.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/The_Bluecoat_School%2C_Chester_%28geograph_4501561_by_Jeff_Buck%29.jpg/2880px-The_Bluecoat_School%2C_Chester_%28geograph_4501561_by_Jeff_Buck%29.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/University_of_Chester_Riverside_Campus_%281%29.JPG/2560px-University_of_Chester_Riverside_Campus_%281%29.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/University_of_Chester_logo.svg/2880px-University_of_Chester_logo.svg.png ",
  //   description: "The University of Chester, established in 1839, is one of the UK's oldest higher education institutions. Located in the historic city of Chester, England, it offers a diverse range of undergraduate and postgraduate programs across multiple campuses, including Exton Park, Queen's Park, and Kingsway. The university is renowned for its commitment to student support, practical learning, and strong industry connections. With a vibrant international community, Chester provides a welcoming environment for students from over 100 countries, fostering academic excellence and personal growth.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1504000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of York",
  //   countryName: "Uk",
  //   location: "York, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1502275045phpRDE4IE_270x200.jpg",
  //   websiteLink:"https://www.york.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/The_University_of_York%27s_Central_Hall.jpg/2560px-The_University_of_York%27s_Central_Hall.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Heslington_Hall_in_winter.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ConstantineCollege_York_Sep2014.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/3/3a/UoY_logo_with_shield_2016.png ",
  //   description:"The University of York is a prestigious public research university located in York, England. Established in 1963, it is a member of the Russell Group, representing the UK's leading research-intensive institutions. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, including sciences, humanities, and social sciences. With a diverse community of over 20,000 students from more than 150 countries, York is renowned for its commitment to academic excellence, innovative research, and a supportive collegiate system. The campus features state-of-the-art facilities and a vibrant student life, making it an attractive destination for international students seeking a high-quality education in a historic city.",
  //       PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1985000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Surrey",
  //   countryName: "Uk",
  //   location: "Guildford, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534847799phpuLle9A_270x200.jpg",
  //   websiteLink:"https://www.surrey.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Surrey_Sports_Park.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Surrey-dk-building.jpg/2560px-Surrey-dk-building.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/0/01/Universit%C3%A4t_Surrey.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/University_of_Surrey_Logo.svg/2880px-University_of_Surrey_Logo.svg.png ",
  //   description: "The University of Surrey is a renowned public research university located in Guildford, England. Established in 1966, it has a strong reputation for excellence in science, engineering, and business disciplines. The university offers a wide range of undergraduate and postgraduate programs and is known for its commitment to research and innovation. With a diverse student body and a focus on employability, Surrey provides students with opportunities for real-world experience through placements and partnerships. The university's main campus is situated near Guildford city centre, offering students access to a vibrant urban environment. Surrey's dedication to academic excellence and student satisfaction makes it a top choice for students worldwide.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1789000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of East Anglia",
  //   countryName: "Uk",
  //   location: "Norwich, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538993958phpSkMphT_270x200.png",
  //   websiteLink:"https://www.uea.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Norfolk_Terrace.JPG/1920px-Norfolk_Terrace.JPG ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Quadram_Institute.jpg/2880px-Quadram_Institute.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Norwich_Medical_School%2C_Bob_Champion_Building_.jpg/2560px-Norwich_Medical_School%2C_Bob_Champion_Building_.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/6/6c/UEA_Standard_Logo_Blue_Glint_PNG_RGB_N_A_41791.png ",
  //   description: "The University of East Anglia (UEA), established in 1963, is a leading public research university located in Norwich, England. Renowned for its strengths in environmental sciences, creative writing, and international development, UEA offers over 300 courses across four faculties. The university is part of the Norwich Research Park, one of Europe's largest concentrations of researchers in the fields of agriculture, genomics, health, and the environment. With a diverse student body representing over 100 countries, UEA provides a vibrant campus life set within 360 acres of parkland. The university consistently ranks among the top institutions globally, reflecting its commitment to academic excellence and impactful research.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1107000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Liverpool",
  //   countryName: "Uk",
  //   location: "Liverpool, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1398677512phpKUT2VW_270x200.jpg",
  //   websiteLink:"https://www.liverpool.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Victoria_Building%2C_University_of_Liverpool_2019.jpg/2560px-Victoria_Building%2C_University_of_Liverpool_2019.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Foundation_Building%2C_University_of_Liverpool.jpg/2560px-Foundation_Building%2C_University_of_Liverpool.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Reilly_Building_corner.jpg/2880px-Reilly_Building_corner.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/University_of_Liverpool_logo.svg/2880px-University_of_Liverpool_logo.svg.png",
  //   description: "The University of Liverpool, established in 1881, is a prestigious public research university located in Liverpool, England. As the original 'red brick' university and a founding member of the Russell Group, it offers a wide range of undergraduate and postgraduate programs across various disciplines. The university is renowned for its research excellence, with 91% of its research rated as world-leading or internationally excellent. With a diverse student body representing over 100 countries, the University of Liverpool provides a dynamic and inclusive academic environment. Its main campus is situated in the heart of Liverpool, offering students access to a vibrant city rich in culture and history.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2046000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of West London",
  //   countryName: "Uk",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538134668phpWlScO4_270x200.jpg",
  //   websiteLink:"https://www.uwl.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/TVU_Paragon_Campus_Brentford.jpg/2560px-TVU_Paragon_Campus_Brentford.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/University_of_West_London_Building_in_Ealing.jpg/2880px-University_of_West_London_Building_in_Ealing.jpg ",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/59/University_of_West_London_logo.svg/2880px-University_of_West_London_logo.svg.png ",
  //   description: "The University of West London (UWL), established in 1860, is a public research university located in Ealing, Brentford, and Reading, England. Renowned as the 'career university,' UWL offers a wide range of undergraduate and postgraduate programs designed to equip students with practical skills and strong industry connections. The university boasts a high graduate employment rate, with 98% of graduates in work or further study within six months. UWL has invested over £150 million in campus redevelopment to enhance student learning and social experiences. With a diverse student body representing over 100 countries, UWL provides a supportive and inclusive environment, making it an attractive destination for international students seeking quality education and career opportunities in the UK.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1649000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Lancaster University",
  //   countryName: "Uk",
  //   location: "Lancaster, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1399365520phpMsar9g_270x200.jpg",
  //   websiteLink:" https://www.lancaster.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/9/97/Health_Innovation_Campus%2C_Lancaster.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lancaster_University_House_2022.jpg/2880px-Lancaster_University_House_2022.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lancaster_University_Courtyard.JPG/1920px-Lancaster_University_Courtyard.JPG ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Lancaster_University_logo.svg/2880px-Lancaster_University_logo.svg.png",
  //   description: "Lancaster University, established in 1964, is a leading public research university located in Lancaster, England. Renowned for its collegiate system, it offers a wide range of undergraduate and postgraduate programs across disciplines such as science, engineering, business, and the humanities. The university consistently ranks among the top 15 in UK league tables and is recognized globally for its excellence in teaching and research. With a diverse student body representing over 100 countries, Lancaster provides a supportive and inclusive academic environment. Its 560-acre parkland campus features state-of-the-art facilities, fostering innovation and student success.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2230000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Sheffield",
  //   countryName: "Uk",
  //   location: "Sheffield, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541413835phptim5jy_270x200.jpg",
  //   websiteLink:" https://www.sheffield.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/e/eb/Mappin_Building%2C_University_of_Sheffield.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/University_of_Sheffield_Students%27_Union.jpg/1920px-University_of_Sheffield_Students%27_Union.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/St_George%27s_Church%2C_Portobello_%2828275927046%29.jpg/1920px-St_George%27s_Church%2C_Portobello_%2828275927046%29.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/University_of_Sheffield_logo.svg/2880px-University_of_Sheffield_logo.svg.png",
  //   description: "The University of Sheffield, established in 1905, is a prestigious public research university located in Sheffield, South Yorkshire, England. As a founding member of the Russell Group, it is renowned for its excellence in research and teaching across various disciplines, including engineering, medicine, social sciences, and the arts. The university has a diverse student body, with over 30,000 students from more than 150 countries. It consistently ranks among the top 100 universities globally, reflecting its commitment to academic excellence and innovation. The university's vibrant campus life and strong industry connections provide students with a supportive and enriching educational experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 3075000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Durham University",
  //   countryName: "Uk",
  //   location: "Durham, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1500456340phpN4RhCN_270x200.jpg",
  //   websiteLink:"https://www.durham.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/South_and_Snow_Colleges_Durham_-_wide_view.jpg/2880px-South_and_Snow_Colleges_Durham_-_wide_view.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sheraton_Park_Durham.jpg/2880px-Sheraton_Park_Durham.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/1/12/Ushaw_Georgian_house_main_building.jpg ",
  //   logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uLJfiN0y1D6QCIGAAhPJajUQnUByRlNYoQ&s ",
  //   description: "Durham University, established in 1832, is a prestigious public research university located in Durham, England. As the third-oldest university in England, it combines a rich historical heritage with modern academic excellence. A member of the Russell Group, Durham offers a wide range of undergraduate and postgraduate programs across various disciplines. The university operates a distinctive collegiate system with 17 colleges, fostering a strong sense of community and support among students. With a diverse student body representing over 150 countries, Durham provides a vibrant and inclusive environment. The university consistently ranks among the top institutions globally, reflecting its commitment to research, teaching, and student experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2264000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Strathclyde",
  //   countryName: "Uk",
  //   location: "Glasgow, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505216876phpMN5NNk_270x200.jpg",
  //   websiteLink:"https://www.strath.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/New_Strathclyde_Business_School_.jpg/2560px-New_Strathclyde_Business_School_.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Andersonian_Library_.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/f/fd/Strathclyde_University%2C_Glasgow.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Strathclyde_Coat_of_Arms.svg/1920px-University_of_Strathclyde_Coat_of_Arms.svg.png ",
  //   description: "The University of Strathclyde, established in 1796, is a leading public research university located in Glasgow, Scotland. Renowned as the UK's first technological university, it offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, science, and humanities. The university is recognized for its strong industry partnerships and commitment to 'useful learning,' providing students with practical skills and real-world experience. With a diverse student body representing over 140 countries, Strathclyde fosters an inclusive and innovative academic environment. Its central Glasgow campus features state-of-the-art facilities, including the £89 million Technology & Innovation Centre, reflecting its dedication to research and development.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1669000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Leeds Beckett University",
  //   countryName: "Uk",
  //   location: "Leeds, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538131314phpvtUQLu_270x200.jpg",
  //   websiteLink:"https://www.leedsbeckett.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/LMU_Beckett_Park_campus_005.jpg/2880px-LMU_Beckett_Park_campus_005.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Opal3_Leeds.jpg/500px-Opal3_Leeds.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/SugarwellCourt1.jpg/2880px-SugarwellCourt1.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Leeds_Metropolitan_University_owl_logo.svg/2880px-Leeds_Metropolitan_University_owl_logo.svg.png ",
  //   description: "Leeds Beckett University, established in 1992 with origins dating back to 1824, is a public university located in Leeds, England. It offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health, and the arts. The university emphasizes practical learning and strong industry connections, providing students with opportunities for real-world experience through placements and partnerships. With a diverse student body representing over 100 countries, Leeds Beckett fosters an inclusive and supportive academic environment. Its two main campuses, City Campus and Headingley Campus, feature state-of-the-art facilities, including the Rose Bowl and the Carnegie School of Sport, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1677000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of East London",
  //   countryName: "Uk",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537954598phpJk1FBD_270x200.jpg",
  //   websiteLink:"https://www.uel.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/University_of_East_London_Docklands_Campus.jpg/2560px-University_of_East_London_Docklands_Campus.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/7/7c/University_of_East_London_Docklands.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/UEL_Stratford_Library_09.jpg/1920px-UEL_Stratford_Library_09.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/f/f1/Coat_of_arms_of_the_University_of_East_London.jpg ",
  //  description: "The University of East London (UEL), established in 1992 with origins dating back to 1898, is a public university located in East London, England. With campuses in Stratford and Docklands, UEL offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health, and the arts. The university is known for its career-focused approach, providing students with practical skills and strong industry connections. UEL's diverse student body represents over 140 countries, fostering an inclusive and supportive academic environment. The university's modern facilities, including the £21 million SportsDock complex, enhance the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1510000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of St Andrews",
  //   countryName: "Uk",
  //   location: "St Andrews, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537957164phpaveJAV_270x200.jpg",
  //   websiteLink:"https://www.st-andrews.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/The_Gateway%2C_St_Andrews_geograph-6299409-by-Bill-Harrison.jpg/2560px-The_Gateway%2C_St_Andrews_geograph-6299409-by-Bill-Harrison.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%2B_908_wurde_St_Andrews_bereits_Bischohfssitz._10.jpg/2880px-%2B_908_wurde_St_Andrews_bereits_Bischohfssitz._10.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%2B_908_wurde_St_Andrews_bereits_Bischohfssitz._11.jpg/2880px-%2B_908_wurde_St_Andrews_bereits_Bischohfssitz._11.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_St_Andrews_arms.svg/1920px-University_of_St_Andrews_arms.svg.png ",
  //  description: "The University of St Andrews, established in 1413, is Scotland's oldest university and the third-oldest in the English-speaking world. Located in the historic town of St Andrews, it offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, sciences, divinity, and medicine. The university is renowned for its academic excellence, rich traditions, and vibrant student community. With a diverse student body representing over 145 nationalities, St Andrews provides a supportive and inclusive environment. The university consistently ranks among the top institutions globally, reflecting its commitment to research, teaching, and student experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2278000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   universityName: "University of Dundee",
  //   countryName: "Uk",
  //   location: "Dundee, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1536661489phpveDIlW_270x200.jpg",
  //   websiteLink:"https://www.dundee.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/8/81/Dundee_University_Scrymgeour.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ewing_Building%2C_University_of_Dundee.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Old_Medical_School_Dundee.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Arms_of_the_University_of_Dundee.svg/1920px-Arms_of_the_University_of_Dundee.svg.png ",
  //   description: "University of Dundee description here",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 2225000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "TOEFL" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   universityName: "Teesside University",
  //   countryName: "Uk",
  //   location: "Middlesbrough, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505278845phpBPeYvg_270x200.jpg",
  //   websiteLink:"https://www.tees.ac.uk/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_main_entrance_to_Teesside_University.JPG/2880px-The_main_entrance_to_Teesside_University.JPG",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Teesside_University%27s_Phoenix_Building.JPG/2880px-Teesside_University%27s_Phoenix_Building.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/8/86/2006VictoriaRoadSchoolof1891.JPG ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/9/9b/Teeside_University_coat_of_arms.png",
  //  description: "Teesside University, established in 1930 and granted university status in 1992, is a dynamic public university located in Middlesbrough, England. Renowned for its commitment to innovation and practical learning, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, health, and the arts. Teesside has invested significantly in its campus, including the award-winning £22 million 'The Curve' building, enhancing the student experience. With a diverse student body representing over 100 countries, the university fosters an inclusive and supportive academic environment. Teesside's strong industry partnerships and focus on employability prepare graduates for successful careers in a global marketplace.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 839000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Northumbria University",
  //   countryName: "Uk",
  //   location: "Newcastle upon Tyne, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535022251php6npTks_270x200.jpg",
  //   websiteLink:"https://www.northumbria.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sutherland_Building_Newcastle_Tyne_1.jpg/2880px-Sutherland_Building_Newcastle_Tyne_1.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/8/89/Northumbria_University%2C_City_Campus_East_%287636872870%29.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Buildings_of_Northumbria_University_%28geograph_6374086%29.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/c/c0/Universityofnorthumbriaatnewcastlelogo.png ",
  //   description: "Northumbria University, officially known as the University of Northumbria at Newcastle, is a dynamic public research university located in Newcastle upon Tyne, England. Established in 1992, with origins dating back to 1877, it has evolved into a research-intensive institution recognized for its academic excellence and industry engagement. The university offers a wide range of undergraduate and postgraduate programs across four faculties: Arts, Design and Social Sciences; Business and Law; Engineering and Environment; and Health and Life Sciences. With a diverse student body of approximately 37,000 students from over 130 countries, Northumbria provides a vibrant and inclusive academic environment. The university's main campuses are situated in Newcastle, with additional campuses in London and Amsterdam, reflecting its global outlook and commitment to providing students with international opportunities.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1230000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Swansea University",
  //   countryName: "Uk",
  //   location: "Swansea, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537171595php6YGVk7_270x200.jpg",
  //   websiteLink:"https://www.swansea.ac.uk/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/PenmaenHortonSwanseaUni.JPG/2880px-PenmaenHortonSwanseaUni.JPG",
  //   image3: "https://upload.wikimedia.org/wikipedia/en/4/43/ILS_2_Completed.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bay_Campus_Accommodation.jpg/500px-Bay_Campus_Accommodation.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/1/1d/Swansea_University_logo.png",
  //   description: "Swansea University, established in 1920, is a leading public research university located in Swansea, Wales. Known for its strong emphasis on research, innovation, and student experience, the university offers a wide range of undergraduate and postgraduate programs across disciplines including engineering, medicine, business, computer science, and the humanities. Swansea boasts two modern campuses—Singleton Park and Bay Campus—both featuring state-of-the-art facilities and scenic coastal views. With a diverse student population from over 130 countries, Swansea University provides a supportive, inclusive, and globally oriented academic environment. The university consistently ranks among the top UK institutions for graduate employability and research impact.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 503000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Ulster University",
  //   countryName: "Uk",
  //   location: "Belfast, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539175183phpCWtVPn_270x200.jpg",
  //   websiteLink:"https://www.ulster.ac.uk/campuses/belfast ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/University_of_Ulster%2C_Belfast_Campus%2C_July_2010_%2807%29.JPG/1599px-University_of_Ulster%2C_Belfast_Campus%2C_July_2010_%2807%29.JPG ",
  //   image3: " ",
  //   image4: " ",
  //   logo:" ",
  //   description: "Ulster University, established in 1984 with origins dating back to 1865, is a prominent public research university located in Northern Ireland. With campuses in Belfast, Coleraine, Derry~Londonderry (Magee), and Jordanstown, as well as branch campuses in London and Birmingham, it offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, engineering, health sciences, and social sciences. The university is renowned for its commitment to innovation, research excellence, and regional engagement. Ulster University has a diverse student body representing over 70 countries and provides a supportive and inclusive academic environment. In 2024, it was named 'University of the Year' by Times Higher Education, reflecting its outstanding contributions to education and research.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1718000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Nottingham Trent University",
  //   countryName: "Uk",
  //   location: "Nottingham, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533899411phpMRcyBS_270x200.jpg",
  //   websiteLink:"https://www.ntu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Byron_house_2.JPG/2880px-Byron_house_2.JPG ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Nottingham_College_of_Art_building%2C_Waverley_Street.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/en/6/6b/NTU_CI_Building.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Nottingham_Trent_University_shield.svg/1920px-Nottingham_Trent_University_shield.svg.png ",
  //   description: "Nottingham Trent University (NTU), established in 1992 with origins dating back to 1843, is a prominent public research university located in Nottingham, England. Renowned for its excellence in art and design, fashion, and creative arts, NTU also hosts one of the UK's largest law schools. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, emphasizing practical learning and strong industry connections. With a diverse student body representing over 100 countries, NTU provides a vibrant and inclusive academic environment. The university's commitment to sustainability and innovation has earned it recognition as one of the most environmentally friendly universities in the UK.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1733000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Aston University",
  //   countryName: "Uk",
  //   location: "Birmingham, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1628775997phpvI1eiu_270x200.jpg",
  //   websiteLink:"https://www.aston.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aston_uni_campus1.jpg/2560px-Aston_uni_campus1.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Birmingham_-_Aston_University.JPG/2880px-Birmingham_-_Aston_University.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Astonbraincentre.jpg/2560px-Astonbraincentre.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/4/49/AU_Birmingham_logo_Purple_RGB.png ",
  //   description: "Aston University, established in 1895 and granted university status in 1966, is a leading public research university located in Birmingham, England. Renowned for its strong emphasis on employability and industry engagement, Aston pioneered the integrated placement year concept, with over 73% of students undertaking a placement year—the highest percentage in the UK. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health sciences, and social sciences. Aston Business School holds triple accreditation from AACSB, AMBA, and EQUIS, placing it among the top 1% of business schools worldwide. With a diverse student body representing over 120 countries, Aston provides a vibrant and inclusive academic environment. The university's central Birmingham campus features state-of-the-art facilities, including the £22 million 'The Curve' building, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1828000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Essex",
  //   countryName: "Uk",
  //   location: "Colchester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537166112php0PZWLJ_270x200.jpg",
  //   websiteLink:"https://www.essex.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Stunning_architectural_photographs_of_Essex_Business_School_%2824285162082%29.jpg/2880px-Stunning_architectural_photographs_of_Essex_Business_School_%2824285162082%29.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wivenhoe_Hotel_2023.jpg/2880px-Wivenhoe_Hotel_2023.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wivenhoe_House_2019.jpg/2880px-Wivenhoe_House_2019.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/University_of_Essex_logo.svg/2880px-University_of_Essex_logo.svg.png ",
  //   description: "The University of Essex, established in 1965, is a leading public research university located in Colchester, England. Renowned for its strengths in social sciences, including politics, sociology, and economics, the university offers a wide range of undergraduate and postgraduate programs across various disciplines. With a diverse student body representing over 140 nationalities, Essex provides a vibrant and inclusive academic environment. The university's commitment to research excellence and student success has earned it recognition in national and international rankings, making it an attractive destination for students worldwide.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1672000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Heriot Watt University",
  //   countryName: "Uk",
  //   location: "Edinburgh, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534939353phpG1whOx_270x200.jpg",
  //   websiteLink:"https://www.hw.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Heriot_Watt_University_Scottish_Borders_Campus_-_geograph.org.uk_-_210840.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Chambers_Street%2C_Edinburgh_-_geograph.org.uk_-_1419940.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Heriot-Watt_Reception.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heriot-Watt_University_logo.svg/2880px-Heriot-Watt_University_logo.svg.png",
  //   description: "Heriot-Watt University, established in 1821, is a renowned public research university based in Edinburgh, Scotland. As the eighth-oldest higher education institution in the UK, it has a strong reputation for pioneering education and practical, leading-edge research. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as science, engineering, business, and design. With a global presence, Heriot-Watt operates campuses in Scotland, Dubai, and Malaysia, serving a diverse student body from over 150 countries. The university is recognized for its commitment to innovation, sustainability, and producing highly employable graduates.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1810000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cardiff Metropolitan University",
  //   countryName: "Uk",
  //   location: "Cardiff, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540213123phpfqvrf6_270x200.jpg",
  //   websiteLink:"https://www.cardiffmet.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/46/Cardiff_Metropolitan_University_Llandaff_Campus_%281%29_01.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Cardiff_School_of_Art_and_Design_Llandaff.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Management_building_May10.jpg/2880px-Management_building_May10.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/9/98/Cardiff_Metropolitan_logo.png ",
  //   description: "Cardiff Metropolitan University, established in 1865 and gaining university status in 2011, is a modern public university located in Cardiff, Wales. The university offers a wide range of undergraduate and postgraduate programs across five academic schools: Art & Design, Education & Social Policy, Management, Sport & Health Sciences, and Technologies. With a diverse student body representing over 140 countries, Cardiff Met emphasizes employability through its EDGE initiative—focusing on Ethical, Digital, Global, and Entrepreneurial skills. The university has been recognized for its commitment to sustainability and was named UK and Ireland University of the Year 2021 by Times Higher Education. Its campuses in Llandaff and Cyncoed provide state-of-the-art facilities and a supportive learning environment in one of the UK's most affordable student cities.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1733000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Reading",
  //   countryName: "UK",
  //   location: "Reading, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537948985php5WxNlJ_270x200.jpg",
  //   websiteLink:"https://www.reading.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/3/3a/The_University_of_Reading.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/SNV33481.JPG/2560px-SNV33481.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/1/10/Reading_Enterprise_Hub.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/University_of_Reading_logo.svg/2880px-University_of_Reading_logo.svg.png ",
  //   description: "The University of Reading, established in 1892 and granted its Royal Charter in 1926, is a prestigious public research university located in Reading, Berkshire, England. Recognized as a red brick university, it offers a wide range of undergraduate and postgraduate programs across disciplines such as science, business, arts, and humanities. The university is renowned for its research excellence, with 98% of its research rated as of international standing. With a diverse student body representing over 160 countries, Reading provides a vibrant and inclusive academic environment. The university's main campuses include Whiteknights and London Road in the UK, as well as an international campus in Malaysia, reflecting its global outlook and commitment to providing students with international opportunities.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: 1800000,
  //       duration: "2 years",
  //       exams: [
  //         { examName: "IELTS" },
  //         { examName: "PTE" },
  //         { examName: "Duolingo" }
  //       ],
  //       scholarships: [],
  //       intakes: [
  //         { intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   universityName: "CITY, University of London",
  //   countryName: "UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1699356458php8vk1X1_270x200.jpg",
  //   websiteLink:"https://www.citystgeorges.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/3/31/CollegeBuilding.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/City_University_of_London_Northampton_Square_Clerkenwell_London_EC1V_0HB.jpg/2560px-City_University_of_London_Northampton_Square_Clerkenwell_London_EC1V_0HB.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Northampton_squ.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/City%2C_University_of_London_Logo.svg/2880px-City%2C_University_of_London_Logo.svg.png ",
  //   description: "CITY, University of London, established in 1894, is a leading public research university located in the heart of London. Known for its strong emphasis on business, law, health sciences, engineering, and social sciences, CITY is home to the prestigious Bayes Business School. The university offers a wide range of undergraduate and postgraduate programs with a focus on academic excellence and real-world relevance. With a diverse student population from over 160 countries, CITY provides a global learning environment supported by strong industry links and professional accreditations. Its central location offers students direct access to the professional and cultural opportunities of London.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.1 L - 31.87 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Middlesex University London",
  //   countryName: "UK",
  //   location: "Middlesex, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505799540phprXYrTp_270x200.jpg",
  //   websiteLink:"https://www.mdx.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Middlesex_University_Hendon_Campus.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Trent_Park_House_-_geograph.org.uk_-_71113.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/9/95/The_Sheppard_Library.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Middlesex_University_logo.svg/2880px-Middlesex_University_logo.svg.png",
  //   description: "Middlesex University London, established in 1992 with roots dating back to 1878, is a prominent public research university located in Hendon, North West London. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, health, law, and science and technology. With a diverse student body representing over 140 nationalities, Middlesex provides a vibrant and inclusive academic environment. The university has invested over £200 million in its state-of-the-art",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.86 L - 19.68 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Bath",
  //   countryName: "UK",
  //   location: "Bath, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1497272086phpAUVQB1_270x200.jpg",
  //   websiteLink:"https://www.bath.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/2/28/UniversityofBathFall.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/d/da/Uni.of.bath.campus.arp.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/School_of_architecture_and_building_engineering_Bath_university1.jpg/1920px-School_of_architecture_and_building_engineering_Bath_university1.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/University_of_Bath_logo.svg/2880px-University_of_Bath_logo.svg.png ",
  //   description: "The University of Bath, established in 1966, is a leading public research university located in Bath, England. Renowned for its excellence in teaching and research, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, science, management, humanities, and social sciences. With a diverse student body representing over 140 nationalities, Bath provides a vibrant and inclusive academic environment. The university's main campus is situated on Claverton Down, overlooking the UNESCO World Heritage city of Bath, and features state-of-the-art facilities, including the £35 million Sports Training Village. Bath consistently ranks among the top UK universities, reflecting its commitment to academic excellence and student satisfaction.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.99 L - 35.34 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Loughborough University",
  //   countryName: "UK",
  //   location: "Leicester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534242372phpRKpgze_270x200.jpg",
  //   websiteLink:"https://www.lboro.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/2/21/WSME.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Loughborough_University_Epinal_Way_Entrance_panorama.jpg/2880px-Loughborough_University_Epinal_Way_Entrance_panorama.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/2/2a/TowersHall.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/6/6d/Loughborough_Uni_logo.png",
  //   description: "Loughborough University, established in 1966 with origins dating back to 1909, is a leading public research university located in Loughborough, England. Renowned for its excellence in engineering, technology, and design, the university offers a wide range of undergraduate and postgraduate programs across various disciplines. Loughborough is particularly distinguished for its sports-related programs and facilities, consistently ranked among the best globally. With a diverse student body representing over 130 countries, the university provides a vibrant and inclusive academic environment. Its main 523-acre campus offers state-of-the-art facilities, fostering innovation and student success.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.31 L - 34.11 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },

  // {
  //   universityName: "University of Kent",
  //   countryName: "UK",
  //   location: "Canterbury, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534847210phphYJtKK_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3: " ",
  //   image4: " ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.43 L - 26.72 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Portsmouth",
  //   countryName: "UK",
  //   location: "Portsmouth, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1683613825php9DB7Mw_270x200.jpg",
  //   websiteLink:"https://www.port.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Portsmouth_University_House.jpg/2560px-Portsmouth_University_House.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/University_of_Portsmouth_Ravelin_House.jpg/2560px-University_of_Portsmouth_Ravelin_House.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/7/79/University_of_Portsmouth_Library%2C_Ravelin_Park_-_geograph.org.uk_-_498244.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/d/dc/University_of_Portsmouth_Logo.png ",
  //   description: "The University of Portsmouth, established in 1992 with origins dating back to 1869, is a dynamic public research university located in Portsmouth, England. Renowned for its commitment to teaching excellence and student satisfaction, the university offers a wide range of undergraduate and postgraduate programs across five faculties, including business, technology, science, humanities, and creative industries. With a diverse student body representing over 150 countries, Portsmouth provides a vibrant and inclusive academic environment. The university is recognized for its strong emphasis on employability, offering innovative 'Connected Degrees' that integrate flexible placement opportunities. Its modern campuses feature state-of-the-art facilities, such as the Future Technology Centre and the Ravelin Sports Centre, supporting both academic and extracurricular pursuits.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.75 L - 22.59 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },

  // {
  //   universityName: "Royal Holloway University of London",
  //   countryName: "UK",
  //   location: "Egham, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1494826775phpxl4CKX_270x200.jpg",
  //   websiteLink:"https://www.royalholloway.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Royal_Holloway%2C_University_of_London_%286%29.jpg/2560px-Royal_Holloway%2C_University_of_London_%286%29.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Egham%2C_UK_-_panoramio_-_IIya_Kuzhekin.jpg/2560px-Egham%2C_UK_-_panoramio_-_IIya_Kuzhekin.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/3/37/Royal_Holloway_Library.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/en/e/ef/Royal_Holloway%2C_University_of_London_logo.png",
  //   description: "Royal Holloway, University of London, established in 1879 and formally incorporated as Royal Holloway and Bedford New College in 1985, is a distinguished public research university located in Egham, Surrey, England. As a member institution of the University of London, it offers a wide range of undergraduate and postgraduate programs across disciplines such as humanities, sciences, business, and the arts. The university is renowned for its iconic Founder's Building, inspired by the Château de Chambord, and its commitment to research excellence, with 88% of its research rated as world-leading or internationally excellent. With a diverse student body representing over 100 countries, Royal Holloway provides a vibrant and inclusive academic environment.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.8 L - 31.87 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Brunel University London",
  //   countryName: "UK",
  //   location: "Middlesex, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535104347phpAH9RQx_270x200.jpg",
  //   websiteLink:"https://www.brunel.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/8/86/Brunel_university01.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/4/40/HSBC_at_Brunel_University_-_geograph.org.uk_-_1518865.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/19_luglio_%28113%29%2C_20.31.jpg/2560px-19_luglio_%28113%29%2C_20.31.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/8/85/Brunel-logo.png ",
  //   description: "Brunel University London, established in 1966 and named after the renowned engineer Isambard Kingdom Brunel, is a leading public research university located in Uxbridge, West London. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, health sciences, and the arts. With a diverse student body representing over 150 countries, Brunel provides a vibrant and inclusive academic environment. The university is recognized for its strong emphasis on employability, offering extensive placement opportunities and maintaining strong industry connections. Its modern campus features state-of-the-art facilities, including advanced laboratories, sports complexes, and a comprehensive library, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.45 L - 27.95 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Birkbeck, University of London",
  //   countryName: "UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1411023084php0V64wC_270x200.jpg",
  //   websiteLink:"https://www.london.ac.uk/federation/birkbeck-university-london ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Torrington_Square%2C_London_%26_Clore_Management_Centre.JPG/2560px-Torrington_Square%2C_London_%26_Clore_Management_Centre.JPG",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/f/f7/A_view_of_Birkbeck%2C_University_of_London.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Birkbeck%2C_University_of_London.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Birkbeck%2C_University_of_London_logo.svg/2880px-Birkbeck%2C_University_of_London_logo.svg.png ",
  //   description: "Birkbeck, University of London, established in 1823, is a distinguished public research university located in Bloomsbury, Central London. As a member institution of the University of London, Birkbeck offers a wide range of undergraduate and postgraduate programs across various disciplines, including arts, humanities, social sciences, law, business, and science. Renowned for its unique evening teaching model, the university provides flexible learning opportunities, allowing students to balance their studies with work or other commitments. With a diverse student body representing over 100 countries, Birkbeck fosters an inclusive and supportive academic environment. The university's commitment to research excellence is reflected in its strong performance in national assessments, and its central London location offers students access to a wealth of cultural and professional resources.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.16 L - 25.38 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Abertay University",
  //   countryName: "UK",
  //   location: "Dundee, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1409554554phpFEwein_270x200.jpg",
  //   websiteLink:"https://www.abertay.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Abertay_Kidd_building.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/3/35/Abertaylib.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/University_of_Abertay_Dundee_logo.jpg/2880px-University_of_Abertay_Dundee_logo.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/e/e6/Abertay_University_logo.png ",
  //   description: "Abertay University, established in 1888 and granted university status in 1994, is a modern public university located in Dundee, Scotland. Renowned for its pioneering programs in computer games technology and cybersecurity, Abertay was the first university in the world to offer degrees in these fields. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, health sciences, and the arts. With a diverse student body representing over 60 countries, Abertay provides a vibrant and inclusive academic environment. The university's city-centre campus features state-of-the-art facilities, including the UK's first Centre for Excellence in Computer Games Education and the £18 million cyberQuarter, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.77 L - 17.61 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },

  // {
  //   universityName: "University of Sussex",
  //   countryName:"UK",
  //   location: "Brighton, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1398767789phpvdGgj6_270x200.jpg",
  //   websiteLink:"https://www.sussex.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jubilee_Building%2C_University_of_Sussex.jpg/2560px-Jubilee_Building%2C_University_of_Sussex.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Gardner_Arts_Centre%2C_University_of_Sussex.JPG ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Northfield_Flats%2C_University_of_Sussex.jpg/2560px-Northfield_Flats%2C_University_of_Sussex.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/University_of_Sussex_Logo.svg/1920px-University_of_Sussex_Logo.svg.png ",
  //   description: "The University of Sussex, established in 1961, is a leading public research university located in Falmer, near Brighton, England. Renowned for its interdisciplinary approach to education and research, the university offers a wide range of undergraduate and postgraduate programs across various disciplines, including humanities, sciences, social sciences, and business. With a diverse student body representing over 140 nationalities, Sussex provides a vibrant and inclusive academic environment. The university's campus is situated within the South Downs National Park, combining award-winning architecture with green open spaces. Sussex is recognized globally for its research excellence, particularly in development studies, and maintains strong partnerships with institutions worldwide.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.42 L - 27.95 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Stirling",
  //   countryName:"UK",
  //   location: "Stirling, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538050857php8buOb2_270x200.jpg",
  //   websiteLink:"https://www.stir.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/5/59/Airthrey_Castle_-_University_of_Stirling.jpg ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/6/60/Willow_Court.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/f/fc/National_Swimming_Academy.jpg ",
  //   logo:" https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/University_of_Stirling_arms.svg/1920px-University_of_Stirling_arms.svg.png",
  //   description: "The University of Stirling, established in 1967, is a leading public research university located in Stirling, Scotland. Renowned for its commitment to academic excellence and innovation, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts and humanities, health sciences and sport, natural sciences, social sciences, and management. With a diverse student body representing over 140 nationalities, Stirling provides a vibrant and inclusive academic environment. The university's picturesque 330-acre campus, set within the historic Airthrey Estate, features state-of-the-art facilities, including an Olympic-sized swimming pool, on-site cinema, and 18th-century castle. Stirling is recognized for its strong emphasis on employability, with 96% of graduates in employment or further study within 15 months of graduation. The university's research excellence is evident, with 80% of its research rated as world-leading or internationally excellent in the latest Research Excellence Framework.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹8.47 L - 27.95 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Hull",
  //   countryName:"UK",
  //   location: "Kingston upon Hull, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1551696368phpqeYcvM_270x200.jpg",
  //   websiteLink:"https://www.hull.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/8/86/%22Moving_Matter%22_by_Joseph_Hillier_-_geograph.org.uk_-_745357.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/6/69/The_University_of_Hull_-_Esk_Building_-_geograph.org.uk_-_585706.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/UOH_Jan23_Student_Central_S.jpg/2880px-UOH_Jan23_Student_Central_S.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/University_of_Hull_logo.svg/2880px-University_of_Hull_logo.svg.png ",
  //   description: "The University of Hull, established in 1927 and granted university status in 1954, is a public research university located in Kingston upon Hull, East Yorkshire, England. As the 14th oldest university in England, it offers a wide range of undergraduate and postgraduate programs across disciplines such as science, engineering, business, law, health, and the arts. The university is renowned for its research excellence, particularly in areas like clean energy, flood resilience, and the fight against modern slavery. With a diverse student body representing over 100 countries, Hull provides a vibrant and inclusive academic environment. The main campus features state-of-the-art facilities, including the Brynmor Jones Library and the Allam Medical Building, enhancing the student learning experience. The university's commitment to teaching quality is reflected in its Gold rating in the Teaching Excellence Framework.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.3 L - 30.42 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Goldsmiths, University of London",
  //   countryName:"UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1411370172php2vRxpI_270x200.jpg",
  //   websiteLink:"https://www.gold.ac.uk/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/3/37/Goldsmiths_Main_Building.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/0/02/The_Ben_Pimlott_Building%2C_Goldsmiths_College_-_geograph.org.uk_-_337212.jpg  ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Deptford_Town_Hall_from_the_Northwest_%2801%29.jpg/2560px-Deptford_Town_Hall_from_the_Northwest_%2801%29.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/0/0f/Logo_of_Goldsmiths%2C_University_of_London.png ",
  //   description: "Goldsmiths, University of London, established in 1891, is a renowned public research university located in New Cross, South East London. As a constituent college of the University of London since 1904, Goldsmiths is celebrated for its innovative and interdisciplinary approach to teaching and research, particularly in the arts, humanities, social sciences, and computing. The university offers a wide range of undergraduate and postgraduate programs and is known for its vibrant, diverse community, with students from over 130 countries. Goldsmiths' commitment to creative and critical thinking has produced notable alumni in various fields, including art, music, and media. The campus combines historic and modern architecture, providing state-of-the-art facilities that foster a dynamic learning environment.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.88 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Heriot Watt University",
  //   countryName:"UK",
  //   location: "Edinburgh, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534939353phpG1whOx_270x200.jpg",
  //   websiteLink:"https://www.hw.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Chambers_Street%2C_Edinburgh_-_geograph.org.uk_-_1419940.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Heriot_Watt_University_Scottish_Borders_Campus_-_geograph.org.uk_-_210840.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/7/7d/Heriot-Watt_Reception.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heriot-Watt_University_logo.svg/2880px-Heriot-Watt_University_logo.svg.png ",
  //   description: "Heriot-Watt University, established in 1821 as the School of Arts of Edinburgh, is a prestigious public research university based in Edinburgh, Scotland. Recognized as the eighth-oldest higher education institution in the UK, it has a strong reputation for pioneering education and practical, leading-edge research. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, science, and design. With a diverse student body representing over 150 countries, Heriot-Watt provides a vibrant and inclusive academic environment. The university operates five campuses worldwide—in Scotland, Dubai, and Malaysia—reflecting its global outlook and commitment to providing students with international opportunities.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹27.39 L - 30.16 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Manchester Metropolitan University",
  //   countryName:"UK",
  //   location: "Manchester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1588755257phph2OhbP_270x200.jpg",
  //   websiteLink:"https://www.mmu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ormond_Building_%2814938453242%29.jpg/1920px-Ormond_Building_%2814938453242%29.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Grosvenor_Building%2C_Manchester_Metropolitan_University_%2815391128821%29.jpg/2560px-Grosvenor_Building%2C_Manchester_Metropolitan_University_%2815391128821%29.jpg ",
  //   image4: " https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Manchester_Metropolitan_University_Business_School.jpg/2560px-Manchester_Metropolitan_University_Business_School.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Manchester_Metropolitan_University_logo.svg/2880px-Manchester_Metropolitan_University_logo.svg.png ",
  //  description: "Manchester Metropolitan University (Manchester Met), established in 1970 and granted university status in 1992, is a prominent public research university located in the heart of Manchester, England. With a diverse student body of over 44,000 students, including more than 5,000 international students from over 120 countries, it is one of the UK's largest universities. The university offers a wide range of undergraduate and postgraduate programs across faculties such as Arts and Humanities, Business and Law, Health and Education, and Science and Engineering. Manchester Met is renowned for its commitment to teaching excellence, holding a Gold rating in the Teaching Excellence Framework (TEF) and being ranked 10th in the UK and 6th for course quality by Uni Compare in 2025. The university's modern campus features state-of-the-art facilities, including the award-winning Brooks Building at the Birley Campus, and emphasizes employability through strong industry links, internships, and placement opportunities.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.89 L - 22.92 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Plymouth",
  //   countryName:"UK",
  //   location: "Plymouth, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538110096phpOcpuQZ_270x200.jpg",
  //   websiteLink:"https://www.plymouth.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/2/24/Robbins_Halls_of_Residence%2C_University_of_Plymouth.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Roland_Levinsky_building.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Francis_Drake_Hall_of_Residence%2C_University_of_Plymouth.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/1/1c/University_of_Plymouth_Logo.png ",
  //   description: "The University of Plymouth, established in 1992 with origins dating back to 1862, is a dynamic public research university located in Plymouth, England. Renowned for its excellence in marine science, engineering, health, and environmental studies, the university offers a wide range of undergraduate and postgraduate programs across various disciplines. With a diverse student body representing over 100 countries, Plymouth provides a vibrant and inclusive academic environment. The university's city-centre campus features state-of-the-art facilities, including the Roland Levinsky Building and the Marine Station, enhancing the student learning experience. Committed to sustainability and innovation, the University of Plymouth is recognized for its impactful research and strong industry partnerships.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.14 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Lincoln",
  //   countryName:"UK",
  //   location: "Lincoln, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535086082php9m8IeG_270x200.jpg",
  //   websiteLink:"https://www.lincoln.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/University_of_Lincoln_Central_Library_and_Students_Union.jpg/2560px-University_of_Lincoln_Central_Library_and_Students_Union.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/0/08/University_of_Lincoln_-_Brayford_Pool.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/8/84/University_of_Lincoln_Library.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Lincoln_logo_landscape.png ",
  //   description: "The University of Lincoln, established in 1992 with origins dating back to 1861, is a dynamic public research university located in Lincoln, England. Renowned for its commitment to teaching excellence and student satisfaction, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, science, business, and social sciences. With a diverse student body representing over 100 countries, Lincoln provides a vibrant and inclusive academic environment. The university's main campus is situated on the picturesque Brayford Pool waterfront, featuring state-of-the-art facilities and modern learning spaces. Recognized for its strong industry partnerships and research excellence, the University of Lincoln continues to make significant contributions to society and the economy.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17 L - 19.79 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Kingston University London",
  //   countryName:"UK",
  //   location: "Kingston upon Thames, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540377040phpuydwps_270x200.jpg",
  //   websiteLink:"https://www.kingston.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/43/Universit%C3%A4t_Kingston.jpg ",
  //   image3: "https://upload.wikimedia.org/wikipedia/commons/9/90/Seething_Wells_-_geograph.org.uk_-_1318706.jpg ",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/0/02/SeethingWells01.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/3/32/KingstonUniLogo.png ",
  //   description: "Kingston University London, established in 1899 and granted university status in 1992, is a public research university located in the Royal Borough of Kingston upon Thames, southwest London. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, design, business, engineering, health, and social sciences. With a diverse student body representing over 140 nationalities, Kingston provides a vibrant and inclusive academic environment. The university operates four campuses—Penrhyn Road, Kingston Hill, Knights Park, and Roehampton Vale—all within easy reach of Kingston town centre. Kingston University has been recognized with Gold ratings in all three categories of the Teaching Excellence Framework (TEF), reflecting its commitment to high-quality teaching and student satisfaction.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.21 L - 20.69 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Bangor University",
  //   countryName:"UK",
  //   location: "Bangor, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1497935087phpc8mA7H_270x200.png",
  //   websiteLink:"https://www.bangor.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Main_Arts_library_quadrangle%2C_Bangor_University.webp/1302px-Main_Arts_library_quadrangle%2C_Bangor_University.webp.png ",
  //   image3: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ffriddoedd_site_bangor_university.jpg/2560px-Ffriddoedd_site_bangor_university.jpg",
  //   image4: " ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Bangor_University.svg/2880px-Bangor_University.svg.png ",
  //   description: "Bangor University, established in 1884, is a distinguished public research university located in Bangor, Gwynedd, North Wales. Nestled between the Snowdonia National Park and the Menai Strait, the university offers a picturesque setting for academic pursuits. With a diverse student body of approximately 10,000 students from over 100 countries, Bangor provides a vibrant and inclusive academic environment. The university comprises three colleges and numerous academic schools, offering a wide range of undergraduate and postgraduate programs across disciplines such as arts, humanities, sciences, and business. Renowned for its research excellence, 85% of Bangor's research was rated as world-leading or internationally excellent in the latest Research Excellence Framework (REF 2021). The campus features a blend of historic and modern facilities, including the iconic Main Arts Building and state-of-the-art laboratories, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.52 L - 26.84 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Bournemouth University",
  //   countryName:"UK",
  //   location: "Bournemouth, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1492410863phpqPWuc7_270x200.jpg",
  //   websiteLink:"https://www.bournemouth.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Bournemouth_Uni_entrance.jpg/2560px-Bournemouth_Uni_entrance.jpg ",
  //   image3: " https://www.bangor.ac.uk/sites/default/files/styles/16x9_1920w/public/2020-05/CB%202018%20May%20%2837%29.jpg?h=41ef3158&itok=1i3uMQON",
  //   image4: "https://jmeducationgroup.com/wp-content/uploads/2021/12/Bangor-Business-School-scaled.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Bournemouth_University_logo.svg/1920px-Bournemouth_University_logo.svg.png ",
  //   description: "Bangor University, established in 1884, is a distinguished public research university located in Bangor, Gwynedd, North Wales. Nestled between the Snowdonia National Park and the Menai Strait, the university offers a picturesque setting for academic pursuits. With a diverse student body of approximately 10,000 students from over 100 countries, Bangor provides a vibrant and inclusive academic environment. The university comprises three colleges and numerous academic schools, offering a wide range of undergraduate and postgraduate programs across disciplines such as arts, humanities, sciences, and business. Renowned for its research excellence, 85% of Bangor's research was rated as world-leading or internationally excellent in the latest Research Excellence Framework (REF 2021). The campus features a blend of historic and modern facilities, including the iconic Main Arts Building and state-of-the-art laboratories, enhancing the student learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.05 L - 21.02 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Huddersfield",
  //   countryName:"UK",
  //   location: "Huddersfield, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1476779192php1UZAwP_270x200.jpg",
  //   websiteLink:"https://www.hud.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/43/Queensgate_Campus_Top.jpg ",
  //   image3:" https://upload.wikimedia.org/wikipedia/commons/a/a1/New_Business_School.jpg",
  //   image4: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Arts_Building%2C_University_of_Huddersfield_-_geograph.org.uk_-_834099.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Huddersfield_logo.svg/2880px-University_of_Huddersfield_logo.svg.png ",
  //   description: "The University of Huddersfield, established in 1992 with origins dating back to 1825, is a public research university located in Huddersfield, West Yorkshire, England. Renowned for its commitment to teaching excellence, the university has been awarded Gold in all three aspects of the Teaching Excellence Framework (TEF) 2023: overall rating, student experience, and student outcomes. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, including applied sciences, arts and humanities, computing and engineering, business, education, law, and health sciences. With a diverse student body of approximately 24,000 students from over 130 countries, Huddersfield provides a vibrant and inclusive academic environment. The main Queensgate campus features a blend of historic and modern facilities, including the Barbara Hepworth Building and the Buckley Innovation Centre. The university maintains strong industry links, offering extensive placement opportunities, and boasts a high graduate employment rate, with 94% of undergraduates and 93% of postgraduates in work or further study six months after graduating.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.89 L - 20.91 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Liverpool John Moores University",
  //   countryName:"UK",
  //   location: "Liverpool, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539234822phpaZrlCZ_270x200.png",
  //   websiteLink:"https://www.ljmu.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Liverpool_Art_and_Design_Academy.JPG/1920px-Liverpool_Art_and_Design_Academy.JPG ",
  //   image3:" https://upload.wikimedia.org/wikipedia/commons/2/25/Ljmucampus.JPG",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/1/19/LJMU_Byrom_Street.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/1/19/LJMU2020Logo.gif ",
  //   description: "Liverpool John Moores University (LJMU), established in 1992 with origins dating back to 1823, is a modern public research university located in Liverpool, England. Named in honor of Sir John Moores, the university offers a wide range of undergraduate and postgraduate programs across faculties such as Arts, Professional and Social Studies; Engineering and Technology; Health; and Science. With a diverse student population representing over 100 countries, LJMU provides a vibrant and inclusive learning environment. The university is known for its strong focus on employability, practical learning, and industry partnerships. Its central location in one of the UK’s most culturally rich cities enhances both academic and social opportunities for students.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.46 L - 20.41 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Keele University",
  //   countryName:"UK",
  //   location: "Keele, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539158685phpxVkb53_270x200.jpg",
  //   websiteLink:"https://www.keele.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/9/98/Keele_Hall_0791.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Keele_University_Library.jpg/2560px-Keele_University_Library.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Keele_University_Chancellor%27s_Building.jpg/2560px-Keele_University_Chancellor%27s_Building.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/9/94/Keele_University_logo.jpg ",
  //   description: "Keele University, established in 1949, is a leading public research university located in Staffordshire, England. Known for its expansive and picturesque campus—the largest in the UK—it offers a wide range of undergraduate and postgraduate programs across disciplines such as medicine, humanities, social sciences, natural sciences, and business. Keele is especially recognized for its interdisciplinary approach and strong focus on sustainability, healthcare, and research-led teaching. With a diverse student population representing over 120 countries, the university provides a supportive and inclusive academic environment. Keele’s commitment to student satisfaction, employability, and global engagement makes it a top choice for both UK and international students.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.8 L - 31.31 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Aberystwyth University",
  //   countryName:"UK",
  //   location: "Swansea, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540355823php4kUFd1_270x200.jpg",
  //   websiteLink:"https://www.aber.ac.uk/en/ ",
  //   image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Old_College_Building%2C_Aberystwyth_University_2014-09-09_-_2.jpg/1280px-Old_College_Building%2C_Aberystwyth_University_2014-09-09_-_2.jpg",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Aberystwyth_University_Studio.jpg/2880px-Aberystwyth_University_Studio.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/1/11/International_Politics_Building%2C_Aberystwyth_University.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Aberystwyth_University_logo.svg/2880px-Aberystwyth_University_logo.svg.png ",
  //   description: "Aberystwyth University, established in 1872, is a historic public research university located on the west coast of Wales. As the first university college in Wales, it has a long-standing tradition of academic excellence and innovation. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, sciences, business, and social sciences. Renowned for its pioneering Department of International Politics, founded in 1919, Aberystwyth has a global reputation for research and teaching quality. With a diverse student body representing over 100 countries, the university provides a vibrant and inclusive academic environment. The main Penglais Campus overlooks Cardigan Bay and features state-of-the-art facilities, including the National Library of Wales. Aberystwyth consistently ranks highly for student satisfaction and teaching quality, reflecting its commitment to providing an exceptional student experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.57 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Glasgow Caledonian University",
  //   countryName:"UK",
  //   location: "Glasgow, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1506409718phpp2zWli_270x200.jpg",
  //   websiteLink:"https://www.gcu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Saltire_Centre%2C_GCU.jpg/2880px-Saltire_Centre%2C_GCU.jpg ",
  //   image3:" ",
  //   image4:" ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/2/2e/GCUlogo_251px.jpg ",
  //   description: "Glasgow Caledonian University (GCU), established in 1993 with roots dating back to 1875, is a leading public university located in Glasgow, Scotland. Recognized as Scotland's largest and top modern university, GCU offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health sciences, and social sciences. With a diverse student body of approximately 23,000 students from over 135 countries, the university provides a vibrant and inclusive academic environment. GCU is renowned for its strong industry links, high graduate employability, and commitment to social innovation and sustainability. The university's main campus in Glasgow features state-of-the-art facilities, and its London campus specializes in areas like fashion, finance, and public health. GCU has been named UK Modern University of the Year by the Daily Mail University Guide 2025 and consistently ranks highly in national university guides.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.42 L - 21.02 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Edinburgh Napier University",
  //   countryName:"UK",
  //   location: "Edinburgh, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1536658853phpxe5HqI_270x200.jpg",
  //   websiteLink:"https://www.napier.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Sighthill.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Craiglockhart.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Merchiston_Castle.jpg/1280px-Merchiston_Castle.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/e/e4/Edinburgh_Napier_University_logo.png ",
  //   description: "Edinburgh Napier University, established in 1992 with origins dating back to 1964, is a modern public university located in Edinburgh, Scotland. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, computing, engineering, health, and the arts. With a diverse student body representing over 100 countries, Edinburgh Napier provides a vibrant and inclusive academic environment. The university operates three campuses—Merchiston, Craiglockhart, and Sighthill—each equipped with state-of-the-art facilities. Edinburgh Napier is recognized for its strong industry links, high graduate employability, and commitment to research excellence, having been awarded the Queen's Anniversary Prize twice for its work in sustainable construction and timber engineering.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.16 L - 22.81 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of the West of England",
  //   countryName:"UK",
  //   location: "Bristol, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1623052710phpHHrj0i_270x200.jpg",
  //   websiteLink:"https://www.uwe.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/UWE_sign_on_the_Frenchay_campus_celebrating_30_years_%28August_2024%29.jpg/2560px-UWE_sign_on_the_Frenchay_campus_celebrating_30_years_%28August_2024%29.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Glenside_Hospital%2C_main_building%2C_front.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/University_of_the_West_of_England_Engineering_Building_at_Night.jpg/2880px-University_of_the_West_of_England_Engineering_Building_at_Night.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Students%27_Union_at_UWE.png/2560px-Students%27_Union_at_UWE.png ",
  //   description: "The University of the West of England (UWE Bristol), established in 1992 with origins dating back to 1595, is a prominent public research university located in Bristol, England. As one of the UK's largest universities, it offers over 600 undergraduate and postgraduate programs across disciplines such as arts, business, engineering, health, and technology. UWE Bristol is renowned for its strong emphasis on employability, industry partnerships, and innovative research. The university operates multiple campuses, including the main Frenchay Campus, City Campus, Glenside Campus, and Gloucester Campus, each equipped with state-of-the-art facilities. With a diverse student body representing over 140 nationalities, UWE Bristol provides a vibrant and inclusive academic environment, fostering a culture of enterprise and global engagement.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.82 L - 36.79 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "De Montfort University",
  //   countryName:"UK",
  //   location: "Leicester, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534234018php9OsPuF_270x200.jpg",
  //   websiteLink:"https://www.dmu.ac.uk/home.aspx ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Hawthorn_Building2.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/8/88/Magazine_Square%2C_Leicester.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/1/16/Fletcher_Building.jpg",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/1/17/De_Montfort_University_logo.svg/2880px-De_Montfort_University_logo.svg.png ",
  //   description: "De Montfort University (DMU), established in 1992 with origins dating back to 1870, is a dynamic public university located in Leicester, England. The university offers a wide range of undergraduate and postgraduate programs across four faculties: Art, Design and Humanities; Business and Law; Health and Life Sciences; and Computing, Engineering and Media. With a diverse student body representing over 130 nationalities, DMU provides a vibrant and inclusive academic environment. The university is renowned for its innovative teaching methods, strong industry links, and commitment to research excellence, with over 60% of its research rated as world-leading or internationally excellent. DMU's city-centre campus features state-of-the-art facilities, including the Hugh Aston Building and the Vijay Patel Building, enhancing the student learning experience. The university has been recognized for its commitment to sustainability and social responsibility, serving as the United Nations' designated hub for Sustainable Development Goal 16: Peace, Justice and Strong Institutions.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.33 L - 21 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Brighton",
  //   countryName:"UK",
  //   location: "Brighton, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539156338php83mNQ0_270x200.jpg",
  //   websiteLink:"https://www.brighton.ac.uk/index.aspx ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/University_of_Brighton_Faculty_of_Art_and_Design%2C_Grand_Parade%2C_Brighton_%28November_2015%29.JPG/2880px-University_of_Brighton_Faculty_of_Art_and_Design%2C_Grand_Parade%2C_Brighton_%28November_2015%29.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Mithras_House_%28University_of_Brighton%29%2C_Lewes_Road%2C_Brighton_%28December_2012%29_%282%29.JPG ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Checkland-building-falmer-faculty-of-arts-university-of-brighton.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/University_of_Brighton_logo.svg/2880px-University_of_Brighton_logo.svg.png ",
  //   description: "The University of Brighton, established in 1992 with origins dating back to 1858, is a public university located on the south coast of England. With a diverse student body of over 18,000 students from more than 150 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as art and design, engineering, business, health sciences, and social sciences. The university operates multiple campuses in Brighton and Eastbourne, each equipped with state-of-the-art facilities. Committed to inclusivity, sustainability, creativity, and partnership, the University of Brighton emphasizes practical learning and strong industry connections to enhance student employability. The university's research initiatives have a significant impact beyond academia, contributing to economic and societal development.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.99 L - 18.9 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Bradford",
  //   countryName:"UK",
  //   location: "Bradford, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1501753337phphEgIKL_270x200.jpg",
  //   websiteLink:"https://www.bradford.ac.uk/external/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/University_of_Bradford_Richmond_24_April_2017_01.jpg/2880px-University_of_Bradford_Richmond_24_April_2017_01.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Library_and_Student_Central_Building%2C_Bradford_University_%287197638816%29.jpg/2560px-Library_and_Student_Central_Building%2C_Bradford_University_%287197638816%29.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/5/53/Digital_Arts_Centre_at_University_of_Bradford.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/University_of_Bradford_logo.svg/2880px-University_of_Bradford_logo.svg.png ",
  //   description: "The University of Bradford, established in 1966 with origins dating back to 1832, is a public research university located in Bradford, West Yorkshire, England. Renowned for its commitment to social inclusion and sustainability, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, health sciences, management, and social sciences. With a diverse student body representing over 110 countries, Bradford provides a vibrant and inclusive academic environment. The university is home to the world's largest center for the study of peace and conflict, established in 1973, and its School of Management holds the prestigious triple-crown accreditation (EQUIS, AMBA, AACSB). The campus features state-of-the-art facilities, including 'The Green,' an award-winning eco-friendly student village. Bradford's emphasis on employability, innovation, and global engagement makes it a top choice for students seeking a transformative educational experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.8 L - 27.04 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Birmingham City University",
  //   countryName:"UK",
  //   location: "Birmingham, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537953425phpglydC8_270x200.jpg",
  //   websiteLink:"https://www.birmingham.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/7/73/BirminghamBIADFineArtMargaretStreet.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Parkside_%26_Curzon_2017.jpg/2880px-Parkside_%26_Curzon_2017.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Royal_Birmingham_Conservatoire_2017.jpg/2880px-Royal_Birmingham_Conservatoire_2017.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/c/c3/Birmingham_City_University_logo_with_white_tiger.jpg ",
  //   description: "Birmingham City University (BCU), established in 1992 with origins dating back to 1843, is a dynamic public university located in Birmingham, England. With a diverse student body of over 31,000 students from more than 100 countries, BCU offers a wide range of undergraduate and postgraduate programs across faculties such as Arts, Design and Media; Business, Law and Social Sciences; Health, Education and Life Sciences; and Computing, Engineering and the Built Environment. The university is renowned for its practice-based learning approach, strong industry links, and commitment to research excellence. BCU's modern campuses, including the City Centre Campus and City South Campus, feature state-of-the-art facilities like the Royal Birmingham Conservatoire and the STEAMhouse innovation center, providing students with cutting-edge resources to enhance their learning experience.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.86 L - 19.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Oxford Brookes University",
  //   countryName:"UK",
  //   location: "Oxford, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535007058phpNjhVkg_270x200.jpg",
  //   websiteLink:"https://www.brookes.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Marston_Road_site%2C_Oxford_Brookes_University.JPG/2560px-Marston_Road_site%2C_Oxford_Brookes_University.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/John_Henry_Brookes_building_front%2C_February_2014.jpg/2560px-John_Henry_Brookes_building_front%2C_February_2014.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/5/59/19Jan07_066.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Oxford_Brookes_University_logo.svg/2880px-Oxford_Brookes_University_logo.svg.png ",
  //   description: "Oxford Brookes University, established in 1992 with origins dating back to 1865, is a leading public university located in Oxford, England. Renowned for its innovative teaching, research excellence, and strong industry links, the university offers a wide range of undergraduate and postgraduate programs across faculties such as Business, Health and Life Sciences, Humanities and Social Sciences, and Technology, Design and Environment. With a diverse student body representing over 140 countries, Oxford Brookes provides a vibrant and inclusive academic environment. The university operates multiple campuses, including the main Headington Campus, each equipped with state-of-the-art facilities. Oxford Brookes is recognized globally for its commitment to sustainability, employability, and student satisfaction, consistently ranking among the top modern universities in the UK.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.18 L - 22.36 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },

  // {
  //   universityName: "University of Derby",
  //   countryName:"UK",
  //   location: "Derby, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538733343phpbIUpy7_270x200.jpg",
  //   websiteLink:"https://www.studyin-uk.com/profiles/university/derby/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Devonshire_Dome_1.jpg/1280px-Devonshire_Dome_1.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Markeaton_Street.JPG ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/0/03/Derby031.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/6/62/University_of_Derby_logo.svg/2880px-University_of_Derby_logo.svg.png ",
  //   description: "The University of Derby, established in 1992 with origins dating back to 1851, is a modern public university located in Derby, England. Renowned for its commitment to applied learning and industry engagement, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health sciences, arts, and education. With a diverse student body representing over 100 countries, Derby provides a vibrant and inclusive academic environment. The university has been awarded Gold in the Teaching Excellence Framework (TEF) 2023, reflecting its outstanding student experience and outcomes. Its campuses feature state-of-the-art facilities, including the Kedleston Road site, Britannia Mill, and One Friar Gate Square. Derby's strong emphasis on employability, innovative research, and community engagement makes it a top choice for students seeking a career-focused education.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.66 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Anglia Ruskin University",
  //   countryName:"UK",
  //   location: "Cambridge, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534504694phpwFtpuH_270x200.jpg",
  //   websiteLink:"https://www.aru.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/a/ae/ARU_Chelmsford.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Anglia_Ruskin_University_Peterborough.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/b/bf/Anglia_Ruskin_University_Chelmsford_Medical_Building.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Anglia_Ruskin_University_logo.svg/2880px-Anglia_Ruskin_University_logo.svg.png ",
  //   description: "Anglia Ruskin University (ARU), established in 1992 with origins dating back to 1858, is a modern public university located in East Anglia, England. With campuses in Cambridge, Chelmsford, Peterborough, and London, ARU offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, health sciences, engineering, and social sciences. The university is recognized for its commitment to teaching excellence, holding a Gold rating in the Teaching Excellence Framework (TEF) 2023, and was named Times Higher Education University of the Year 2023. ARU's diverse student body represents over 185 countries, fostering a vibrant and inclusive academic environment. The university emphasizes employability, innovation, and sustainability, with strong industry links and state-of-the-art facilities, including the first School of Medicine in Essex and the Cambridge Institute for Music Therapy Research.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.99 L - 20.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cranfield University",
  //   countryName:"UK",
  //   location: "Cranfield, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534420953phpQ7uo0p_270x200.jpg",
  //   websiteLink:"https://www.cranfield.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cranfield_University_Entrance_2012.jpg/2560px-Cranfield_University_Entrance_2012.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cranfield_University_AIRC.jpg/2560px-Cranfield_University_AIRC.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cranfield_University_Vincent_Building.jpg/2560px-Cranfield_University_Vincent_Building.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Coat_of_Arms_of_Cranfield_University.svg/1920px-Coat_of_Arms_of_Cranfield_University.svg.png ",
  //   description: "Cranfield University, established in 1946 as the College of Aeronautics and granted university status in 1993, is a prestigious postgraduate-only public research university located in Bedfordshire, England. Specializing in science, engineering, technology, and management, Cranfield offers a wide range of master's and doctoral programs across disciplines such as aerospace, defense and security, energy and power, environment and agrifood, manufacturing, transport systems, and water. The university is renowned for its strong industry partnerships, with collaborations involving nearly 1,500 organizations worldwide. Cranfield boasts a 5:1 student-to-staff ratio, one of the best in the UK, and attracts students from over 100 countries, fostering a vibrant and inclusive academic environment. The university operates two campuses: the main campus in Cranfield, which uniquely features its own airport, and a second campus at the Defence Academy of the United Kingdom in Shrivenham. Cranfield's commitment to research excellence is evident, with 88% of its research rated as world-leading or internationally excellent in the latest Research Excellence Framework. The university has also been awarded the prestigious Queen's Anniversary Prize six times, recognizing its significant contributions to various fields.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.8 L - 34.83 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Sheffield Hallam University",
  //   countryName:"UK",
  //   location: "Sheffield, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1401085051phpqdDPuQ_270x200.jpg",
  //   websiteLink:"https://www.shu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/47/Sheffield_Hallam_University.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sheffield_Hallam_University_buildings.jpg/2560px-Sheffield_Hallam_University_buildings.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/SHU_Students_Union_30_Oct_2017_2.jpg/2560px-SHU_Students_Union_30_Oct_2017_2.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sheffield_Hallam_University_logo.svg/2880px-Sheffield_Hallam_University_logo.svg.png ",
  //   description: "Sheffield Hallam University (SHU), established in 1992 with origins dating back to 1843, is one of the UK's largest and most diverse public research universities, located in Sheffield, South Yorkshire, England. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health, social sciences, and the arts. With a diverse student body of over 30,000 students from more than 100 countries, SHU provides a vibrant and inclusive academic environment. The university operates two main campuses: the City Campus, situated in the heart of Sheffield, and the Collegiate Campus, located in a leafy suburb. SHU is renowned for its commitment to applied learning, strong industry partnerships, and research excellence, with 72% of its research rated as world-leading or internationally excellent in the latest Research Excellence Framework. The university has been awarded Gold in the Teaching Excellence Framework (TEF) 2023, reflecting its outstanding teaching quality and student outcomes.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.82 L - 19.82 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Roehampton",
  //   countryName:"UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1411367551phpwLGFiF_270x200.jpg",
  //   websiteLink:"https://www.roehampton.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Grove_House%2C_Roehampton_-_Diliff.jpg/2880px-Grove_House%2C_Roehampton_-_Diliff.jpg ",
  //   image3:" ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/University_of_Roehampton%2C_Whitelands_College%2C_Parkstead_House.jpg/2880px-University_of_Roehampton%2C_Whitelands_College%2C_Parkstead_House.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/a/a4/University_of_Roehampton_logo.png ",
  //   description: "The University of Roehampton, established in 2004 with origins dating back to 1841, is a public university located in southwest London, England. Formed from the union of four historic colleges—Whitelands, Digby Stuart, Froebel, and Southlands—the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, humanities, social sciences, education, business, and health sciences. With a diverse student body representing over 140 nationalities, Roehampton provides a vibrant and inclusive academic environment. The university's 54-acre parkland campus combines historic buildings with modern facilities, including a state-of-the-art library and digital media center. Roehampton has been recognized with a Silver rating in the Teaching Excellence Framework (TEF) 2023 for delivering high-quality teaching and student outcomes. In the Research Excellence Framework (REF) 2021, 77% of its research was rated as world-leading or internationally excellent, making it the highest-ranked modern university in London for research quality.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.63 L - 23.2 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },

  // {
  //   universityName: "University of Bedfordshire",
  //   countryName:"UK",
  //   location: "Luton, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1400843776phpJQ9SKT_270x200.jpg",
  //   websiteLink:"https://www.beds.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Milton_Keynes_University.JPG ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/4/43/Bedford_campusLibrary.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/UOB-Campus.JPG/2560px-UOB-Campus.JPG ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/e/e0/University_Bedfordshire_logo.png ",
  //   description: "The University of Bedfordshire, established in 2006 through the merger of the University of Luton and De Montfort University's Bedford campus, is a modern public university with campuses in Luton, Bedford, Milton Keynes, and Aylesbury. With a diverse student body representing over 100 countries, the university offers a wide range of undergraduate and postgraduate programs across faculties such as Creative Arts, Technologies and Science; Education and Sport; Health and Social Sciences; and the Business School. The university emphasizes career-focused education, providing practice-led courses, professional accreditations, internships, and strong industry links. Notably, 60% of its research was rated as world-leading or internationally excellent in the latest Research Excellence Framework. The university has invested significantly in state-of-the-art facilities, including a £40 million STEM building at the Luton campus. Recognized for its commitment to sustainability, the University of Bedfordshire has received the EcoCampus Platinum award and ranks highly in the People & Planet University Green League.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.23 L - 17.44 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Westminster",
  //   countryName:"UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1399274501phpH9C9L4_270x200.jpg",
  //   websiteLink:"https://www.westminster.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/University_of_Westminster.jpg/2880px-University_of_Westminster.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/en/2/25/Westminster_Marylebone_Campus.jpg ",
  //   image4:" ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/2/22/UWSU_Logo.gif ",
  //   description: "The University of Westminster, established in 1838 as the Royal Polytechnic Institution, is a public university located in London, England. With a diverse student body of over 19,000 students from more than 160 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, media, law, and science. The university operates four campuses: Regent Street, Marylebone, Cavendish, and Harrow, each equipped with state-of-the-art facilities. Westminster is renowned for its commitment to practical learning, strong industry links, and research excellence, with 80% of its research rated as world-leading or internationally excellent. The university has been awarded a Silver rating in the Teaching Excellence Framework (TEF) 2023, reflecting its high-quality teaching and student outcomes. Notable alumni include Nobel Prize laureate Sir Alexander Fleming and fashion designer Vivienne Westwood.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.77 L - 19.01 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Robert Gordon University",
  //   countryName:"UK",
  //   location: "Aberdeen, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539242141phpZe7lzU_270x200.jpg",
  //   websiteLink:"https://www.rgu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Plaza_at_The_Robert_Gordon_University_2.jpg/500px-Plaza_at_The_Robert_Gordon_University_2.jpg ",
  //   image3:" https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Robert_Gordon_University%2C_Riverside_East_building_atrium%2C_Image_1.jpg/1920px-The_Robert_Gordon_University%2C_Riverside_East_building_atrium%2C_Image_1.jpg",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Autumn_at_RGU_4.jpg/1920px-Autumn_at_RGU_4.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Robert_Gordon_University_logo.svg/2880px-Robert_Gordon_University_logo.svg.png ",
  //   description: "Robert Gordon University (RGU), established in 1992 with origins dating back to 1750, is a modern public university located in Aberdeen, Scotland. Recognized for its strong emphasis on vocational education and industry engagement, RGU offers over 300 undergraduate and postgraduate programs across disciplines such as engineering, architecture, computing, life sciences, creative industries, health and social care, and business. The university boasts a diverse student body of over 18,000 students from more than 150 countries, providing a vibrant and inclusive academic environment. RGU's Garthdee campus features state-of-the-art facilities and has undergone significant investment to enhance the student experience. The university is renowned for its high graduate employability rates, consistently ranking among the top UK universities for graduate-level employment. RGU's commitment to applied research and strategic industry partnerships ensures that its curriculum remains demand-led and relevant to current and future workforce needs.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.43 L - 23.59 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "London Metropolitan University",
  //   countryName:"UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1538736981phpvAuF0G_270x200.jpg",
  //   websiteLink:"https://www.londonmet.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Electra_House.jpg/1920px-Electra_House.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orion_Building_-Post_Graduate_Centre_of_London_Metropolitan_University-9June2009.jpg/2560px-Orion_Building_-Post_Graduate_Centre_of_London_Metropolitan_University-9June2009.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Londonmet_law_building.jpg/2560px-Londonmet_law_building.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/5/50/Metsu_Logo.jpg ",
  //   description: "London Metropolitan University (London Met), established in 2002 through the merger of London Guildhall University and the University of North London, has educational roots dating back to 1848. Located in the heart of London, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, art and design, media, computing, and health sciences. With a diverse student body representing over 140 nationalities, London Met provides a vibrant and inclusive academic environment. The university operates multiple campuses, including Holloway and Aldgate, each equipped with state-of-the-art facilities like the £30 million Science Centre, one of Europe's most advanced science teaching laboratories. London Met is renowned for its commitment to teaching excellence, ranking ninth in the UK for teaching quality and tenth for student experience in The Times and Sunday Times Good University Guide 2024. The university emphasizes employability, with all undergraduate courses incorporating work-related learning opportunities, and maintains strong industry links to ensure students are well-prepared for their future careers.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.45 L - 21.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "London South Bank University",
  //   countryName:"UK",
  //   location: "London, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539083242php6g4kCb_270x200.jpg",
  //   websiteLink:"https://www.lsbu.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Lsbu.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/London_South_Bank_University_inside.jpg/1280px-London_South_Bank_University_inside.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/e/ef/London_South_Bank_University_Keyworth_Centre.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/7/77/LSBU2020logo.png ",
  //   description: "London South Bank University (LSBU), established in 1892 as the Borough Polytechnic Institute and granted university status in 1992, is a public university located in Southwark, London, England. With a diverse student body of over 15,000 students from more than 130 countries, LSBU offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, business, health and social care, arts, and law. The university operates multiple campuses, including the main Southwark campus, and has invested over £65 million in state-of-the-art facilities like the award-winning LSBU Hub. LSBU is renowned for its strong emphasis on employability, with graduates earning the highest average salaries among London modern universities, and has been recognized for its commitment to reducing inequalities, ranking third globally in this area.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.33 L - 25.2 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of the West of Scotland",
  //   countryName:"UK",
  //   location: "Paisley, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505278808phpUauKEI_270x200.jpg",
  //   websiteLink:"https://www.uws.ac.uk/university-life/campuses/paisley-campus/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/2/28/University_of_the_West_of_Scotland_Ayr_Campus_-_geograph.org.uk_-_5995924.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Crichton_Church.jpg/2560px-Crichton_Church.jpg ",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/f/f7/University_of_the_West_of_Scotland_Ayr_Campus_-_geograph.org.uk_-_5996468.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/University_of_the_West_of_Scotland_Logo.svg/2880px-University_of_the_West_of_Scotland_Logo.svg.png ",
  //   description: "The University of the West of Scotland (UWS), established in 2007 with origins dating back to 1897, is a modern public university with campuses in Paisley, Lanarkshire, Ayr, Dumfries, and London. UWS offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health, education, and the arts. With a diverse student body representing over 100 nationalities, the university provides a vibrant and inclusive academic environment. UWS is recognized for its commitment to research excellence, with 90% of its research rated as world-leading or internationally excellent in the latest Research Excellence Framework. The university emphasizes practical learning and strong industry connections, ensuring that graduates are well-prepared for their future careers.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.05 L - 20.13 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Central Lancashire",
  //   countryName:"UK",
  //   location: "Preston, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1493896153phpvvrfdy_270x200.jpg",
  //   websiteLink:"https://www.lancashire.ac.uk/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/8/88/Uclan53degrees.JPG ",
  //   image3:" ",
  //   image4:" ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/University_of_Central_Lancashire_Logo.svg/2880px-University_of_Central_Lancashire_Logo.svg.png ",
  //   description: "The University of Central Lancashire (UCLan), established in 1992 with origins dating back to 1828, is a prominent public university located in Preston, England. As one of the UK's largest universities, UCLan offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health, social sciences, and the arts. With a diverse student body representing over 100 countries, the university provides a vibrant and inclusive academic environment. UCLan operates multiple campuses, including sites in Burnley, Westlakes, and Cyprus, each equipped with state-of-the-art facilities. The university is renowned for its strong emphasis on employability, with 95% of graduates in work or further study within six months of graduation. UCLan has been recognized for its commitment to teaching excellence, holding a Silver rating in the Teaching Excellence Framework (TEF) 2023, and was named University of the Year at the 2023 Edufuturists Uprising awards.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.33 L - 40.06 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of South Wales",
  //   countryName:"UK",
  //   location: "Newport, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1443508045phpFlKX0b_270x200.jpg",
  //   websiteLink:"https://www.southwales.ac.uk/newport/ ",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Caerleon_in_Snow.JPG ",
  //   image3:" https://upload.wikimedia.org/wikipedia/commons/5/5c/University_of_South_Wales%2C_Newport_city_centre_campus.jpg",
  //   image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Caerleon_Campus.jpg/2880px-Caerleon_Campus.jpg ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/f/f6/University_of_South_Wales_Logo.jpg ",
  //   description: "The University of South Wales (USW), established in 2013 through the merger of the University of Glamorgan and the University of Wales, Newport, is one of the largest public universities in Wales. With a student population of over 26,000 from more than 120 countries, USW offers a diverse and inclusive academic environment. The university operates campuses in Cardiff, Newport, and Pontypridd, each equipped with state-of-the-art facilities tailored to various disciplines. USW provides a wide range of undergraduate and postgraduate programs across faculties such as business, engineering, health sciences, creative industries, and computing. Renowned for its strong emphasis on employability, 94% of graduates are in employment or further study within six months of graduation. The university is also recognized for its research excellence, with 81% of its research impact rated as world-leading or internationally excellent. Committed to sustainability and social responsibility, USW aims to be carbon neutral by 2040 and has been designated a University of Sanctuary, reflecting its dedication to creating a welcoming environment for all students.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹4.47 L - 17.89 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cardiff Metropolitan University",
  //   countryName:"UK",
  //   location: "Cardiff, UK",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540213123phpfqvrf6_270x200.jpg",
  //   websiteLink:" https://www.cardiffmet.ac.uk/",
  //   image2:"https://upload.wikimedia.org/wikipedia/commons/4/46/Cardiff_Metropolitan_University_Llandaff_Campus_%281%29_01.jpg ",
  //   image3:"https://upload.wikimedia.org/wikipedia/commons/f/f2/Cardiff_School_of_Art_and_Design_Llandaff.jpg ",
  //   image4:" ",
  //   logo:"https://upload.wikimedia.org/wikipedia/en/9/98/Cardiff_Metropolitan_logo.png ",
  //   description: "Cardiff Metropolitan University, established in 2011 with origins dating back to 1865, is a modern public university located in Cardiff, Wales. With a diverse student body of over 12,000 students from more than 140 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as art and design, business, education, health sciences, sport, and technologies. The university operates two main campuses: Llandaff and Cyncoed, each equipped with state-of-the-art facilities. Cardiff Met is renowned for its strong focus on employability, with 94% of graduates in employment or further study upon completion of their studies. The university has been recognized for its commitment to sustainability, ranking as the best university in Wales for sustainability, and has been awarded the UK & Ireland University of the Year 2021 by Times Higher Education.",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.33 L - 19.68 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  {
    universityName: "The University of Melbourne",
    countryName:" Australia",
    location: "Melbourne, Australia",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539253667php1AcBOm_270x200.jpg",
    websiteLink:"https://www.unimelb.edu.au/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_University_of_Melbourne.JPG/2880px-The_University_of_Melbourne.JPG ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/2/29/VCA_Melbourne.jpg ",
    image4:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Ormond_College%2C_Parkville%2C_Victoria_Australia_%284598156543%29.jpg ",
    logo:"https://brandslogos.com/wp-content/uploads/thumbs/the-university-of-melbourne-logo-black-and-white.png ",
    description: "The University of Melbourne, established in 1853, is Australia's second-oldest university and a leading public research institution located in Melbourne, Victoria. With a diverse student body of over 53,000 students from more than 150 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, engineering, health sciences, law, and science. The university operates multiple campuses, including the main Parkville campus, each equipped with state-of-the-art facilities. Renowned for its research excellence, the University of Melbourne is ranked 13th globally in the QS World University Rankings 2025 and is a member of the prestigious Group of Eight. The university has produced numerous notable alumni, including four Australian prime ministers and nine Nobel Laureates, and maintains strong industry links to ensure students are well-prepared for their future careers.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹23.02 L - 34.51 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "The University of Sydney",
    countryName:" Australia",
    location: "Sydney, Australia",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D_270x200.png",
    websiteLink:"https://www.sydney.edu.au/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/University_of_Sydney%27s_Main_Quadrangle.jpg/2880px-University_of_Sydney%27s_Main_Quadrangle.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/USYD_Quadrangle_%28cropped%29.jpg/2880px-USYD_Quadrangle_%28cropped%29.jpg ",
    image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Physics_Road%2C_University_of_Sydney.jpg/2880px-Physics_Road%2C_University_of_Sydney.jpg ",
    logo:" https://seekvectorlogo.com/wp-content/uploads/2018/01/the-university-of-sydney-vector-logo.png",
    description: "The University of Sydney, established in 1850, is Australia's oldest university and a prestigious public research institution located in Sydney, New South Wales. With a diverse student body of over 70,000 students from more than 150 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as arts, business, engineering, health sciences, law, and science. The university operates multiple campuses, including the main Camperdown/Darlington campus, each equipped with state-of-the-art facilities. Renowned for its research excellence, the University of Sydney ranks 18th globally in the QS World University Rankings 2025 and 29th in the US News Best Global Universities Rankings. The university is a member of the prestigious Group of Eight and has produced numerous notable alumni, including seven Nobel Laureates and eight Australian Prime Ministers.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹22.16 L - 35.11 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "The University of Queensland",
    countryName:" Australia",
    location: "Brisbane, Australia",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1575364977phprol8xE_270x200.jpg",
    websiteLink:"https://www.uq.edu.au/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/University_of_Queensland%2C_Brisbane%2C_Australia.jpg/2880px-University_of_Queensland%2C_Brisbane%2C_Australia.jpg ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/UQ_Art_Museum_11%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_04.jpg/2560px-UQ_Art_Museum_11%2C_St_Lucia_Campus%2C_UQ%2C_Brisbane_04.jpg ",
    image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Steele_Building_surrounding_the_Great_Court%2C_University_of_Queensland_01.jpg/2560px-Steele_Building_surrounding_the_Great_Court%2C_University_of_Queensland_01.jpg ",
    logo:" https://images.squarespace-cdn.com/content/v1/5c6abbc83560c32e41568416/1563694784906-4DT7SOD5UG9AW8FN829E/University-of-Queensland-UQ-logo.png",
    description: "The University of Queensland (UQ), established in 1909, is a prestigious public research university located in Brisbane, Queensland, Australia. As a founding member of the Group of Eight and Universitas 21, UQ is renowned for its excellence in teaching and research. The university offers a wide range of undergraduate and postgraduate programs across disciplines such as science, engineering, health sciences, business, and the arts. With a diverse student body of over 55,000 students, including approximately 21,500 international students from 141 countries, UQ provides a vibrant and inclusive academic environment. The university operates multiple campuses, including the main St Lucia campus, Gatton, Herston, and Dutton Park, each equipped with state-of-the-art facilities. UQ is recognized for its research excellence, with 93 fields of research rated above world standard in the latest ERA assessment. The university has climbed to 40th in the QS World University Rankings 2025 and ranks first nationally and second globally for sports-related subjects. UQ's commitment to innovation and collaboration is exemplified by initiatives like the Queensland Emory Vaccine Centre and the Translational Science Hub, focusing on mRNA technology and vaccine development.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.83 L - 38.62 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Wollongong",
    countryName:" Australia",
    location: "Wollongong, Australia",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1540468765php8iStPY_270x200.jpg",
    websiteLink:"https://www.uow.edu.au/",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Uni_of_Wollongong_Science_buildings.JPG/2880px-Uni_of_Wollongong_Science_buildings.JPG ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Uni_of_Wollongong_McKinnon_building.JPG/2880px-Uni_of_Wollongong_McKinnon_building.JPG ",
    image4:"https://upload.wikimedia.org/wikipedia/commons/2/27/The_Gateway_Building.JPG ",
    logo:"https://upload.wikimedia.org/wikipedia/en/3/30/University_of_Wollongong_Logo.png",
    description: "The University of Wollongong (UOW), established in 1975 with origins dating back to 1951, is a leading public research university located in Wollongong, New South Wales, Australia. With a diverse student body of over 31,000 students from more than 150 countries, UOW offers a wide range of undergraduate and postgraduate programs across disciplines such as engineering, information sciences, health, business, and the arts. The university operates multiple campuses, including the main Wollongong campus and regional campuses across New South Wales, as well as international campuses in Dubai, Hong Kong, and Malaysia. UOW is renowned for its research excellence, with 90% of its research rated as world-leading or internationally excellent in the latest Research Excellence Framework. The university is ranked among the top 200 universities globally and is recognized for its strong emphasis on employability, with graduates ranking second in New South Wales for overall employer satisfaction. UOW's commitment to innovation and collaboration is exemplified by initiatives like the Innovation Campus, which brings together research and industry to drive change through partnership.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹17.24 L - 24.56 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Macquarie University",
    countryName:" Australia",
    location: "Sydney, Australia",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533723518phpzYjJlZ_270x200.jpg",
    websiteLink:"https://www.mq.edu.au/ ",
    image2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Macquarie_University_Hospital.JPG/2560px-Macquarie_University_Hospital.JPG ",
    image3:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Australian_Hearing_Hub.jpg/2560px-Australian_Hearing_Hub.jpg ",
    image4:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lane_Cove_Rd_Building_MQ.JPG/2560px-Lane_Cove_Rd_Building_MQ.JPG ",
    logo:"https://logos-world.net/wp-content/uploads/2023/08/Macquarie-University-Logo.jpg",
    description: "Macquarie University, established in 1964, is a leading public research university located in Sydney, Australia. With a diverse student body of over 44,000 students, including more than 12,000 international students from over 100 countries, the university offers a wide range of undergraduate and postgraduate programs across disciplines such as business, engineering, health sciences, humanities, and sciences. The main Wallumattagal Campus in Macquarie Park spans 126 hectares and features state-of-the-art facilities, including the Macquarie University Hospital, a private teaching hospital, and the Macquarie University Research Park, fostering collaboration with over 300 companies. Macquarie is renowned for its research excellence, with 90% of its research rated as world-leading or internationally excellent. The university is ranked #133 globally in the QS World University Rankings 2025 and #10 in Australia by Times Higher Education. Macquarie's strong emphasis on employability is reflected in its award-winning Professional and Community Engagement (PACE) program, providing students with practical experience through internships and community projects.",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹20.95 L - 33.67 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  // {
  //   universityName: "Monash University",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533128219phpdgezPU_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Monash_University_logo.svg/2560px-Monash_University_logo.svg.png ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.97 L - 30.62 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of New South Wales",
  //   countryName:" Australia",
  //   location: "Kensington, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534232683phphBWBji_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.09 L - 31.08 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Adelaide",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1507613211phpOfXXhe_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.44 L - 29.93 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "James Cook University - Brisbane",
  //   countryName:" Australia",
  //   location: "Brisbane, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1500642455phptu1YeX_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.12 L - 20.83 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Federation University Australia",
  //   countryName:" Australia",
  //   location: "Ballarat, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537330381phpthrLPp_270x200.png",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.58 L - 16.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "RMIT University",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533809674phpSjXxio_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.68 L - 26.52 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Australian National University",
  //   countryName:" Australia",
  //   location: "Canberra, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534145428phphY0syB_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.9 L - 32.44 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Western Australia",
  //   countryName:" Australia",
  //   location: "Perth, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541403097phplpDP5l_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.53 L - 45.32 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Federation University Australia - Brisbane Campus",
  //   countryName:" Australia",
  //   location: "Brisbane, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1687778870phpRjfg9L_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.48 L - 16.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Deakin University",
  //   countryName:" Australia",
  //   location: "Burwood, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1634799427phpeTFsva_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 26.01 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Technology, Sydney",
  //   countryName:" Australia",
  //   location: "Ultimo, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535453500phpvgIZp1_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.27 L - 33.09 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Curtin University - Australia",
  //   countryName:" Australia",
  //   location: "Perth, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1496824636phpz3FH7X_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.53 L - 24.92 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Deakin University",
  //   countryName:" Australia",
  //   location: "Burwood, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1634799427phpeTFsva_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 26.01 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Western Australia",
  //   countryName:" Australia",
  //   location: "Perth, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541403097phplpDP5l_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.53 L - 45.32 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Wollongong - Australia",
  //   countryName:" Australia",
  //   location: "Wollongong, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540468765php8iStPY_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.24 L - 24.56 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Queensland University of Technology",
  //   countryName:" Australia",
  //   location: "Brisbane, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1688454409phprCSiM9_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.98 L - 24.23 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Macquarie University",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533723518phpzYjJlZ_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.95 L - 33.67 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Griffith University",
  //   countryName:" Australia",
  //   location: "Gold Coast, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533814339php5owQkg_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.43 L - 27.62 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Swinburne University of Technology",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539258560phpv7wJ3h_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.23 L - 27.07 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "La Trobe University",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533118849phpFvdfAD_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.49 L - 43.64 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Tasmania",
  //   countryName:" Australia",
  //   location: "Hobart, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535441166php9jbL2s_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.67 L - 27.24 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Victoria University - Sydney Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1509097633phpUcQ3AM_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.97 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "The University of Newcastle",
  //   countryName:" Australia",
  //   location: "Callaghan, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1614952383phpd54PVf_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.71 L - 26.38 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Western Sydney University",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533896110phpf1Qvb0_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.16 L - 21.11 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of South Australia",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1533883701phpACy6DQ_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.03 L - 23.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Flinders University",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534510779phpDpTl8u_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.16 L - 30.44 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Canberra",
  //   countryName:" Australia",
  //   location: "Canberra, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535352060phplKyc8R_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.11 L - 29.06 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "James Cook University - Australia",
  //   countryName:" Australia",
  //   location: "Townsville City, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1499948698phpvKoAxZ_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.12 L - 21.64 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Edith Cowan University",
  //   countryName:" Australia",
  //   location: "Joondalup, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535522675phpDkLD4o_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.56 L - 43.39 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Southern Queensland",
  //   countryName:" Australia",
  //   location: "Toowoomba, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537336589php2je4Zp_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.43 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Australian Catholic University",
  //   countryName:" Australia",
  //   location: "Ballarat, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1494915301phpV8rtOX_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.29 L - 20.33 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Charles Darwin University",
  //   countryName:" Australia",
  //   location: "Casuarina, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1585746311phpj8hXy0_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.99 L - 20.41 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Victoria University",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534249395phpwA41Gc_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.91 L - 22.33 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of the Sunshine Coast",
  //   countryName:" Australia",
  //   location: "Maroochydore, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1652340956php8whCq9_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.11 L - 17.03 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Bond University",
  //   countryName:" Australia",
  //   location: "Robina, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535102014phpMv0as4_270x200.png",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹22.88 L - 42.64 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of New England",
  //   countryName:" Australia",
  //   location: "Armidale, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1536039932phppQX7HO_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.47 L - 20.85 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Central Queensland University",
  //   countryName:" Australia",
  //   location: "Rockhampton, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535095138phpN2utER_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.61 L - 25.9 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Southern Cross University",
  //   countryName:" Australia",
  //   location: "Lismore, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535112456php7vI3qN_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.9 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Federation University Australia",
  //   countryName:" Australia",
  //   location: "Ballarat, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537330381phpthrLPp_270x200.png",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.58 L - 17.9 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Charles Sturt University",
  //   countryName:" Australia",
  //   location: "Albury, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534225444phpTc9G4M_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.52 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Melbourne Institute of Technology",
  //   countryName:" Australia",
  //   location: "Melbourne, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1514974330phpOseZ9r_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.87 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Torrens University",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1585549140php6U7GU0_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹17.47 L - 20.72 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Stanley College",
  //   countryName:" Australia",
  //   location: "Perth, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1702291208phpd0hVo1_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹5.64 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Federation University Australia - Brisbane Campus",
  //   countryName:" Australia",
  //   location: "Brisbane, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537181194phpBTmvlm_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.48 L - 16.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "James Cook University - Brisbane",
  //   countryName:" Australia",
  //   location: "Brisbane, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1500642455phptu1YeX_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.12 L - 20.83 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Carnegie Mellon University - Australia",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1499164049phpnoxRiz_270x200.png",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹27.26 L - 45.37 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Kaplan Business School",
  //   countryName:" Australia",
  //   location: "Adelaide, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505110850phpPBpaeD_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.41 L - 28.03 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Griffith College Australia",
  //   countryName:" Australia",
  //   location: "Mount Gravatt, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1681376644phpKqmGVq_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹8.63 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "La Trobe University - Sydney Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1615986795phpCyGQuI_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹21.75 L - 22.21 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Charles Sturt University - Sydney Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1417417676phpdYxISJ_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹19.52 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "SP Jain School Of Global Management - Sydney Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1620019766phpg8GTk8_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.2 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Western Sydney University, Sydney City Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1616070134php2HE2m2_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.11 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "IIBIT Sydney",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1546572204php8giThp_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹16.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Southern Cross University - Sydney Campus",
  //   countryName:" Australia",
  //   location: "Sydney, Australia",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1509012035phpI4twgZ_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.4 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },


  {
    universityName: "Technical University of Munich",
    countryName:"Germany",
    location: "Munich, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" https://learningabroad.utoronto.ca/wp-content/uploads/TUM_logo.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 11.19 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Ludwig Maximilians University Munich",
    countryName:"Germany",
    location: "Munich, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535019884php6xm6hf_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:"  https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LMU_Muenchen_Logo.svg/1280px-LMU_Muenchen_Logo.svg.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 11.19 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "RWTH Aachen University",
    countryName:"Germany",
    location: "Aachen, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534133001phpYHn5t8_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" https://seeklogo.com/images/R/rwth-aachen-university-logo-0B4D95CD9D-seeklogo.com.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 13.99 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "EU Business School - Munich",
    countryName:"Germany",
    location: "Munich, Germany",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1514958483php4awclE_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/EU_Business_School_logo_2017_new.png/300px-EU_Business_School_logo_2017_new.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.55 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GMAT" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Berlin School of Business & Innovation",
    countryName:"Germany",
    location: "Berlin, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1593517035phpg7q0HA_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" https://d30mzt1bxg5llt.cloudfront.net/public/uploads/images/_signatoryLogo/BSBI-NEW-LOGO.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹11.75 L - 12.36 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Heidelberg University",
    countryName:"Germany",
    location: "Heidelberg, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1541158293phpdnuacJ_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" https://inside.heidelberg.edu/sites/default/files/users/rhiser/images/H.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 2.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Bonn",
    countryName:"Germany",
    location: "Bonn, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535522883phpWhKR4a_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Technical University of Berlin",
    countryName:"Germany",
    location: "Berlin, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1533883013phpYG0iKO_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 13.93 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "IU International University of Applied Sciences",
    countryName:"Germany",
    location: "Berlin, Germany",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1716976658phpMaVTl9_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹6.84 L - 8.9 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "International School of Management",
    countryName:"Germany",
    location: "Dortmund, Germany",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1546603925phpQRJra7_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹12.09 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Albert Ludwigs University of Freiburg",
    countryName:"Germany",
    location: "Freiburg im Breisgau, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1416310765phpywRLDP_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 2.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University of Tuebingen",
    countryName:"Germany",
    location: "Tubingen, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1547442376phpV9ObKA_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 2.8 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Humboldt University of Berlin",
    countryName:"Germany",
    location: "Berlin, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534925114phpHWONUz_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹0 - 8.81 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Free University of Berlin",
    countryName:"Germany",
    location: "Berlin, Germany",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1534248249phpYrR9Pf_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "No Fees",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Fresenius University of Applied Sciences",
    countryName:"Germany",
    location: "Idstein, Germany",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1716790472phpx6aZTH_270x200.jpg",
    image2:" ",
    image3:" ",
    image4:" ",
    logo:" ",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹9.18 L - 10.63 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  // {
  //   universityName: "SRH Hochschule Heidelberg",
  //   countryName:"Germany",
  //   location: "Heidelberg, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1543918205phpeqWDFh_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹8.84 L - 12.03 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Karlsruhe Institute of Technology",
  //   countryName:"Germany",
  //   location: "Karlsruhe, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535442840php6iuI85_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Hamburg",
  //   countryName:"Germany",
  //   location: "Hamburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1535387941phpTJFusd_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Europe for Applied Sciences",
  //   countryName:"Germany",
  //   location: "Hamburg, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1622816256php9crSDH_270x200.png",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.2 L - 11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Lancaster University, Leipzig",
  //   countryName:"Germany",
  //   location: "Leipzig, Germany",
  //   uniType: "State",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1679573459phpKHtEsg_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹20.98 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Dresden University of Technology",
  //   countryName:"Germany",
  //   location: "Dresden, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537940879phppY20uD_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Gottingen",
  //   countryName:"Germany",
  //   location: "Göttingen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534937542phpE9yuZ6_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Friedrich Alexander University Erlangen-Nuremberg",
  //   countryName:"Germany",
  //   location: "Erlangen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1413797974phpq5it2O_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "SRH Hochschule Berlin",
  //   countryName:"Germany",
  //   location: "Berlin, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1504076987phphwwIo2_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.68 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "EBS University of Business and Law",
  //   countryName:"Germany",
  //   location: "Rheingau-Taunus-Kreis, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1488889469phpEiFDi9_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.83 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Stuttgart",
  //   countryName:"Germany",
  //   location: "Stuttgart, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1534849633phpXb9fg0_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technische Universität Darmstadt",
  //   countryName:"Germany",
  //   location: "Darmstadt, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1412763453phppbGRH2_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Goethe University Frankfurt",
  //   countryName:"Germany",
  //   location: "Frankfurt, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539600569php3POyKK_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Cologne",
  //   countryName:"Germany",
  //   location: "Cologne, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1537941015phpgrJIql_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Wurzburg",
  //   countryName:"Germany",
  //   location: "Wurzburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1411455928phpokoHf4_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Ulm",
  //   countryName:"Germany",
  //   location: "Ulm, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541498163php0NYrEE_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Heinrich Heine University Dusseldorf",
  //   countryName:"Germany",
  //   location: "Dusseldorf, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1650860506phppbngjw_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Johannes Gutenberg University",
  //   countryName:"Germany",
  //   location: "Mainz, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1547027727phpl5LqYe_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Potsdam",
  //   countryName:"Germany",
  //   location: "Potsdam, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1651025961php9mfGCJ_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Kiel",
  //   countryName:"Germany",
  //   location: "Kiel, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539089568php631cc9_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 7.69 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Munster",
  //   countryName:"Germany",
  //   location: "Munster, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540981576phpEimEOn_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Giessen",
  //   countryName:"Germany",
  //   location: "Giessen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1649424669phpq1iriQ_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Ruhr-University Bochum",
  //   countryName:"Germany",
  //   location: "Bochum, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1641895863phpptgXq3_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 16.79 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Leibniz Universitat Hannover",
  //   countryName:"Germany",
  //   location: "Hannover, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1636452666phpOU9kZ4_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Universität Konstanz",
  //   countryName:"Germany",
  //   location: "Konstanz, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1416381707phpjP2ZmZ_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 4.66 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Bremen",
  //   countryName:"Germany",
  //   location: "Bremen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539083453phpzQNTm4_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Hohenheim",
  //   countryName:"Germany",
  //   location: "Stuttgart, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1650457611phpWwXIcP_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technical University Dortmund",
  //   countryName:"Germany",
  //   location: "Dortmund, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632398736phpBaqOzS_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 1.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Saarland University",
  //   countryName:"Germany",
  //   location: "Saarbrucken, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632902492phpIDoU2x_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Duisburg-Essen",
  //   countryName:"Germany",
  //   location: "Duisburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1668449781phpvI8tQm_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Braunschweig University of Technology",
  //   countryName:"Germany",
  //   location: "Brunswick, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1542002338phpgIyuII_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 93.25 K",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "CELPIP" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Hamburg University of Technology",
  //   countryName:"Germany",
  //   location: "Hamburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539600527phprnzH30_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Philipps University of Marburg",
  //   countryName:"Germany",
  //   location: "Marburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1545983161phpLdIf3R_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Bayreuth",
  //   countryName:"Germany",
  //   location: "Bayreuth, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539327315php3KT1sD_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Leipzig University",
  //   countryName:"Germany",
  //   location: "Leipzig, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539597286phpWC9nCe_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 8.63 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Siegen",
  //   countryName:"Germany",
  //   location: "Siegen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1648803610phpLLGf2E_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Chemnitz University of Technology",
  //   countryName:"Germany",
  //   location: "Chemnitz, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1495781510phpYTxwPu_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Mannheim",
  //   countryName:"Germany",
  //   location: "Mannheim, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539604357phpbIHfeD_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹2.8 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GMAT" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Regensburg",
  //   countryName:"Germany",
  //   location: "Regensburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1540538089phpR6hvo0_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Rostock",
  //   countryName:"Germany",
  //   location: "Rostock, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539079106phpOZGK3C_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Brandenburg University of Technology",
  //   countryName:"Germany",
  //   location: "Cottbus, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1643618230phpnhqsWt_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 63.69 K",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Paderborn",
  //   countryName:"Germany",
  //   location: "Paderborn, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541074251phpf2JyCl_270x200.jpg",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cologne University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Cologne, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1546605885phpAsI2WS_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 4.66 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Leuphana University",
  //   countryName:"Germany",
  //   location: "Luneburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1650453419phpZ0DjVY_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Berlin School of Business & Innovation",
  //   location: "Berlin, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1593517035phpg7q0HA_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.75 L - 12.36 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Oldenburg",
  //   countryName:"Germany",
  //   location: "Oldenburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1650969070phpoShI9c_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 1.86 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Europe for Applied Sciences",
  //   countryName:"Germany",
  //   location: "Hamburg, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1622816256php9crSDH_270x200.png",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.2 L - 11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cologne University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Cologne, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1546605885phpAsI2WS_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 4.66 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Leuphana University",
  //   countryName:"Germany",
  //   location: "Luneburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1650453419phpZ0DjVY_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Gisma University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Berlin, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1611148892phpk6TW4a_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.79 L - 14.92 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Martin Luther University of Halle-Wittenberg",
  //   countryName:"Germany",
  //   location: "Halle, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1651037043phppxXuf2_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Otto Von Guericke University Magdeburg",
  //   countryName:"Germany",
  //   location: "Magdeburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632730806phpZS8Nyy_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "SRH Hochschule Heidelberg",
  //   countryName:"Germany",
  //   location: "Heidelberg, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1543918205phpeqWDFh_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹8.84 L - 12.03 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "SRH Hochschule Berlin",
  //   countryName:"Germany",
  //   location: "Berlin, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1504076987phphwwIo2_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 12.68 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technical University of Kaiserslautern",
  //   countryName:"Germany",
  //   location: "Kaiserslautern, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1641362935phpZgebO3_270x200.jpg",
  //   websiteLink:" ",
  //   image2:" ",
  //   image3:" ",
  //   image4:" ",
  //   logo:" ",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 7.46 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Trier",
  //   countryName:"Germany",
  //   location: "Trier, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632311631php02PnMk_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Deggendorf Institute of Technology",
  //   countryName:"Germany",
  //   location: "Deggendorf, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632397993phpYHNUGk_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Passau",
  //   countryName:"Germany",
  //   location: "Passau, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1638272591phphjHZn4_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Hildesheim",
  //   countryName:"Germany",
  //   location: "Hildesheim, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632981774phphzLubh_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technische Hochschule Ingolstadt",
  //   countryName:"Germany",
  //   location: "Ingolstadt, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1433750219phpHsxDvk_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Constructor University",
  //   countryName:"Germany",
  //   location: "Bremen, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539606254phpdC2Y2I_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹18.65 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Lubeck",
  //   countryName:"Germany",
  //   location: "Lubeck, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1636458803phpGdfN3Q_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Kassel",
  //   countryName:"Germany",
  //   location: "Leipzig, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1639390143php2PRki5_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "FH Aachen University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Aachen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1515156110phpPO0VzZ_270x200.png",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Augsburg",
  //   countryName:"Germany",
  //   location: "Augsburg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1541145103phpPqrznz_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technical University of Ilmenau",
  //   countryName:"Germany",
  //   location: "Iserlohn, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632485643phpyVE0jQ_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Fresenius University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Idstein, Germany",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1716790472phpx6aZTH_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹9.18 L - 10.63 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Koblenz-Landau",
  //   countryName:"Germany",
  //   location: "Koblenz, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1658390384phptlX06u_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "TU Bergakademie Freiberg",
  //   countryName:"Germany",
  //   location: "Freiberg, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1645160714phpqbY76F_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Fulda University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Leipzig, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632996337php6iPJJT_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Frankfurt University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Frankfurt, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1645431932phpRohxGq_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Bauhaus University Weimar",
  //   countryName:"Germany",
  //   location: "Weimar, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1658813890phpC7ebGq_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Hof University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Hof, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632310012phpxqQux6_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Kiel University of Applied Sciences",
  //   countryName:"Germany",
  //   location: "Kiel, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1646975667php2HO5Rp_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹0 - 4.62 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "GRE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Applied Sciences Bingen",
  //   countryName:"Germany",
  //   location: "Bingen, Germany",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1653373730phpyKg9YB_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "No Fees",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  {
    universityName: "Trinity College Dublin",
    countryName:"Ireland",
    location: "Dublin, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1506081013phpIBVFp2_270x200.jpg",
    logo:" https://seeklogo.com/images/T/trinity-college-logo-1CBF853A26-seeklogo.com.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹15.42 L - 25.76 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
        ranking: "A++"
      }
    ]
  },
  {
    universityName: "University College Dublin",
    countryName:"Ireland",
    location: "Dublin, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1632913162phpX2Q2aT_270x200.jpg",
    logo:" https://upload.wikimedia.org/wikipedia/en/9/9e/UCD_Dublin.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹10.25 L - 27.14 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
        ranking: "A"
      }
    ]
  },
  {
    universityName: "University of Galway",
    countryName:"Ireland",
    location: "Galway, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1664883749phpmwMWmw_270x200.jpg",
    logo:" https://upload.wikimedia.org/wikipedia/en/7/79/University_of_Galway_logo_2022.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹7.55 L - 26.86 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
        ranking: "A"
      }
    ]
  },
  {
    universityName: "Letterkenny Institute of Technology",
    countryName:"Ireland",
    location: "Letterkenny, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1502694420phpDbiLv8_270x200.jpg",
    logo:" https://tukuz.com/wp-content/uploads/2020/05/letterkenny-institute-of-technology-lyit-logo-vector.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹9.32 L - 13.43 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "University College Cork",
    countryName:"Ireland",
    location: "Cork, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1644382168phpdYUqY3_270x200.jpg",
    logo:" https://upload.wikimedia.org/wikipedia/en/thumb/0/09/University_College_Cork_logo.svg/1200px-University_College_Cork_logo.svg.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.61 L - 23.78 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
        ranking: "A"
      }
    ]
  },
  {
    universityName: "University of Limerick",
    countryName:"Ireland",
    location: "Limerick, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1535457467php0UInsN_270x200.jpg",
    logo:" https://tukuz.com/wp-content/uploads/2021/06/university-of-limerick-logo-vector.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹10.44 L - 23.25 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Dublin City University",
    countryName:"Ireland",
    location: "Dublin, Ireland",
    uniType: "Public",
    imageUrl: "https://images.shiksha.com/mediadata/images/1536667121phpWIKpkF_270x200.jpg",
    logo:" https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dublin_City_University_Logo.svg/512px-Dublin_City_University_Logo.svg.png",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹14.92 L - 23.31 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "Griffith College",
    countryName:"Ireland",
    location: "Dublin, Ireland",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1539770504phpTWy2v3_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹10.26 L - 15.39 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  {
    universityName: "National College of Ireland",
    countryName:"Ireland",
    location: "Dublin, Ireland",
    uniType: "Private",
    imageUrl: "https://images.shiksha.com/mediadata/images/1410162026phpBNsmI0_270x200.jpg",
    PG: [
      {
        courseName: "MS in [Course Name]",
        degree: "Masters",
        degreeLevel: "PG",
        price: "₹13.99 L - 15.85 L",
        duration: "2 years",
        exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
        intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
      }
    ]
  },
  // {
  //   universityName: "University College Cork",
  //   countryName:"Ireland",
  //   location: "Cork, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1644382168phpdYUqY3_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹14.61 L - 23.78 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }],
  //       ranking: "A"
  //     }
  //   ]
  // },
  // {
  //   universityName: "Griffith College",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1539770504phpTWy2v3_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.26 L - 15.39 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technological University Dublin",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1683551885phppaOhzF_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.8 L - 20.28 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Maynooth University",
  //   countryName:"Ireland",
  //   location: "Maynooth, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1503644224phpzH6Rlh.jpeg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.05 L - 16.79 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Institute of Technology, Sligo",
  //   countryName:"Ireland",
  //   location: "Sligo, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1586411100phpial5s5_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Dublin Business School",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505732463phpmZ1Jty_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.59 L - 13.52 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Letterkenny Institute of Technology",
  //   countryName:"Ireland",
  //   location: "Letterkenny, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1502694420phpDbiLv8_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹9.32 L - 13.43 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "South East Technological University- Carlow",
  //   countryName:"Ireland",
  //   location: "Carlow, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1669720998php1n7ZFn_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.49 L - 13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technological University of Shannon - Athlone",
  //   countryName:"Ireland",
  //   location: "Athlone, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1684828941phpcUd5pA_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.52 L - 17.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "South East Technological University- Waterford",
  //   countryName:"Ireland",
  //   location: "Waterford, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1399284278phpp38YbU_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹9.79 L - 13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University of Galway",
  //   countryName:"Ireland",
  //   location: "Galway, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1664883749phpmwMWmw_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹7.55 L - 26.86 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "National College of Ireland",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1410162026phpBNsmI0_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Dundalk Institute of Technology",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1577779242phpdY7no9_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.19 L - 15.46 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Cork Institute of Technology",
  //   countryName:"Ireland",
  //   location: "Cork, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1504869605phpgzb2rs_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.19 L - 13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Galway-Mayo Institute of Technology",
  //   countryName:"Ireland",
  //   location: "Galway, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1503484442phpXb30QP_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹6.06 L - 11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "South East Technological University- Carlow",
  //   countryName:"Ireland",
  //   location: "Carlow, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1669720998php1n7ZFn_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹10.49 L - 13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technological University of Shannon - Athlone",
  //   countryName:"Ireland",
  //   location: "Athlone, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1684828941phpcUd5pA_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.52 L - 17.25 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "University College Dublin",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1632913162phpX2Q2aT_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.71 L - 27.14 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technological University Dublin",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1683551885phppaOhzF_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.6 L - 20.28 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Technological University of Shannon - Limerick",
  //   countryName:"Ireland",
  //   location: "Limerick, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1546585907phpbfT5jJ_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.52 L - 15.39 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "National College of Art and Design",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1586512179phpiMtln1_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹15.39 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Institute of Technology, Sligo",
  //   countryName:"Ireland",
  //   location: "Sligo, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1586411100phpial5s5_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Dublin Business School",
  //   countryName:"Ireland",
  //   location: "Dublin, Ireland",
  //   uniType: "Private",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1505732463phpmZ1Jty_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹12.59 L - 13.52 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "South East Technological University- Waterford",
  //   countryName:"Ireland",
  //   location: "Waterford, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1399284278phpp38YbU_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹9.79 L - 13.99 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Maynooth University",
  //   countryName:"Ireland",
  //   location: "Maynooth, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1503644224phpzH6Rlh.jpeg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹13.05 L - 16.79 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // },
  // {
  //   universityName: "Atlantic Technological University - St. Angelas",
  //   countryName:"Ireland",
  //   location: "Sligo, Ireland",
  //   uniType: "Public",
  //   imageUrl: "https://images.shiksha.com/mediadata/images/1712212038phpCpgQmC_270x200.jpg",
  //   PG: [
  //     {
  //       courseName: "MS in [Course Name]",
  //       degree: "Masters",
  //       degreeLevel: "PG",
  //       price: "₹11.19 L",
  //       duration: "2 years",
  //       exams: [{ examName: "IELTS" }, { examName: "TOEFL" }, { examName: "PTE" }, { examName: "Duolingo" }],
  //       intakes: [{ intakeName: "Fall", intakeDate: "2024-09-01", deadline: "2024-07-01" }]
  //     }
  //   ]
  // }
];
module.exports = { data: uniData };