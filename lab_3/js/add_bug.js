import {bugsData} from './bugsData.js';

// document.addEventListener("DOMContentLoaded", function () {
//     const createBugForm = document.getElementById("add_form");
//
//     createBugForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//
//         const title = document.getElementById("title_input").value;
//         const description = document.getElementById("description_input").value;
//         const complexity = document.getElementById("complexity_input").value = 1;
//
//         if (typeof title === 'string' && typeof description === 'string') {
//             const newBug = {
//                 id: generateUniqueId(),
//                 title: title,
//                 description: description,
//                 complexity: complexity,
//             };
//
//             bugsData.push(newBug);
//             saveBugsData(bugsData);
//             window.location.href = 'bugs_manager_page.html'
//             console.log(bugsData)
//         }
//     });
//
//     function generateUniqueId() {
//         return Math.floor(Math.random() * Date.now());
//     }
//
//     function saveBugsData(data) {
//         localStorage.setItem('bugsData', JSON.stringify(data));
//     }
// });
