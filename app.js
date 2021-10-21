const profileDataArgs = process.argv.slice(2, process.argv.length);

function printProfileData(profileDataArr) {
    profileDataArr.forEach(function (profileItem) {
        console.log(profileItem);
    });
}

printProfileData(profileDataArgs);