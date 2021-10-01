const messages = [
    {
        "id": 1,
        "name": "Jeshua Stout",
        "age": 18,
        "time": "6:38 PM",
        "date": "Monday, October 22nd",
        "text": "Which country to visit next? This is a photo with my friends - celebrating in Bali\uD83D\uDE0E",
        "photo": "https://ontabs.com/uploads/images/1124/the-amazing-spider-man-256.webp"
    },
    {
        "id": 2,
        "name": "Marcus Scott",
        "time": "1:22 PM",
        "date": "Today",
        "text": "Wow!!!!",
        "photo": "https://cs13.pikabu.ru/avatars/2913/x2913029-1321135724.png"
    },
    {
        "id": 3,
        "name": "Cherry cat",
        "time": "8:13 PM",
        "date": "Monday, October 22nd",
        "text": "Which country to visit next?",
        "photo": "https://img.icons8.com/emoji/256/man-facepalming.png"
    }

]

const users = [
    {
        "id": 1,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "email": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://pressa.tv/uploads/posts/2016-01/1452843631_ya1.jpeg",
        "flag": false
    },
    {
        "id": 2,
        "name": "Carmen Velasco",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://trinixy.ru/pics5/20170524/beautiful_girls_01.jpg",
        "flag": false
    },
    {
        "id": 3,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://tipik.ru/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-16-%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE-%D0%BF%D0%B0%D1%80%D0%BD%D1%8F-%D0%B2%D0%BA-021.jpg",
        "flag": false
    },
    {
        "id": 4,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://articles.checkperson.ru/storage/document_articles/2019/08-06/VluFk6LC/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C%20%D0%BF%D0%B0%D1%80%D0%BD%D1%8F%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD.jpg",
        "flag": false
    },
    {
        "id": 5,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "http://www.lipetskmedia.ru/images/news_/112/398_big2.jpg",
        "flag": false
    },
    {
        "id": 6,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://cdn.fishki.net/upload/post/2020/07/24/3377606/1551595409-2.jpg",
        "flag": false
    },
    {
        "id": 7,
        "name": "Orlando Diggs",
        "profession": "Programmer",
        "social": {
            "facebook": "https://fb.com",
            "twitter": "https://twitter.com",
            "instagram": "https://instagram.com",
            "linkedin": "https://linkedin.com"
        },
        "username": "ork_dig",
        "e-mail": "diggs@rambler.com",
        "skype": "",
        "timezone": "Your time",
        "photo": "https://pressa.tv/uploads/posts/2016-01/1452843631_ya1.jpeg",
        "flag": false
    },
]

const friends = [
    {
        "id": 1,
        "name": "Orlando Diggs",
        "photo": "https://pressa.tv/uploads/posts/2016-01/1452843631_ya1.jpeg",
        "online": true,
    },
    {
        "id": 2,
        "name": "Carmen Velasco",
        "photo": "https://trinixy.ru/pics5/20170524/beautiful_girls_01.jpg",
        "online": true,
    },
    {
        "id": 3,
        "name": "Marie Jensen",
        "photo": "https://tipik.ru/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-16-%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B3%D0%BE-%D0%BF%D0%B0%D1%80%D0%BD%D1%8F-%D0%B2%D0%BA-021.jpg",
        "online": false,
    },
    {
        "id": 4,
        "name": "Alex Lee",
        "photo": "https://articles.checkperson.ru/storage/document_articles/2019/08-06/VluFk6LC/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C%20%D0%BF%D0%B0%D1%80%D0%BD%D1%8F%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD.jpg",
        "online": false,
    },
    {
        "id": 5,
        "name": "Leo Gill",
        "photo": "http://www.lipetskmedia.ru/images/news_/112/398_big2.jpg",
        "online": false,
    },
    {
        "id": 6,
        "name": "Britney Cooper",
        "photo": "https://cdn.fishki.net/upload/post/2020/07/24/3377606/1551595409-2.jpg",
        "online": false,
    },


]

export {messages, users, friends}
