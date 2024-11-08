import React from "react";
import axios from "axios";


const baseUrl = axios.create({
        baseURL: 'https://dev-backend-2024.epravaha.com/'
    });
    




    export default baseUrl;


// function  BaseUrl () {

//     async function baseUrlApi  () {
//         const payload = {
//             "mobileno": "9999299398",
//             "password": "Onion@2024",
//             "companypath": "supplyvalid"
//         }
    
        
//         const response = await axios.post('https://dev-backend-2024.epravaha.com/api/login/svadmin', payload, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log('Success:', response.data);
    
//     }
//     baseUrlApi();

//     // useEffect (() => {
//     //     baseUrlApi();
//     // }, []);

//     return(
//         <>
//         </>
//     )
// }

