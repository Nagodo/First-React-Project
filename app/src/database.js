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

    HasDailyChallenge = () => {
        return true;
    }

}