document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const bugId = parseInt(urlParams.get('id'));

    const savedBugsData = JSON.parse(localStorage.getItem('bugsData')) || [];
    const bugToEdit = savedBugsData.find((bug) => bug.id === bugId);

    if (!bugToEdit) {
        console.error('Bug not found');
        return;
    }

    document.getElementById("title_input").value = bugToEdit.title;
    document.getElementById("description_input").value = bugToEdit.description;
    document.getElementById("complexity_input").value = bugToEdit.complexity;

    const editBugForm = document.getElementById("editBugForm");
    editBugForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const titleInput = document.getElementById("title_input").value;
        const descriptionInput = document.getElementById("description_input").value;
        const complexityInput = parseInt(document.getElementById("complexity_input").value);

        if (titleInput.trim() !== '' && descriptionInput.trim() !== '' && !isNaN(complexityInput)) {
            bugToEdit.title = titleInput;
            bugToEdit.description = descriptionInput;
            bugToEdit.complexity = complexityInput;

            localStorage.setItem('bugsData', JSON.stringify(savedBugsData));

            window.location.href = 'bugs_manager_page.html';
        }
    });
});
