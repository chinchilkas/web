document.addEventListener("DOMContentLoaded", function () {
    const savedBugsData = JSON.parse(localStorage.getItem('bugsData')) || [];

    const itemsContainer = document.getElementById("itemsContainer");
    const find_input = document.getElementById("find_input");
    const searchButton = document.getElementById("searchButton");
    const cleanButton = document.getElementById("cleanButton");
    const expensiveSwitch = document.getElementById("expensiveSwitch");
    const countButton = document.getElementById("countButton");
    const totalComplexity = document.getElementById("totalComplexity");

    function populateBugs(data) {
        itemsContainer.innerHTML = "";

        data.forEach((bug) => {
            const card = document.createElement("div");
            card.className = "col";

            card.innerHTML = `
            <div class="card" data-bug-id="${bug.id}">
                <div class="card-body">
                    <h5 class="card-title">${bug.title}</h5>
                    <p class="card-text">
                        ID: ${bug.id}<br>
                        Description: ${bug.description}<br>
                        Complexity: ${bug.complexity}
                    </p>
                    <button class="btn btn-success edit-button">Edit</button>
                    <button class="btn btn-danger delete-button">Delete</button>
                </div>
            </div>
        `;

            const editButton = card.querySelector(".edit-button");
            editButton.addEventListener("click", () => {
                window.location.href = `edit.html?id=${bug.id}`;
            });

            const deleteButton = card.querySelector(".delete-button");
            deleteButton.addEventListener("click", () => {
                const bugId = bug.id;
                deleteBugById(bugId);
            });

            function deleteBugById(bugId) {
                const bugIndex = data.findIndex((bug) => bug.id === bugId);

                if (bugIndex !== -1) {
                    data.splice(bugIndex, 1);

                    const cardToRemove = document.querySelector(`[data-bug-id="${bugId}"]`);
                    if (cardToRemove) {
                        cardToRemove.remove();
                    }
                }

                localStorage.setItem('bugsData', JSON.stringify(data));
            }

            itemsContainer.appendChild(card);
        });

    }

    populateBugs(savedBugsData);

    searchButton.addEventListener("click", () => {
        const searchTerm = find_input.value.toLowerCase();
        const filteredBugs = savedBugsData.filter((bug) =>
            bug.title.toLowerCase().includes(searchTerm)
        );
        populateBugs(filteredBugs);
    });

    cleanButton.addEventListener("click", () => {
        find_input.value = "";
        populateBugs(savedBugsData);
    });

    expensiveSwitch.addEventListener("change", () => {
        const dataToSort = [...savedBugsData];
        if (expensiveSwitch.checked) {
            dataToSort.sort((a, b) => b.complexity - a.complexity);
        } else {
            dataToSort.sort((a, b) => a.complexity - b.complexity);
        }
        populateBugs(dataToSort);
    });

    countButton.addEventListener("click", () => {
        totalComplexity.textContent = savedBugsData.reduce((total, bug) => total + bug.complexity, 0);
    });
});
