import { useEffect, useRef, useState } from 'react';

// third-party
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// project-imports
import AddEventForm from './AddEventForm';
import EventDetailModal from './EventDetailModal';
import { updateEvent, useGetEvents } from 'api/calender';

import { COLOR_CLASS_MAP } from 'utils/colorClassMap';

// ==============================|| APPLICATION - CALENDAR  ||============================== //

export default function CalendarComponent() {
  const { events } = useGetEvents();

  const [isModalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const [selectedRange, setSelectedRange] = useState(null);
  const calendarRef = useRef(null);

  const handleEventModal = () => {
    setOpen((prev) => !prev);
    setModalOpen(false);
  };

  const handleRangeSelect = (selectInfo) => {
    setSelectedRange({
      start: selectInfo.start,
      end: selectInfo.end
    });

    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }

    handleEventModal();
    setSelectedEvent(null);
  };

  const handleEventSelect = (arg) => {
    if (arg?.event?.id) {
      const event = events.find((event) => event.id === arg.event.id);
      setSelectedEvent(event);
    } else {
      setOpen(!open);
    }
    setModalOpen(true);
  };

  const handleEventUpdate = async ({ event }) => {
    await updateEvent(event.id, {
      allDay: event.allDay,
      start: event.start,
      end: event.end
    });
  };

  const handleModal = () => {
    if (isModalOpen) {
      setSelectedEvent(null);
    }
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.querySelectorAll('.fc-button-group').forEach((el) => {
      el.classList.add('d-inline-flex');
    });
  }, []);

  return (
    <div className="container px-0">
      <FullCalendar
        weekends
        editable
        droppable
        selectable
        ref={calendarRef}
        viewClassNames="calendar"
        rerenderDelay={10}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        eventClassNames={(arg) => {
          const color = arg.event.backgroundColor;
          return color && [COLOR_CLASS_MAP[color] || 'event-default'];
        }}
        dayMaxEventRows={3}
        eventDisplay="block"
        allDayMaintainDuration
        eventResizableFromStart
        initialView="dayGridMonth"
        events={events}
        select={handleRangeSelect}
        eventDrop={handleEventUpdate}
        eventClick={handleEventSelect}
        eventResize={handleEventUpdate}
        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
      />
      <EventDetailModal
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        selectedEvent={selectedEvent}
        setModalOpen={setModalOpen}
        handleEventModal={handleEventModal}
      />
      <AddEventForm open={open} handleEventModal={handleEventModal} selectedEvent={selectedEvent} selectedRange={selectedRange} />
    </div>
  );
}
