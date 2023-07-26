//Initialise Readline
var readline = require("readline");

//Create Dummy patient data within objects
//Imported from Faker - data filled
var patientData = [
    {
        id: '000',
        name: 'Josephine Swift',
        gender: 'Cisgender',
        email: 'Dee.Tremblay-Hagenes@hotmail.com',
        dob: '2003-09-07',
        phone: '81-375815-522551-9',
        job: 'Legacy Marketing Associate',
        history: 'Epilepsy'
      },
      {
        id: '001',
        name: 'Catherine Farrell',
        gender: 'Woman',
        email: 'Sean_Fisher@hotmail.com',
        dob: '1994-12-18',
        phone: '37-827952-914148-7',
        job: 'Chief Applications Supervisor',
        history: 'Diabetes'
      },
      {
        id: '002',
        name: 'Audrey Moore',
        gender: 'Androgyne',
        email: 'Wilfred87@gmail.com',
        dob: '1983-10-13',
        phone: '42-702874-803647-8',
        job: 'Internal Web Associate',
        history: 'Fractured Patella - 2014'
      },
      {
        id: '003',
        name: 'Adam Botsford',
        gender: 'Cis female',
        email: 'Giles79@yahoo.com',
        dob: '1966-06-07',
        phone: '79-385545-340383-2',
        job: 'Legacy Quality Architect',
        history: 'Depression & Anxiety'
      },
      {
        id: '004',
        name: 'Shari Hyatt',
        gender: 'Polygender',
        email: 'Peter50@gmail.com',
        dob: '1964-05-16',
        phone: '56-331883-997239-0',
        job: 'Direct Data Facilitator',
        history: 'Benign tumor removed from shoulder'
      },
      {
        id: '005',
        name: 'Bernice Kuvalis',
        gender: 'Cisgender',
        email: 'Katlynn.Pfeffer53@yahoo.com',
        dob: '1973-10-19',
        phone: '63-479052-632767-1',
        job: 'Forward Accounts Representative',
        history: 'Dislocated Hip'
      },
      {
        id: '006',
        name: 'Grace Kertzmann',
        gender: 'Demi-girl',
        email: 'Kellie.Lockman@yahoo.com',
        dob: '1994-06-07',
        phone: '30-758606-767870-4',
        job: 'Customer Marketing Supervisor',
        history: 'Wrist crushed by vehicle'
      },
      {
        id: '007',
        name: 'Lance Predovic',
        gender: 'Non-binary',
        email: 'Reymundo_Weimann@gmail.com',
        dob: '1985-05-10',
        phone: '94-986569-407067-3',
        job: 'Principal Functionality Administrator',
        history: 'Broken Scaphoid'
      },
      {
        id: '008',
        name: 'Jaime Kertzmann',
        gender: 'Trans person',
        email: 'Ashley.Gibson@gmail.com',
        dob: '1948-05-28',
        phone: '73-033535-361942-9',
        job: 'District Paradigm Specialist',
        history: 'Arterial Stent in right leg'
      },
      {
        id: '009',
        name: "Aaron O'Keefe",
        gender: 'Female to male trans man',
        email: 'Marilou_Goyette65@gmail.com',
        dob: '1945-11-11',
        phone: '66-947749-588513-1',
        job: 'Central Metrics Strategist',
        history: 'Fractured verterbrae in 1960'
      }
];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Create a function that shows users the menu options
function displayMainMenu() {
    console.log("Patient Management System");
    console.log("1. Search for a patient");
    console.log("2. Add a new patient");
    console.log("3. Update patient record");
}

//Create a function that prompts then allows user to search for a patient
function searchPatient() {
    rl.question('Please enter patient name or ID: ', function(query) {
        //Pass user input as an argument to a callback function
        //Use .filter method to locate patient(s) that match search criteria
        let foundPatient = patientData.filter(function(patient) {
            return patient.name === query || patient.id === query;
        });

        if (foundPatient.length === 0) {
            console.log("No patient found under that name or ID.");
        } else {
            console.log('Patient found:');
            foundPatient.forEach(function(patient) {
                console.log("ID:", patient.id);
                console.log("Name:", patient.name);
                console.log("Gender:", patient.gender);
                console.log("Email:", patient.email);
                console.log("D.O.B:", patient.dob);
                console.log("Contact Number:", patient.phone);
                console.log("Occupation:", patient.job);
                console.log("Medical History:", patient.history);
            });
        }

        displayMainMenu();
        menuSelect();
    });
}

function addPatient() {
    rl.question('Enter patient ID: ', function(id) {
        rl.question('Enter patient name: ', function(name) {
            rl.question('Enter patient gender: ', function(gender) {
                rl.question('Enter patient eMail: ', function(email) {
                    rl.question('Enter patient Date of Birth: ', function(dob) {
                        rl.question('Enter patient Contact Number: ', function(phone) {
                            rl.question('Enter patient occupation: ', function(job) {
                                rl.question('Enter medical history: ', function(history) {

                                
                                    patientData.push({
                                        id: id,
                                        name: name,
                                        gender: gender,
                                        email: email,
                                        dob: dob,
                                        phone: phone,
                                        job: job,
                                        history: history
                                    });

                                    console.log("Patient added successfully.");
                                    displayMainMenu();
                                    menuSelect();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function updatePatientInfo() {
    rl.question('Enter Patient ID: ', function(id) {
        let foundPatient = patientData.find(function(patient) {
            return patient.id === id;
        });

        if (!foundPatient) {
            console.log("No patient found with that ID.");
        } else {
            rl.question('Update name: ', function(name) {
                rl.question('Update gender: ', function(gender) {
                    rl.question('Enter new eMail: ', function(email) {
                        rl.question('Enter new Contact Number: ', function(phone) {
                            rl.question('Enter updated Occupation: ', function(job) {
                                rl.question('Update Medical History: ', function(history) {

                                
                                foundPatient.name = name;
                                foundPatient.gender = gender;
                                foundPatient.email = email;
                                foundPatient.phone = phone;
                                foundPatient.job = job;
                                foundPatient.history = history;

                                console.log("Patient record successfully updated.");
                                displayMainMenu();
                                menuSelect();
                                });
                            });
                        });
                    });
                });
            });
        }
    });
}

function menuSelect() {
    rl.question('Please enter your choice (1-3): ', function(choice) {
        switch (choice) {
            case '1':
                searchPatient();
                break;

                case '2':
                    addPatient();
                    break;

                    case '3':
                        updatePatientInfo();
                        break;

                        case '4':
                            rl.close();
                            break;
                            default:
                                console.log('That is an invalid choice. Please try again (1-3).');
                                displayMainMenu();
                                menuSelect();
                                break;
        }
    });
}

displayMainMenu();
menuSelect();