/*
This is empty on purpose! Your code to build the resume will go here.
*/
//$("#main").append("David Rojas.");
var awesomeThoughts;
awesomeThoughts = "I am David and I am awesome!";
funThoughts = awesomeThoughts.replace("awesome", "fun");
// replace is standard built-in, but append is jquerry
//$("#main").append(" "+funThoughts);

var name="David Rojas" , role="Web Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

// var email = "davdrojas@gmail.com";
// var formattedEmail = HTMLemail.replace('%data%', email);
// $( "#main" ).append( formattedEmail );
// var skills=["awesomeness", "javascript", "python", "testing", "automation", "linux"];

var bio={
  "name":name,
  "role":role,
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
var work = {};
work.company = "School Improvement Network";
work.position = "SoftwareDET";
work.yearsThere = 3;

var education = {};
education["schoolName"] = "Salt Lake Community";
education["yearsThere"] = 3;
education["favoriteClasses"] =
["math", "microeconomics", "discrete structures"];

$("#main").append(bio.name+", "+bio.role+", "+work["company"]+
", "+education.schoolName);
//cant do just prepend(bio) cause the browser wont render it...
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
}

var work = {
	'jobs' : [
		'qa' : {
			'employer' : '',
			'title' : '',
			'location' : '',
			'startdate' : '',
			'enddate' : '',
			'description' : ''
		},
		'steelcutter' : {
			'employer' : '',
			'title' : '',
			'location' : '',
			'startdate' : '',
			'enddate' : '',
			'description' : ''
		},
		'titleguy' : {
			'employer' : '',
			'title' : '',
			'location' : '',
			'startdate' : '',
			'enddate' : '',
			'description' : ''
		}
	]
}

var education = {
	'schools' : {
		{
		'schoolName' : 'U of U',
		'location' : '',
		'degree' : '',
		'majors' : [],
		'startdate' : '',
		'enddate' : '',
		'website' : ''
		},
		{
		'schoolName' : 'SLCC',
		'location' : '',
		'degree' : '',
		'majors' : [],
		'startdate' : '',
		'enddate' : '',
		'website' : ''
		}
	},
	'onlineCourses' : [
		{
		'courseTitle' : 'Javascript Basics',
		'schoolName' : '',
		'startdate' : '',
		'enddate' : '',
		'website' : ''
		},
		{
		'courseTitle' : 'Advanced Javascript',
		'schoolName' : '',
		'startdate' : '',
		'enddate' : '',
		'website' : ''
		}
	]
}

var projects = {
	{
		'title' : '',
		'startdate' : '',
		'enddate' : '',
		'description' : '',
		'images' : [
			'../images/img1.jpg',
			'../images/img2.jpg',
			'../images/img3.jpg',
		]
	}
}
