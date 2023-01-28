//  1>. for the given json iterate over all for loop (for,for in,for of,for each)


var json = [{
  "id" : "raja1", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : "zen portal task",
  "mail": "rajakumar1998mech@gmail.com"
},
{
  "id" : "raja2", 
  "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
  "task" : "zen portal task",
  "mail": "rajakumar1998mech@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);

}
//for In
for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(json[key].id);
    //console.log(json[key].msg);
   
  }
  }
//for Of
  let text = "";
  for (let x of json[key].id) {
   text += x; 
  }
   console.log(text);
//for Each
  json.forEach(function(obj) { console.log(obj.msg); });


// 2>. create your own resume data in json format


let myResume={
    "Basics": {
      "name": "RAJAKUMAR M",
      "email": "rajakumar1998mech@gamil.com",
      "phone": 9786945735,
      "degree": "B.E",
      "location": {
        "address": "2/121 Malayainoor Ramahondhalli pennagaram",
        "postalCode": 636810,
        "city": "Dharmapuri",
        "state": "Tamilnadu",
        "country": "India"
      },
      "Profiles": [
        {
          "github":"https://github.com/Rajakumar98"
        }
      ]
    },
    "Work": [
      {
        "company": "Karthick Granites",
        "position": "Granite Maintenance",
        "startDate": "01-04-2021",
        "endDate": "Still Working",
        "summary": "i am the Granite Maintenance handling",
      },
    ],
     "Education": [
      {
        "institution": "The Kavery Engineering College",
        "department": "mechanical Engineering",
        "studyType": "fulltime",
        "Batch start year": 2015,
        "Batch end year": 2019,
        "GPA": 6.45,
      }
    ],
    "Skills": [
      {
        "project name": "Design & fabration hybird vechile for two wheeler",
        "level": "beginer",
        "project Description": [
          "project is TVS-50 Modification The Vechile Peripherals Changed into electrical parts like a DC-motor Battary,dynamo,controller & them Really good worked Well is used for fuel less time convert to electrical mode,in usefull.",
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      },
    ],
    "interests": [
      {
        "name": "Reading Story Books,Traveler,Forming",
      },
    ],
  }
console.log(myResume);
