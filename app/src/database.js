import data from './data.json';

export class Database {
    constructor() {
        this.data = this.LoadJson();
    }

    LoadJson() {
        return []
    }


    GetExercises = () => {
        return [{name: "Ex1"}, {name: "Ex2"}];
    }

    GetCurrentUserChallenges = () => {
        let challenges = [];
    
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