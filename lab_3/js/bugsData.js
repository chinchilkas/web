// import {getAllBugs} from "../api";
//
import {getAllBugs} from "../bugs_manager";

export var bugsData = [
    getAllBugs().then((bugsData) => {
        return bugsData;
    })
        .catch((error) => {
            console.error('Error fetching data:', error);
            throw error;
        })
]



