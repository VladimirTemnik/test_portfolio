export default {
    name:[
        {required:true, message : "Please enter the name", trigger: "blur" },
        {min: 3, max: 15, message: "Length should be 3 to 15", trigger: "blur"}
    ],
        lastName:[
        {required:true, message: "Please enter the last name", trigger: "blur"},
        {min: 3, max: 15, message: "Length should be 3 to 15", trigger: "blur"},
    ],
        email:[
        {required:true, message: "Please enter the email", trigger:"blur"},
        {min: 10, max: 35, message: "Length should be 3 to 15", trigger: "blur"},
        //???
    ],
        password:[
        {required:true, message: "Please enter the email", trigger:"blur"},
        {min: 8, max: 16, message: "Length should be 8 to 16", trigger: "blur"}
    ],
        passwordConfirmation: [
        {required:true, message: "Please enter the email", trigger:"blur"},
        {min: 8, max: 16, message: "Length should be 8 to 16", trigger: "blur"},
        {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'],},
    ]}