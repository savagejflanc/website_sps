// Event Sorter - Automatically sorts events by date
document.addEventListener('DOMContentLoaded', function() {
  // Define the events with their details including dates
  const eventsList = [
    {
      id: "event4",
      title: "Physics Demo Day Event",
      date: "2025-09-17", // Format: YYYY-MM-DD
      description: "Experience the thrill of live experiments, hands-on physics, and community creativity at USM's Physics Demo Day!",
      link: "event4.html"
    },
    {
      id: "event1",
      title: "Rayborn Lecture Series",
      date: "2025-09-22", // Format: YYYY-MM-DD
      description: "Join us for the prestigious Rayborn Lecture Series featuring technical talks and public lectures in physics and astronomy. Sept 22: Tech Talk (1PM) & Main Lecture (6PM).",
      link: "event1.html"
    },
    {
      id: "event2",
      title: "Vicksburg FREE STEM Night",
      date: "2025-10-01", // Format: YYYY-MM-DD
      description: "Join us at Southern Cultural Heritage Center for an evening of interactive STEM activities and demonstrations.",
      link: "event2.html"
    },
    {
      id: "event3",
      title: "Science Saturday on the MS Gulf Coast",
      date: "2025-09-19", // Format: YYYY-MM-DD
      description: "FREE event at Walter Anderson Museum of Art featuring interactive STEAM exhibits, demonstrations, and activities. Part of the statewide Mississippi Science Festival!",
      link: "event3.html"
    }
  ];

  function renderEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to beginning of day for accurate comparison
    
    // Separate upcoming and past events
    const upcomingEvents = [];
    const pastEvents = [];
    
    eventsList.forEach(event => {
      const eventDate = new Date(event.date);
      if (eventDate >= today) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    });
    
    // Sort upcoming events by date (soonest first)
    upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Sort past events by date (most recent first)
    pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Create HTML for all events
    let html = '';
    
    // Add section title for upcoming events if any exist
    if (upcomingEvents.length > 0) {
      html += `
        <div class="col-span-1 md:col-span-2 lg:col-span-3">
          <h3 class="text-2xl font-semibold mb-6" style="font-family:'Space Grotesk',sans-serif; color:var(--accent);" data-aos="fade-right">
            Upcoming Events
          </h3>
        </div>
      `;
      
      // Add upcoming events
      upcomingEvents.forEach((event, index) => {
        html += createEventCard(event, false, index * 100);
      });
    }
    
    // Add section title for past events if any exist
    if (pastEvents.length > 0) {
      html += `
        <div class="col-span-1 md:col-span-2 lg:col-span-3 mt-10">
          <h3 class="text-2xl font-semibold mb-6" style="font-family:'Space Grotesk',sans-serif; color:var(--accent);" data-aos="fade-right">
            Past Events
          </h3>
        </div>
      `;
      
      // Add past events
      pastEvents.forEach((event, index) => {
        html += createEventCard(event, true, (upcomingEvents.length + index) * 100);
      });
    }
    
    eventsContainer.innerHTML = html;
    
    // Reinitialize AOS for newly added elements
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }
  
  function createEventCard(event, isPast, delay) {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    return `
      <div class="event-card relative" data-aos="fade-up" data-aos-delay="${delay}">
        ${isPast ? '<div class="absolute top-0 right-0 bg-[#FFCE00] text-black px-3 py-1 rounded-bl-lg rounded-tr-lg font-semibold z-10">Ended</div>' : ''}
        <div class="${isPast ? 'opacity-75' : ''}">
          <h3 class="text-xl" style="font-family:'Space Grotesk', sans-serif; color:var(--accent);">${event.title}</h3>
          <p class="text-sm mb-2 font-medium">${formattedDate}</p>
          <p>${event.description}</p>
          <a href="${event.link}">Learn More →</a>
        </div>
      </div>
    `;
  }
  
  // Call the function when the DOM is fully loaded
  renderEvents();
});