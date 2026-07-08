function combineUsers(...arrays) {
    //Create empty array
    const mergedUsers = [];
    
    //Loop through each array passed in 
    for (let i = 0; i < arrays.length; i++) {
        //Loop through each element in the current array
        for (let j = 0; j < arrays[i].length; j++) {
            //Add each username to mergeUsers
            mergedUsers.push (arrays[i][j]);
        }
    }
    //Get today's date
    const today = new Date();
    const mergeDate = today.toDateString();

    //Return object with merged users and today's data
    return {
        users: mergedUsers,
        merge_date: mergeDate
    };
}
//Export the function for testing
module.exports = {combineUsers};
