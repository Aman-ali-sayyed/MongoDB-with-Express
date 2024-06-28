const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
        {
            from: "alice",
            to: "bob",
            msg: "send me your exam sheets",
            created_at: new Date()
        },
        {
            from: "bob",
            to: "alice",
            msg: "I will send them by evening.",
            created_at: new Date()
        },
        {
            from: "charlie",
            to: "dave",
            msg: "Can you help me with the assignment?",
            created_at: new Date()
        },
        {
            from: "dave",
            to: "charlie",
            msg: "Sure, I will help you.",
            created_at: new Date()
        },
        {
            from: "eve",
            to: "frank",
            msg: "Did you complete the project?",
            created_at: new Date()
        },
        {
            from: "frank",
            to: "eve",
            msg: "Yes, I finished it yesterday.",
            created_at: new Date()
        },
        {
            from: "grace",
            to: "heidi",
            msg: "Let's meet tomorrow to discuss the presentation.",
            created_at: new Date()
        },
        {
            from: "heidi",
            to: "grace",
            msg: "Sounds good, see you then.",
            created_at: new Date()
        },
        {
            from: "ivan",
            to: "judy",
            msg: "Can you review my report?",
            created_at: new Date()
        },
        {
            from: "judy",
            to: "ivan",
            msg: "I will look at it today.",
            created_at: new Date()
        },
    
];

Chat.insertMany(allChats);