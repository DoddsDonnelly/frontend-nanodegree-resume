//#region Bio
var bio = {
    "name": "Crystal Dodds-Donnelly",
    "role": "Developer",
    "contacts": {
        "email": "anEmail@msn.com",
        "mobile": "222-222-2222",
        "github": "doddsdonnelly",
        "twitter": "@doddsdonnelly",
        "location": "Sacramento, CA"
    },
    "bioPic": "/images/profile-placeholder.png",
    "welcomeMessage": "Hello and welcome to my test on-line resume",
    "skills": ["Awesomeness", "HTML", "CSS", "JavaScript", "Front-End Web Development"]
};
bio.display = function () {
    var formatedName = HTMLheaderName.replace("%data%", bio.name);
    var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formatedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
    var formatedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
    var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
    var formatedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
    var formatedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
    var formatedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formatedRole).prepend(formatedName);
    $("#header").append(formatedPicture).append(formatedMessage);

    $("#topContacts, #footerContacts").append(formatedMobile).append(formatedEmail).append(formatedTwitter).append(formatedGithub).append(formatedGithub).append(formatedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    };
};
bio.display();
//#endregion

//#region Jobs
var work = {
    "jobs": [
        {
            "employer": "Some Job",
            "title": "A Designer",
            "dates": "January 12, 2010 - Current",
            "location": "South Lake Tahoe, CA",
            "description": "I designed stuff on location, and sometimes worked in the office."
        }, {
            "employer": "A Place",
            "title": "A Coder",
            "dates ": "2009",
            "location": "New York, NY",
            "description": "I sometimes wrote code, other times I Googled."
        }
    ]
};
work.display = function () {
    if (work.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (job in work.jobs) {
            var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formatedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formatedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formatedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formatedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last")
                .append(formatedEmployer)
                .append(formatedworkTitle)
                .append(formatedworkDates)
                .append(formatedworkLocation)
                .append(formatedworkDescription);
        }
    };
};
work.display();
//#endregion

//#region Education
var education = {
    "schools": [
        {
            "school": "ABC U",
            "degree": "Masters",
            "location": "San Francisco, CA",
            "dates": "2013",
            "majors": ["Photo", "English"]
        }, {
            "school": "CBF USC",
            "degree": "Associates",
            "location": "Las Vegas, NV",
            "dates": "2010",
            "majors": ["Computer", "Business"]
        }
    ]
};
education.display = function () {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (ed in education.schools) {
            var formatedName = HTMLschoolName.replace("%data%", education.schools[ed].school);
            var formatedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].location);
            var formatedDates = HTMLschoolDates.replace("%data%", education.schools[ed].degree);
            var formatedLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].dates);
            var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);

            $(".education-entry:last")
                .append(formatedName)
                .append(formatedDegree)
                .append(formatedDates)
                .append(formatedLocation)
                .append(formatedMajor);
        }
    };
};
education.display();
//#endregion

//#region projects
var projects = {
    "projects": [
        {
            "title": "Test Portfolio",
            "description": ["Your looking at it.  My test Javascript portfolio."],
            "dates": "July, 2016",
            "images": ["images/placeholder1.jpg"]
        },
        {
            "title": "Test Project",
            "description": ["Description coming soon.  Maybe..."],
            "dates": "June, 2016",
            "images": ["images/placeholder1.jpg"]
        }
    ]
};
projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();
//#endregion

//#region Misc

//$(document).click(function (loc) {
//    var x = loc.pageX;
//    var y = loc.pageY;
//    // your code goes here
//    logClicks(x, y);
//});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
//#endregion