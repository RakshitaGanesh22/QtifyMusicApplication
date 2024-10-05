import { createContext,useRef,useState } from "react";
const dataProvider=createContext();
function ContextProvider({children}){
    const[TopAlbum,setTopAlbum]=useState([]);
    const[newAlbum,setNewAlbum]=useState([]);
    const[Songs,setSongsData]=useState([]);
    const[FAQdata,setFAQdata]=useState([]);
    const optionData=useRef([]);
    const SingerInfo=useRef([]);
    const[genre,setGener]=useState([]);
    const[modalOpen,setModalOpen]=useState(false);
    const[playing,setPlaying]=useState({
        "id": "f9606cd1-0180-489f-8d33-1425dfc3444e",
        "title": "(I've Got a Gal In) Kalamazoo",
        "artists": [
            "Mr. Doug Schimmel",
            "Charlene Daniel",
            "Darrin Marquardt"
        ],
        "genre": {
            "key": "jazz",
            "label": "Jazz"
        },
        "likes": 76236,
        "image": "https://images.pexels.com/photos/96422/pexels-photo-96422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "durationInMs": 45810
    })
    const[currentSong,setCurrentSong]=useState({
        "id": "55335966-2ddd-4e82-bdd8-f8e92097f7c2",
        "title": "Naive Contact",
        "description": "Necessitatibus facere odit ratione itaque deleniti ut.\nAliquid animi enim eum beatae odit occaecati corporis nisi.\nCupiditate fugiat aliquam neque a perspiciatis.\nPossimus quidem officiis at officia praesentium consequuntur.\nPlaceat libero nulla odit saepe libero dignissimos reiciendis mollitia.",
        "follows": 8315,
        "image": "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "slug": "naive-contact",
        "songs": [
            {
                "id": "7dc7670d-5578-4917-a1f7-2fd216272054",
                "title": "Help!",
                "artists": [
                    "Tracy Stokes",
                    "Frank Gleichner"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 24281,
                "image": "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 54208
            },
            {
                "id": "dcc040d1-eaaf-4054-9486-065c6c77ec34",
                "title": "Rhinestone Cowboy",
                "artists": [
                    "Jackie Schroeder",
                    "Roland Cruickshank"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 94419,
                "image": "https://images.pexels.com/photos/301395/pexels-photo-301395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 55512
            },
            {
                "id": "659bff66-4d2f-4b5d-98e6-c15ad0e4e663",
                "title": "Freebird",
                "artists": [
                    "Wm Reilly"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 28437,
                "image": "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 55603
            },
            {
                "id": "d9c8d519-0ff3-41d3-ae53-52e29b738a67",
                "title": "Sing",
                "artists": [
                    "Andre Jaskolski",
                    "Lucia Torp",
                    "Nellie Hamill"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 56422,
                "image": "https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 26853
            },
            {
                "id": "854ab47c-5d12-4fe8-b678-0c1b48c85f8a",
                "title": "A-Tisket A-Tasket",
                "artists": [
                    "Betsy Ratke",
                    "Noah Bartell DVM",
                    "Theodore Yost"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 42608,
                "image": "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 44574
            },
            {
                "id": "479b3029-d6bd-41c7-8646-552a73e9d632",
                "title": "Bye Bye Love",
                "artists": [
                    "Mrs. Kellie Pollich",
                    "Erica Rempel"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 28592,
                "image": "https://images.pexels.com/photos/816461/pexels-photo-816461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 57113
            },
            {
                "id": "27118910-7cfa-4065-b78b-2291d2e62993",
                "title": "Right Back Where We Started From",
                "artists": [
                    "Mercedes Hermiston DDS",
                    "Jared Douglas",
                    "Kellie Leffler"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 84249,
                "image": "https://images.pexels.com/photos/602794/pexels-photo-602794.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 43099
            },
            {
                "id": "31b299cd-a324-410c-a666-189680e34218",
                "title": "Touch Me",
                "artists": [
                    "Edwin Blick",
                    "Shelly Goldner III",
                    "Angie Adams"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 54444,
                "image": "https://images.pexels.com/photos/15501317/pexels-photo-15501317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 56096
            },
            {
                "id": "9db0398d-6c3e-4c64-87ee-28b5498dd412",
                "title": "Black Or White",
                "artists": [
                    "Felicia Windler"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 24379,
                "image": "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 54550
            },
            {
                "id": "d7eb44ed-dabf-48c7-bc68-77cb7c1b32f2",
                "title": "Dreams",
                "artists": [
                    "Beverly Becker"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 99956,
                "image": "https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 37732
            },
            {
                "id": "1e784b32-6fe2-4dae-8171-06121d77dec4",
                "title": "Bitter Sweet Symphony",
                "artists": [
                    "Claude Schimmel"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 88688,
                "image": "https://images.pexels.com/photos/2763969/pexels-photo-2763969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 44394
            },
            {
                "id": "f634876b-fb3f-481b-bf07-2df8f01da5ef",
                "title": "I Can't Get Started",
                "artists": [
                    "Perry Boehm"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 97284,
                "image": "https://images.pexels.com/photos/5311653/pexels-photo-5311653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 50905
            },
            {
                "id": "76b0890a-881b-4e6b-bb92-214cd2e17ca3",
                "title": "Coming Up",
                "artists": [
                    "Wilfred Schultz"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 69066,
                "image": "https://images.pexels.com/photos/4087996/pexels-photo-4087996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 51856
            },
            {
                "id": "b71f72db-a289-4534-aa1d-e1224cbeac4c",
                "title": "Mony Mony",
                "artists": [
                    "Dora Kohler"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 29653,
                "image": "https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 59782
            },
            {
                "id": "c7e494cc-e929-4e4d-a0f0-542c80fdf26a",
                "title": "Let's Groove",
                "artists": [
                    "Ms. Chester Shanahan MD",
                    "Willard Emmerich",
                    "Mary Lowe"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 72837,
                "image": "https://images.pexels.com/photos/2225213/pexels-photo-2225213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 50221
            },
            {
                "id": "35045569-1612-415f-9114-e294679d2ed4",
                "title": "You're Beautiful",
                "artists": [
                    "Simon Rice"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 13319,
                "image": "https://images.pexels.com/photos/905318/pexels-photo-905318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 43377
            },
            {
                "id": "ffda6db7-667c-45f8-aab6-31946c395dfb",
                "title": "All I Have to Do is Dream",
                "artists": [
                    "Carmen Wunsch",
                    "Laverne MacGyver"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 85056,
                "image": "https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 36269
            },
            {
                "id": "1e8d257e-4ab9-47d4-b473-7409a0fceecd",
                "title": "You've Lost That Lovin' Feelin'",
                "artists": [
                    "Faith Kuhlman"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 41539,
                "image": "https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 25120
            },
            {
                "id": "3cc6a558-3765-4fda-9e14-f386a940ff90",
                "title": "Ballad of the Green Berets",
                "artists": [
                    "Rodolfo Schuppe",
                    "Edwin Wisoky"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 80676,
                "image": "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 40359
            },
            {
                "id": "fc710e35-26f5-4961-8c32-3fa399d0adb1",
                "title": "I Want You Back",
                "artists": [
                    "Bessie Sawayn",
                    "George Funk",
                    "Dianna Monahan"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 62746,
                "image": "https://images.pexels.com/photos/159884/pexels-photo-159884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 40014
            },
            {
                "id": "f04e7788-826a-4048-9a25-0cb0c9e933bb",
                "title": "No One",
                "artists": [
                    "Cornelius Barrows Sr.",
                    "Ms. Kate Schulist",
                    "Henrietta Hoppe PhD"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 96779,
                "image": "https://images.pexels.com/photos/756908/pexels-photo-756908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 43981
            },
            {
                "id": "c42ad9e3-b606-4d9e-bc68-78dcf26650f8",
                "title": "Ballad of the Green Berets",
                "artists": [
                    "Lillian Brakus",
                    "Mr. Monica Gutmann"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 33731,
                "image": "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 58223
            },
            {
                "id": "51d30074-269e-4251-b646-b94520fecbe5",
                "title": "Whole Lotta Love",
                "artists": [
                    "Wendy Walter",
                    "Cristina Bogan",
                    "Ms. Grant Heller"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 86649,
                "image": "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 56472
            },
            {
                "id": "3d9ce984-07c9-47a6-9f34-8a39736f0346",
                "title": "Volare",
                "artists": [
                    "Dallas Blick",
                    "Miss Lindsay Labadie"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 59140,
                "image": "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 25175
            },
            {
                "id": "d2ff1c08-96c6-4f32-a18e-1c71645bc589",
                "title": "Cars",
                "artists": [
                    "Wilbert Romaguera Jr."
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 75766,
                "image": "https://images.pexels.com/photos/2246950/pexels-photo-2246950.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 51705
            },
            {
                "id": "0d852e65-34c6-42ce-b351-4aa413df95ef",
                "title": "Turn! Turn! Turn! (To Everything There is a Season)",
                "artists": [
                    "Ms. Cedric Huels",
                    "Ms. Edwin Pagac"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 64094,
                "image": "https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 39895
            },
            {
                "id": "6819c660-fb88-455d-b969-92072e7f841b",
                "title": "My Prayer",
                "artists": [
                    "Calvin Kilback",
                    "Gordon Bogan",
                    "Lynn O'Conner"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 88635,
                "image": "https://images.pexels.com/photos/4591254/pexels-photo-4591254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 43822
            },
            {
                "id": "b9b4c60e-6cd8-4058-a9dd-a6af027e9b9b",
                "title": "Private Eyes",
                "artists": [
                    "Lynn Hoeger",
                    "Mr. Craig Bernier",
                    "Shelly Buckridge"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 91896,
                "image": "https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 31319
            },
            {
                "id": "7aec5a42-b5cd-48e5-b057-ae3ab4075ea6",
                "title": "Riders On the Storm",
                "artists": [
                    "Bruce Bogan",
                    "Sidney Hessel"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 70493,
                "image": "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 35679
            },
            {
                "id": "8684255f-5926-47a0-b72f-8a480adcc16d",
                "title": "Are You Lonesome Tonight?",
                "artists": [
                    "Joseph Swaniawski PhD"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 80968,
                "image": "https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 29025
            },
            {
                "id": "9b32453c-67f0-467f-9e9a-aeee5939b678",
                "title": "Beautiful Day",
                "artists": [
                    "Jerome O'Hara"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 92767,
                "image": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 58550
            },
            {
                "id": "fc7d480f-4fe2-481b-b3bf-10042450b7ef",
                "title": "Respect",
                "artists": [
                    "Freddie Stracke",
                    "Gwendolyn Pouros"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 96988,
                "image": "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 59924
            },
            {
                "id": "e21dad9e-a265-4ffd-a76c-f82689631c30",
                "title": "Jumpin' Jack Flash",
                "artists": [
                    "Dr. Russell Ullrich"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 67568,
                "image": "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 45096
            },
            {
                "id": "17ce9390-4c22-4115-8be8-0bb21c42db40",
                "title": "Body & Soul",
                "artists": [
                    "Angie McClure",
                    "Duane Hamill",
                    "Cornelius Walter"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 45185,
                "image": "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 44882
            },
            {
                "id": "b8b30b97-cf0a-4b09-9c3e-0bdad441c270",
                "title": "Rock the Casbah",
                "artists": [
                    "Florence Turcotte"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 88378,
                "image": "https://images.pexels.com/photos/3499176/pexels-photo-3499176.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 54202
            },
            {
                "id": "72918364-c36b-463b-a018-7063f98c2fdc",
                "title": "Red Red Wine",
                "artists": [
                    "Josh Ryan",
                    "Kellie Rosenbaum",
                    "Mack Halvorson"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 57974,
                "image": "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 46106
            },
            {
                "id": "14299b4f-699f-460e-b3ff-cc4afb575e7a",
                "title": "You Send Me",
                "artists": [
                    "Miss Wilma Weissnat"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 61092,
                "image": "https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 58739
            },
            {
                "id": "136e18f3-14d4-4910-8705-91e67a3ccf5e",
                "title": "Don't Fence Me In",
                "artists": [
                    "Crystal Bode",
                    "Carmen O'Keefe",
                    "Danielle Lueilwitz"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 17895,
                "image": "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 29787
            },
            {
                "id": "1e7a3dce-d713-487f-81d5-3fb9b3444bf1",
                "title": "Crazy",
                "artists": [
                    "Hattie Miller",
                    "Amanda Hane",
                    "Norman Abernathy"
                ],
                "genre": {
                    "key": "pop",
                    "label": "Pop"
                },
                "likes": 23750,
                "image": "https://images.pexels.com/photos/163684/moscow-city-2017-russia-megalopolis-163684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 32484
            },
            {
                "id": "d94f4045-cd74-4d53-8e1a-461838a4f2bc",
                "title": "In the Year 2525 (Exordium & Terminus)",
                "artists": [
                    "Whitney Stark",
                    "Brett Quigley",
                    "Mr. Phil Sipes"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 83980,
                "image": "https://images.pexels.com/photos/1272541/pexels-photo-1272541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 41220
            },
            {
                "id": "336c68d6-6a95-4fb6-955f-17b13e1249c0",
                "title": "Bohemian Rhapsody",
                "artists": [
                    "Rosemarie Jenkins"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 87169,
                "image": "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 36950
            },
            {
                "id": "be660bbe-5e66-462c-97ae-833b462b9567",
                "title": "The Hustle",
                "artists": [
                    "Cora Bashirian"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 18908,
                "image": "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 26747
            },
            {
                "id": "b9b4c60e-6cd8-4058-a9dd-a6af027e9b9b",
                "title": "Private Eyes",
                "artists": [
                    "Lynn Hoeger",
                    "Mr. Craig Bernier",
                    "Shelly Buckridge"
                ],
                "genre": {
                    "key": "jazz",
                    "label": "Jazz"
                },
                "likes": 91896,
                "image": "https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 31319
            },
            {
                "id": "8822ef73-dc1f-44fb-ade1-0ac839701c26",
                "title": "I Got You Babe",
                "artists": [
                    "Jacquelyn Cassin",
                    "Darren Walsh",
                    "Shirley Maggio"
                ],
                "genre": {
                    "key": "rock",
                    "label": "Rock"
                },
                "likes": 75616,
                "image": "https://images.pexels.com/photos/1293551/pexels-photo-1293551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 41672
            },
            {
                "id": "4bc7b690-5ba6-47c5-91ee-d1425e429b08",
                "title": "You Really Got Me",
                "artists": [
                    "Linda Kovacek",
                    "Freddie Ebert DDS"
                ],
                "genre": {
                    "key": "blues",
                    "label": "Blues"
                },
                "likes": 68122,
                "image": "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "durationInMs": 28187
            }
        ]
    });
    return(
        <dataProvider.Provider value={{TopAlbum,setTopAlbum,newAlbum,setNewAlbum,Songs,setSongsData,FAQdata,setFAQdata,optionData,SingerInfo,genre,setGener,modalOpen,setModalOpen,currentSong,setCurrentSong,playing,setPlaying}}>
            {children}
        </dataProvider.Provider>
    )
}
export {dataProvider,ContextProvider};