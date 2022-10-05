import data from '../src/data.json';

export class Database {
    constructor() {
        this.data = JSON.parse(data);
        this.currentProfile = "magnus";
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
        for (const [, value] of Object.entries(this.data.users)) {
            if (value.username === username) {
                return value.user_id;
            }
        }
    }
}