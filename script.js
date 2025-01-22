let events = [];

const eventDateInput = document.querySelector("#eventDate");
const eventDescriptionInput = document.querySelector("#eventDescription");
const addButton = document.querySelector("#addEventButton");
const eventsList = document.querySelector("#eventsList");
const showAllDaysButton = document.querySelector("#showAllDays");

// 1. Function to add a new event
function addEvent() {
  const eventDate = eventDateInput.value;
  const eventDescription = eventDescriptionInput.value;
  if (!eventDate || !eventDescription) {
    alert("Empty fileds");
    return;
  }

  events.push({
    date: eventDate,
    description: eventDescription,
  });

  eventDateInput.value = "";
  eventDescriptionInput.value = "";
  renderEvents();
}
//3. Function to render all  event
// Function to render events
function renderEvents() {
  // Clear the current list
  eventsList.innerHTML = "";
  const eventsToRender = events;

  // Add each event as a list item
  eventsToRender.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = `${event.date} - ${event.description}`;
    eventsList.appendChild(listItem);

    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger btn-sm ml-2";
    removeButton.textContent = "Remove";
    listItem.appendChild(removeButton);
  });
}

//2. event listener for the addEvent button
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addEvent();
});
