import data from './data.json';
const fileSystem = require("browserify-fs")

export class Database {
    constructor() {
        this.data = this.LoadJson();
        this.currentProfile = "magnus";
    }

    LoadJson() {
        fileSystem.readFile("./data.json", (err, data) => {
            if(err) {
            console.log("File reading failed", err)
            return
            }
            console.log("File data:", data)
            return data
        })
    }

    GetCurrentUserProfilePic = () => {
        if (this.currentProfile == null) {
            return null;
        }
    }

    GetExercises = () => {
        return [{name: "Ex1"}, {name: "Ex2"}];
    }

    GetCurrentUserChallenges = () => {
        let user_id = this.GetUserIdByUserName(this.currentProfile);
        let challenges = [];
        for (const [, value] of Object.entries(this.data.data)) {
            if (value.user_id === user_id) {
                challenges = value.challenges;
            }
        }

        return challenges;
    }

    GetUserIdByUserName = (username) => {
        console.log("1");
        for (const [, value] of Object.entries(this.data["users"])) {
            console.log("2");
            if (value.username === username) {
                return value.user_id;
            }
        }
    }
}