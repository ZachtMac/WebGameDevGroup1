// const fetch = require('node-fetch');

// async function fetchPlantsData() {
//     const token = '6J-g_cRx2ygJKtpCHx3KUrMWVGHBEzSGXCfWCcAOkkI'; // Replace with your Trefle API token
//     const apiUrl = `https://trefle.io/api/v1/plants?token=${token}`;

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         console.error('Error fetching plant information:', error);
//         return null;
//     }
// }

// // Usage example:
// (async () => {
//     const plantsData = await fetchPlantsData();
//     if (plantsData) {
//         console.log(plantsData);
//     } else {
//         console.log('Failed to fetch plant information.');
//     }
// })();
