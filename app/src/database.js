import data from '../src/data.json';

export class Database {
    constructor() {
        this.data = data;
        this.currentProfile = null;
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
        return [{name: "Challenge1", status: 0, uid: "dwdwfw32r", type: "1", amount: 100}, {name: "Challenge2", status: 1, uid: "dwdwfw33r", type: "1"}, {name: "Challenge3", status: 2, uid: "dwdwfw34r", type: "1"}];
    }
}