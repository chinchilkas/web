// import {getAllBugs} from "./api";
//
import {getAllBugs} from "./bugs_manager";

export var bugsData = []


getAllBugs().then((bugsData) => {
      return bugsData;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });


// const BASE_URL = 'http://localhost:8080';
// const RESOURCE_URL = `${BASE_URL}/api/bugs`;
//
// const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
//     try {
//         const reqArg = {
//             method,
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             }
//         }
//         if (body) {
//             reqArg.body = JSON.stringify(body);
//         }
//
//         const response = await fetch(`${RESOURCE_URL}${urlPath}`, reqArg);
//
//         if (!response.ok) {
//             // Handle non-successful response (e.g., status code other than 200)
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//
//         if (method === "DELETE") {
//             console.log("Deleted");
//             return;
//         }
//         return await response.json();
//     } catch (error) {
//         // Handle errors here
//         alert("Error: " + error);
//         throw error;
//     }
// }
//
// export const postBug = async ({
//                                   title,
//                                   description,
//                                   complexity
//                               }) => {
//     const body1 = {
//         title,
//         description,
//         complexity
//     }
//
//     return baseRequest({method: "POST", body: body1});
// }
//
// export const getAllBugs = async () => {
//     return baseRequest({method: "GET"});
// }
//
// export const getBugById = async (id = -1) => {
//     return baseRequest({urlPath: `/${id}`, method: "GET"})
// }
//
// export const putBugById = async (id, {
//
//     title,
//     description,
//     complexity
// }) => {
//     const body1 = {
//         title,
//         description,
//         complexity
//     }
//     return baseRequest({urlPath: `/${id}`, method: "PUT", body: body1})
// }
// export const deleteBugById = async (id) => {
//     return baseRequest(
//         {urlPath: `/${id}`, method: "DELETE", body: null})
// }


//-----------------------------------------------------------------------------------------------------------------------------------


// import {bugsData} from "./js/bugsData";
// import {getAllBugs} from "./api";
//
//
// document.addEventListener("DOMContentLoaded", function () {
//     // const savedBugsData = JSON.parse(localStorage.getItem('bugsData')) || [];
//     const savedBugsData = getAllBugs().then((bugsData) => {
//         return bugsData;
//     })
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//             throw error;
//         });
//     console.log(savedBugsData)
//
//     const itemsContainer = document.getElementById("itemsContainer");
//     const find_input = document.getElementById("find_input");
//     const searchButton = document.getElementById("searchButton");
//     const cleanButton = document.getElementById("cleanButton");
//     const expensiveSwitch = document.getElementById("expensiveSwitch");
//     const countButton = document.getElementById("countButton");
//     const totalComplexity = document.getElementById("totalComplexity");
//
//     function populateBugs(data) {
//         itemsContainer.innerHTML = "";
//
//         data.forEach((bug) => {
//             const card = document.createElement("div");
//             card.className = "col";
//
//             card.innerHTML = `
//             <div class="card" data-bug-id="${bug.id}">
//                 <div class="card-body">
//                     <h5 class="card-title">${bug.title}</h5>
//                     <p class="card-text">
//                         ID: ${bug.id}<br>
//                         Description: ${bug.description}<br>
//                         Complexity: ${bug.complexity}
//                     </p>
//                     <button class="btn btn-success edit-button">Edit</button>
//                     <button class="btn btn-danger delete-button">Delete</button>
//                 </div>
//             </div>
//         `;
//
//             const editButton = card.querySelector(".edit-button");
//             editButton.addEventListener("click", () => {
//                 window.location.href = `edit.html?id=${bug.id}`;
//             });
//
//             const deleteButton = card.querySelector(".delete-button");
//             deleteButton.addEventListener("click", () => {
//                 const bugId = bug.id;
//                 deleteBugById(bugId);
//             });
//
//             function deleteBugById(bugId) {
//                 const bugIndex = data.findIndex((bug) => bug.id === bugId);
//
//                 if (bugIndex !== -1) {
//                     data.splice(bugIndex, 1);
//
//                     const cardToRemove = document.querySelector(`[data-bug-id="${bugId}"]`);
//                     if (cardToRemove) {
//                         cardToRemove.remove();
//                     }
//                 }
//
//                 localStorage.setItem('bugsData', JSON.stringify(data));
//             }
//
//             itemsContainer.appendChild(card);
//         });
//
//     }


//     populateBugs(savedBugsData);
//
//     searchButton.addEventListener("click", () => {
//         const searchTerm = find_input.value.toLowerCase();
//         const filteredBugs = savedBugsData.filter((bug) =>
//             bug.title.toLowerCase().includes(searchTerm)
//         );
//         populateBugs(filteredBugs);
//     });
//
//     cleanButton.addEventListener("click", () => {
//         find_input.value = "";
//         populateBugs(savedBugsData);
//     });
//
//     expensiveSwitch.addEventListener("change", () => {
//         const dataToSort = [...savedBugsData];
//         if (expensiveSwitch.checked) {
//             dataToSort.sort((a, b) => b.complexity - a.complexity);
//         } else {
//             dataToSort.sort((a, b) => a.complexity - b.complexity);
//         }
//         populateBugs(dataToSort);
//     });
//
//     countButton.addEventListener("click", () => {
//         totalComplexity.textContent = savedBugsData.reduce((total, bug) => total + bug.complexity, 0);
//     });
// });
//
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
//
// const BASE_URL = 'http://localhost:8080';
// const RESOURCE_URL = `${BASE_URL}/api/bugs`;
//
// const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
//     try {
//         const reqArg = {
//             method,
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             }
//         }
//         if (body) {
//             reqArg.body = JSON.stringify(body);
//         }
//
//         const response = await fetch(`${RESOURCE_URL}${urlPath}`, reqArg);
//
//         if (!response.ok) {
//             // Handle non-successful response (e.g., status code other than 200)
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//
//         if (method === "DELETE") {
//             console.log("Deleted");
//             return;
//         }
//         return await response.json();
//     } catch (error) {
//         // Handle errors here
//         alert("Error: " + error);
//         throw error;
//     }
// }
//
// export const postBug = async ({
//                                   title,
//                                   description,
//                                   complexity
//                               }) => {
//     const body1 = {
//         title,
//         description,
//         complexity
//     }
//
//     return baseRequest({method: "POST", body: body1});
// }
//
// export const getAllBugs = async () => {
//     return baseRequest({method: "GET"});
// }
//
// export const getBugById = async (id = -1) => {
//     return baseRequest({urlPath: `/${id}`, method: "GET"})
// }
//
// export const putBugById = async (id, {
//
//     title,
//     description,
//     complexity
// }) => {
//     const body1 = {
//         title,
//         description,
//         complexity
//     }
//     return baseRequest({urlPath: `/${id}`, method: "PUT", body: body1})
// }
// export const deleteBugById = async (id) => {
//     return baseRequest(
//         {urlPath: `/${id}`, method: "DELETE", body: null})
// }
