
var name="David Rojas" , role="Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skillsStart = HTMLskillsStart;
//var skills1 = HTMLskills.replace("%data%", bio.skills[0]);


$("#header").prepend(formattedName);
$("#header").append(formattedRole);

// if ( bio.skills !== null ) {
// 	$("#header").append(skillsStart);
// 	console.log(' It looks like there is something there ');
// }


var bio={
  "name":name,
  "role":role,
  "welcomeMessage":"Welcome to my resume",
  "contactinfo": {
	  "email":"davdrojas@gmail.com",
	  "phone":"801.512.1784"
  },
  "picture":"images/me.jpg",
  "message":"Welcome to my page",
  "skills":[
	  "awesomeness",
	  "javascript",
	  "python",
	  "testing",
	  "automation",
	  "linux"
  ]
};

var work = {
	"jobs" : [
		{
			"employerName" : "SINET",
			"title" : "SDET",
			"location" : "Midvale",
			"startdate" : "010113",
			"enddate" : "Current",
			"description" : "Computer Awesomeness"
		},
		{
			"employerName" : "Jumping Jack",
			"title" : "Steel Cutter",
			"location" : "SLC",
			"startdate" : "010112",
			"enddate" : "010113",
			"description" : "Metal Awesomeness"
		},
		{
			"employerName" : "Surety",
			"title" : "Examiner",
			"location" : "Centerville",
			"startdate" : "101005",
			"enddate" : "010112",
			"description" : "Paper Awesomeness"
		}
	]
};

var education = {
	"schools" : [
		{
		"schoolName" : "U of U",
		"location" : "U of U",
		"degree" : "Business",
		"majors" : ["Business"],
		"startdate" : "",
		"enddate" : "",
		"website" : ""
		},
		{
		"schoolName" : "SLCC",
		"location" : "Redwood",
		"degree" : "Computers",
		"majors" : ["Computers"],
		"startdate" : "",
		"enddate" : "",
		"website" : ""
		}
	],
	"onlineCourses" : [
		{
		"courseTitle" : "Javascript Basics",
		"schoolName" : "Udacity",
		"startdate" : "",
		"enddate" : "",
		"website" : ""
		},
		{
		"courseTitle" : "Advanced Javascript",
		"schoolName" : "Udacity",
		"startdate" : "",
		"enddate" : "",
		"website" : ""
		}
	]
};

var projects = [
	{
		"title" : "Project One",
		"startdate" : "",
		"enddate" : "",
		"description" : "Undefined",
		"images" : [
			"../images/img1.jpg",
			"../images/img2.jpg",
			"../images/img3.jpg"
		]
	},
	{
		"title" : "Project Two",
		"startdate" : "",
		"enddate" : "",
		"description" : "null",
		"images" : [
			"../images/img4.jpg",
			"../images/img5.jpg",
			"../images/img6.jpg"
		]
	}
];


$("#main").append(bio.name+", "+bio.role+", "+work.jobs[0].employerName+
", "+education.schools[0].schoolName);

// if ( bio.skills !== null ) {
//     console.log(' It looks like there is something there ');
// }
//cant do just prepend(bio) cause the browser wont render it...
