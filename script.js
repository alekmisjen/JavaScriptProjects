function saveEventsToLocalStorage() {
  localStorage.setItem("events", JSON.stringify(events));
}
function loadEventsFromLocalStorage() {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : [];
}
let events = loadEventsFromLocalStorage();

const eventDateInput = document.querySelector("#eventDate");
const eventDescriptionInput = document.querySelector("#eventDescription");
const addButton = document.querySelector("#addEventButton");
const eventsList = document.querySelector("#eventsList");
const showAll = document.querySelector("#showAllEvents");
const daysButtons = document.querySelector(".btn-group");

// 1. Function to add a new event
function addEvent() {
  const eventDate = eventDateInput.value;
  const eventDescription = eventDescriptionInput.value;
  if (!eventDate || !eventDescription) {
    alert("Empty fileds");
    return;
  }

  events.push({
    id: generateEventId(),
    date: eventDate,
    description: eventDescription,
  });

  eventDateInput.value = "";
  eventDescriptionInput.value = "";
  renderEvents();
  saveEventsToLocalStorage();
}
function generateEventId() {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}
//3. Function to render all  events
function renderEvents(filteredEvents = null) {
  // Clear the current list
  eventsList.innerHTML = "";
  const eventsToRender = filteredEvents || events;

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
    removeButton.addEventListener("click", () => removeEvent(event.id));
  });
}

//function to generate the next seven days buttons
function generateNextSevenDays() {
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);

    const formattedDate = currentDate.toISOString().split("T")[0];

    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-secondary me-1";
    button.textContent = formattedDate;
    button.addEventListener("click", (e) => filterEventsByDay(formattedDate));
    daysButtons.appendChild(button);
  }
}
generateNextSevenDays();

function filterEventsByDay(selectedDate, currentBtn) {
  const filteredEvents = events.filter((event) => event.date === selectedDate);
  renderEvents(filteredEvents);
}
function removeEvent(eventId) {
  events = events.filter((event) => event.id !== eventId);
  saveEventsToLocalStorage();
  renderEvents();
}

showAll.addEventListener("click", () => renderEvents(events));
//2. event listener for the addEvent button
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addEvent();
});
