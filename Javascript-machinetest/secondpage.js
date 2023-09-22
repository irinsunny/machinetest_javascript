function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {

    //content
    const form = document.getElementById('secondform');
    const idInput = document.getElementById('empid')
    const nameInput = document.getElementById('empName');
    const projectInput = document.getElementById('project');
    const causeInput = document.getElementById('cause');
    const sourceInput = document.getElementById('source');
    const destinationInput = document.getElementById('destination');
    const fromDateInput = document.getElementById('fromdate')
    const daysInput = document.getElementById('days');
    const toDateInput = document.getElementById('todate')
    const modeInput = document.getElementById('mode');

    // error message
    const nameError = document.getElementById('empNameError');
    const idError = document.getElementById('empError');
    
    const projectError = document.getElementById('projectError');
    const causeError = document.getElementById('causeError');
    const SourceError = document.getElementById('SourceError');
    const destinationError = document.getElementById('destinationError');
    const fromdateError = document.getElementById('fromdateError');
    const todateError = document.getElementById('causeError');
    const modeError = document.getElementById('modeError');
    

    //to make past dates disappear
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    fromDateInput.min = formattedDates(minDate);
    toDateInput.min = formattedDates(minDate);
    function formattedDates(date) {
        //yyyy-mm-dd
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`

    }
    form.addEventListener("change", function (event) {
        event.preventDefault();

        // Get the selected dates from the 'fromDate1' and 'fromDate2' inputs
        const fromDate1 = new Date(fromDateInput.value);
        const fromDate2 = new Date(toDateInput.value);

        if (fromDate1 >= fromDate2) {
            alert("From Date 2 should be greater than From Date 1.");
            return;
        }

        // Calculate the difference in days between 'fromDate1' and 'fromDate2'
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
        const diffDays = Math.round(Math.abs((fromDate2 - fromDate1) / oneDay));

        // Display the calculated number of days in the 'noOfDays' input
        days.value = diffDays;

    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const empId = idInput.value;
        const empName = nameInput.value;
        const project = projectInput.value;
        const cause = causeInput.value;
        const source = sourceInput.value;
        const destination = destinationInput.value;
        const mode = modeInput.value
        //checking if any fields are left empty
        if (!empId) {
            idError.textContent = 'Employee ID is required';
        }
        else {
            idError.textContent = '';
        }
        if (!empName) {
            nameError.textContent = 'Employee Name is required'
        }
        else {
            nameError.textContent = '';
        }
        if (!project) {
            projectError.textContent = 'Project name is required';
        }
        else {
            projectError.textContent = '';
        }
        if (!cause) {
            causeError.textContent = 'Cause is required';
        }
        else {
            causeError.textContent = '';
        }
        if (!source) {
            SourceError.textContent = 'Source is required';
        }
        else {
            SourceError.textContent = '';
    
        }
        if (!destination) {
            destinationError.textContent = 'Destination is required';
        }
        else {
            destinationError.textContent = '';
        }
        if (!mode) {
            modeError.textContent = 'Destination is required';
        }
        else {
            modeError.textContent = '';
        }





    })


});