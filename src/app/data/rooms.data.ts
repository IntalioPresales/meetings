import { startOfDay, subDays, endOfMonth, addDays, addHours } from 'date-fns';

export const MyRooms = [
    {
        name: 'Room 301',
        number: 301,
        available: true,
        size: 12,
        amenities: [
            'tv',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 302',
        number: 302,
        available: true,
        size: 8,
        amenities: [
            'tv',
            'microphone',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 303',
        number: 303,
        available: true,
        size: 12,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 304',
        number: 304,
        available: true,
        size: 8,
        amenities: [
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 305',
        number: 305,
        available: true,
        size: 24,
        amenities: [
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 306',
        number: 306,
        available: true,
        size: 8,
        amenities: [
            'wifi',
            'life-ring'
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 307',
        number: 307,
        available: true,
        size: 6,
        amenities: [
            'wifi',
            'life-ring'
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 308',
        number: 308,
        available: true,
        size: 24,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'life-ring'
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 309',
        number: 309,
        available: false,
        size: 12,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 310',
        number: 310,
        available: true,
        size: 8,
        amenities: [
            'tv',
            'wheelchair',
        ],
        needs_cleaning: false,
        enabled: true
    },
    {
        name: 'Room 311',
        number: 311,
        available: true,
        size: 12,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 312',
        number: 312,
        available: false,
        size: 8,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 313',
        number: 313,
        available: false,
        size: 4,
        amenities: [
            'wifi',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 314',
        number: 314,
        available: false,
        size: 4,
        amenities: [
            'tv',
            'wifi',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 315',
        number: 315,
        available: false,
        size: 8,
        amenities: [
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 316',
        number: 316,
        available: false,
        size: 8,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 317',
        number: 317,
        available: false,
        size: 11,
        amenities: [
            'tv',
            'wifi',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 318',
        number: 318,
        available: false,
        size: 28,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 319',
        number: 319,
        available: false,
        size: 18,
        amenities: [
            'tv',
            'wifi',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
    {
        name: 'Room 320',
        number: 320,
        available: false,
        size: 12,
        amenities: [
            'tv',
            'wifi',
            'wheelchair',
            'microphone',
        ],
        needs_cleaning: true,
        enabled: true
    },
];

export const MyUsers = [
  {
    id: 1,
    name: "Mr. Mohamed Rabie KHLIE",
    username: "mohamedrabie",
    email_address: "mohamedrabie@privacy.gov.au",
    image: "http://emilcarlsson.se/assets/haroldgunderson.png",
    dob: "2/7/1994",
    gender: "Male",
    process:"Accepted",
    voted:'' },
{
  id: 2,
  name: "Mr. Said CHANDID",
  username: "saidchandid",
  email_address: "saidchandid@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/louislitt.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Pending",
  voted:''
},
{
  id: 3,
  name: "Ms. Rokia BELKEBIR",
  username: "rokiabelkebir",
  email_address: "rokiabelkebir@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/harveyspecter.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Declined",
  voted:''
},
{
  id: 4,
  name: "Mr. Lahcen ACHIBANE",
  username: "lahcenachibane",
  email_address: "lahcenachibane@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/rachelzane.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Declined",
  voted:''
},
{
  id: 5,
  name: "Mr. Mohammed DOUIRI",
  username: "mohammeddouiri",
  email_address: "mohammeddouiri@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/jonathansidwell.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Pending",
  voted:''
},
{
  id: 6,
  name: "Mr. El Kebir AKRIM",
  username: "elkebirakrim",
  email_address: "elkebirakrim@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/danielhardman.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Accepted",
  voted:''
},
{
  id: 7,
  name: "Ms. Khadija BOURARA",
  username: "khadijabourara",
  email_address: "khadijabourara@privacy.gov.au",
  image: "http://emilcarlsson.se/assets/mikeross.png",
  dob: "2/7/1994",
  gender: "Male",
  process:"Accepted",
  voted:''
}
// },
//     {
//         id: 1,
//         name: "Karam Sameer Gaber",
//         username: "karmsmeer",
//         email_address: "karmsmeer@privacy.gov.au",
//         image: "https://www.arabianbusiness.com/sites/default/files/styles/square_500/public/images/2018/11/22/Jassim-Alseddiqi.jpg",
//         dob: "2/7/1994",
//         gender: "Male"
//     }, {
//         id: 2,
//         name: "Hajar 'Itab Maroun",
//         username: "hjritab",
//         email_address: "hjritab@sun.com",
//         image: "https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2016/december/senior-wins-young-arab-of-the-year-award/_jcr_content/newsarticlecomp/image.img.jpg",
//         dob: "4/20/1988",
//         gender: "Female"
//     }, {
//         id: 3,
//         name: "Ikhlas Yamha Bahar",
//         username: "ikhlasymha",
//         email_address: "ikhlasymha@aboutads.info",
//         image: "https://www.xing.com/image/7_1_4_27b362d2c_26349742_4/yasemin-yildiz-foto.1024x1024.jpg",
//         dob: "6/13/1997",
//         gender: "Female"
//     }, {
//         id: 4,
//         name: "Adib Sahl Asghar",
//         username: "adbSahlas",
//         email_address: "adbSahlas@narod.ru",
//         image: "https://chatimes.com/wp-content/uploads/2018/02/men-hairstyles-indian-men-hairstyles-pictures-indian-hear-style-in-mens.jpg",
//         dob: "12/14/1991",
//         gender: "Male"
//     }, {
//         id: 5,
//         name: "Adham Muthanna Issa",
//         username: "aMMissa",
//         email_address: "aMMissa@alexa.com",
//         image: "http://pixel-industry.com/html/consultingpress/html/img/pics/team02.jpg",
//         dob: "11/23/1982",
//         gender: "Male"
//     }, {
//         id: 6,
//         name: "Zahraa' Siham Isa",
//         username: "zhrasiham",
//         email_address: "zhrasiham@csmonitor.com",
//         image: "https://pbs.twimg.com/media/Ddqd6WmU8AEFNAd.jpg",
//         dob: "9/29/1996",
//         gender: "Female"
//     }, {
//         id: 7,
//         name: "Ferd Iozefovich",
//         username: "fiozefovich6",
//         email_address: "fiozefovich6@disqus.com",
//         image: "https://www.zikoko.com/wp-content/uploads/cloudinary/v1472395902/rhkz05dstawwmfdwbu8m.jpg",
//         dob: "5/16/2000",
//         gender: "Male"
//     }, {
//         id: 8,
//         name: "Nuzhah Fanan Boulos",
//         username: "nuzhfanna",
//         email_address: "nuzhfanna@goodreads.com",
//         image: "http://borgenproject.org/wp-content/uploads/Saudi_Women_Allowed_to_Vote_for_the_First_Time.jpg",
//         dob: "12/19/1993",
//         gender: "Female"
//     }, {
//         id: 9,
//         name: "Lonnie Caddock",
//         username: "lcaddock8",
//         email_address: "lcaddock8@gravatar.com",
//         image: "http://www.qatar-tribune.com/Data/20171022/Images/5_1_1.jpg",
//         dob: "10/31/1990",
//         gender: "Male"
//     }, {
//         id: 10,
//         name: "Morlee Dregan",
//         username: "mdregan9",
//         email_address: "mdregan9@engadget.com",
//         image: "https://www.constructionweekonline.com/sites/default/files/cwo/styles/full_img_sml/public/images/2018/07/28/Ahmed-Yousef-Khouri-Group-CEO-of-Union-Properties_0.jpg?itok=QSAA4Oav",
//         dob: "9/19/1980",
//         gender: "Male"
//     }, {
//         id: 11,
//         name: "Dermot Ghion",
//         username: "dghiona",
//         email_address: "dghiona@usatoday.com",
//         image: "https://www.marhaba.qa/wp-content/uploads/2018/03/Minister-of-Culture-and-Sports-HE-Salah-bin-Ghanem-Al-Ali.jpg",
//         dob: "4/3/1996",
//         gender: "Male"
//     }, {
//         id: 12,
//         name: "Victoir Whittuck",
//         username: "vwhittuckb",
//         email_address: "vwhittuckb@list-manage.com",
//         image: "http://hhsk.bh/ar/wp-content/uploads/2018/06/hhsk.jpg?w=640",
//         dob: "9/6/1988",
//         gender: "Male"
//     }, {
//         id: 13,
//         name: "Neall Webster",
//         username: "nwebsterc",
//         email_address: "nwebsterc@mtv.com",
//         image: "http://www.medicalacademy.org/portal/pictures/1469542621_10403478_10154547229355591_677928872778987313_n.jpg",
//         dob: "5/26/1985",
//         gender: "Male"
//     }, {
//         id: 14,
//         name: "Vaclav Bugler",
//         username: "vbuglerd",
//         email_address: "vbuglerd@google.de",
//         image: "http://www.jre.com.qa/wp-content/uploads/2017/02/chairman-1024x683.jpg",
//         dob: "5/26/1991",
//         gender: "Male"
//     }, {
//         id: 15,
//         name: "Mickie Wrightham",
//         username: "mwrighthame",
//         email_address: "mwrighthame@soundcloud.com",
//         image: "http://qatarcsr.com/uploads/posts/2017-12-10/file_QwYdW37Q.jpg",
//         dob: "5/15/1987",
//         gender: "Male"
//     }, {
//         id: 16,
//         name: "Archaimbaud Gibberd",
//         username: "agibberdf",
//         email_address: "agibberdf@pinterest.com",
//         image: "https://wyscout.com/wp-content/uploads/2017/08/harami.jpg",
//         dob: "6/19/1989",
//         gender: "Male"
//     }, {
//         id: 17,
//         name: "Ganny Healks",
//         username: "ghealksg",
//         email_address: "ghealksg@zimbio.com",
//         image: "https://www.arcapita.com/wp-content/uploads/2018/03/isa_al_khalifa.jpg",
//         dob: "6/9/1993",
//         gender: "Male"
//     }, {
//         id: 18,
//         name: "Na'imah Makarim Nahas",
//         username: "makarimnahasn",
//         email_address: "makarimnahasn@independent.co.uk",
//         image: "http://www.qatar-tribune.com/Data/20161006/Images/1_2_1.jpg",
//         dob: "6/22/2000",
//         gender: "Female"
//     }, {
//         id: 19,
//         name: "Sid Whysall",
//         username: "swhysalli",
//         email_address: "swhysalli@pagesperso-orange.fr",
//         image: "https://i0.wp.com/heaclub.ru/tim/1924c21ee592e119f8e6b7ebbde344de.jpg",
//         dob: "11/7/1995",
//         gender: "Male"
//     }, {
//         id: 20,
//         name: "Musnah Fahada Abboud",
//         username: "musnfahadaabb331",
//         email_address: "musnfahadaabb_331@elpais.com",
//         image: "http://qatarcsr.com/uploads/posts/2017-12-10/file_iabnco7F.jpg",
//         dob: "9/11/1984",
//         gender: "Female"
//     },
];

export const MyEvents = [
    {
        // start: "2019-07-02T12:30:00.000Z",
        // end: "2019-07-02T15:30:00.000Z",
        start: addHours(startOfDay(new Date()), 10),
        end: addHours(startOfDay(new Date()), 14),
        truevotes:[],
        falsevotes:[],
        title: "Final decision discussion web.url",
        color: {
            primary: "#ad2121",
            secondary: "#FAE3E3"
        },
        allDay: false,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: false,
        meta: {
            roomNumber: {
                number: 303,
                name: "Room 303"
            },
            users: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 }
            ]
        }
    },
    {
        // addDays(new Date(), 1)
        // start: "2019-07-07T12:30:00.000Z",
        // end: "2019-07-07T15:30:00.000Z",
        start: addHours(startOfDay(addDays(new Date(), 4)), 12),
        end: addHours(startOfDay(addDays(new Date(), 4)), 16),
        truevotes:[],
        falsevotes:[],
        title: "Important Meeting Conference",
        color: {
            primary: "#ad2121",
            secondary: "#FAE3E3"
        },
        allDay: false,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: false,
        meta: {
            roomNumber: {
                number: 304,
                name: "Room 304"
            },
            users: [
                { id: 5 },
                { id: 6 },
                { id: 2 },
                { id: 1 }
            ]
        }
    },
    {
        // addDays(new Date(), 1)
        // start: "2019-07-07T12:30:00.000Z",
        // end: "2019-07-07T15:30:00.000Z",
        start: addHours(startOfDay(addDays(new Date(), 2)), 14),
        end: addHours(startOfDay(addDays(new Date(), 2)), 18),
        truevotes:[],
        falsevotes:[],
        title: "Reqruitment 205 Mobile Developer",
        color: {
            primary: "#ad2121",
            secondary: "#FAE3E3"
        },
        allDay: false,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: false,
        meta: {
            roomNumber: {
                number: 316,
                name: "Room 316"
            },
            users: [
                { id: 6 },
                { id: 3 },
                { id: 2 },
                { id: 1 }
            ]
        }
    },
    {
        start: addHours(startOfDay(new Date()), 9),
        end: addHours(startOfDay(new Date()), 12),
        truevotes:[],
        falsevotes:[],
        title: "Project X final meeting (launching)",
        color: {
            primary: "#ad2121",
            secondary: "#FAE3E3"
        },
        allDay: false,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: false,
        meta: {
            roomNumber: {
                number: 309,
                name: "Room 309"
            },
            users: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 }
            ]
        }
    },
    {
        start: addHours(startOfDay(new Date()), 16),
        end: addHours(startOfDay(new Date()), 18),
        truevotes:[],
        falsevotes:[],
        title: "Monthly staff discussion YYU co.",
        color: {
            primary: "#ad2121",
            secondary: "#FAE3E3"
        },
        allDay: false,
        resizable: {
            beforeStart: true,
            afterEnd: true
        },
        draggable: false,
        meta: {
            roomNumber: {
                number: 307,
                name: "Room 307"
            },
            users: [
                { id: 3 },
                { id: 2 },
                { id: 6 },
                { id: 1 }
            ]
        }
    }
    // {
    //     id: 1,
    //     title: "Persistent intermediate access",
    //     start: "2019-07-02T02:24:00Z",
    //     end: "2019-07-30T16:40:32Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[0].number
    //     }
    // },
    //  {
    //     id: 2,
    //     title: "Realigned optimizing policy",
    //     start: "2019-07-02T16:19:33Z",
    //     end: "2019-07-11T08:46:40Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[1].number
    //     }
    // }, {
    //     id: 3,
    //     title: "Re-engineered bifurcated concept",
    //     start: "2019-07-03T07:07:51Z",
    //     end: "2019-07-29T05:58:32Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[2].number
    //     }
    // }, {
    //     id: 4,
    //     title: "Object-based 4th generation model",
    //     start: "2019-07-02T02:30:52Z",
    //     end: "2019-07-18T07:17:38Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[3].number
    //     }
    // }, {
    //     id: 5,
    //     title: "Synergized bi-directional adapter",
    //     start: "2019-07-03T08:20:45Z",
    //     end: "2019-07-06T06:02:55Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[4].number
    //     }
    // }, {
    //     id: 6,
    //     title: "Reduced neutral secured line",
    //     start: "2019-07-03T15:53:50Z",
    //     end: "2019-07-10T03:02:32Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[5].number
    //     }
    // }, {
    //     id: 7,
    //     title: "Sharable methodical methodology",
    //     start: "2019-07-03T11:41:36Z",
    //     end: "2019-07-07T05:25:38Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[6].number
    //     }
    // }, {
    //     id: 8,
    //     title: "Vision-oriented tertiary database",
    //     start: "2019-07-02T17:21:30Z",
    //     end: "2019-07-09T10:36:15Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[7].number
    //     }
    // }, {
    //     id: 9,
    //     title: "Future-proofed radical focus group",
    //     start: "2019-07-03T04:29:04Z",
    //     end: "2019-07-24T12:11:57Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[8].number
    //     }
    // }, {
    //     id: 10,
    //     title: "Down-sized solution-oriented contingency",
    //     start: "2019-07-03T20:05:31Z",
    //     end: "2019-07-18T06:26:31Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[9].number
    //     }
    // }, {
    //     id: 11,
    //     title: "Reduced methodical local area network",
    //     start: "2019-07-02T23:23:30Z",
    //     end: "2019-07-22T02:31:28Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[10].number
    //     }
    // }, {
    //     id: 12,
    //     title: "Sharable heuristic synergy",
    //     start: "2019-07-03T10:02:33Z",
    //     end: "2019-07-04T08:15:52Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[11].number
    //     }
    // }, {
    //     id: 13,
    //     title: "Grass-roots context-sensitive concept",
    //     start: "2019-07-02T18:18:14Z",
    //     end: "2019-07-26T06:09:01Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[12].number
    //     }
    // }, {
    //     id: 14,
    //     title: "Compatible upward-trending toolset",
    //     start: "2019-07-03T16:38:23Z",
    //     end: "2019-07-04T07:52:17Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[13].number
    //     }
    // }, {
    //     id: 15,
    //     title: "Down-sized asynchronous model",
    //     start: "2019-07-02T08:44:18Z",
    //     end: "2019-07-26T18:35:20Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[14].number
    //     }
    // }, {
    //     id: 16,
    //     title: "Robust executive secured line",
    //     start: "2019-07-02T13:58:54Z",
    //     end: "2019-07-19T01:18:17Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[15].number
    //     }
    // }, {
    //     id: 17,
    //     title: "Adaptive zero defect policy",
    //     start: "2019-07-02T12:47:27Z",
    //     end: "2019-07-16T23:45:17Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[16].number
    //     }
    // }, {
    //     id: 18,
    //     title: "Digitized non-volatile internet solution",
    //     start: "2019-07-03T16:31:15Z",
    //     end: "2019-07-13T21:08:15Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[17].number
    //     }
    // }, {
    //     id: 19,
    //     title: "Networked composite software",
    //     start: "2019-07-02T01:49:41Z",
    //     end: "2019-07-04T17:28:13Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[18].number
    //     }
    // },
    // {
    //     id: 20,
    //     title: "Operative client-driven hierarchy",
    //     start: "2019-07-02T03:42:38Z",
    //     end: "2019-07-15T02:13:44Z",
    //     color: colors.red,
    //     allDay: false,
    //     resizable: {
    //         beforeStart: false,
    //         afterEnd: false
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[19].number
    //     }
    // },
    // {
    //     start: subDays(startOfDay(new Date()), 1),
    //     end: addDays(new Date(), 1),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     // actions: this.actions,
    //     allDay: true,
    //     resizable: {
    //         beforeStart: true,
    //         afterEnd: true
    //     },
    //     draggable: true,
    //     meta: {
    //         roomId: MyRooms[0].number,
    //         roomName: MyRooms[0].name
    //     }
    // },
    // {
    //     start: startOfDay(new Date()),
    //     title: 'An event with no end date',
    //     color: colors.yellow,
    //     // actions: this.actions
    // },
    // {
    //     start: subDays(endOfMonth(new Date()), 3),
    //     end: addDays(endOfMonth(new Date()), 3),
    //     title: 'A long event that spans 2 months',
    //     color: colors.blue,
    //     allDay: true
    // },
    // {
    //     start: addHours(startOfDay(new Date()), 2),
    //     end: new Date(),
    //     title: 'A draggable and resizable event',
    //     color: colors.yellow,
    //     // actions: this.actions,
    //     resizable: {
    //         beforeStart: true,
    //         afterEnd: true
    //     },
    //     draggable: true
    // }
];



const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
