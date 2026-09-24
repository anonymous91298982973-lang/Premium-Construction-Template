export type OpenState = {
  open: boolean;
  label: string;
  detail: string;
};

function minutesNow(d: Date) {
  return d.getHours() * 60 + d.getMinutes();
}

export function getOpenState(now = new Date()): OpenState {
  const dallas = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Chicago" }),
  );
  const day = dallas.getDay();
  const mins = minutesNow(dallas);

  if (day === 0) {
    return { open: false, label: "Closed Sunday", detail: "Back Monday 10:30 AM" };
  }

  const close = day === 5 || day === 6 ? 20 * 60 + 30 : 19 * 60 + 30;
  const openAt = 10 * 60 + 30;

  if (mins < openAt) {
    return {
      open: false,
      label: "Opens today",
      detail: "Window at 10:30 AM",
    };
  }
  if (mins >= close) {
    const next = day === 6 ? "Monday 10:30 AM" : "tomorrow 10:30 AM";
    return { open: false, label: "Closed for the night", detail: `Back ${next}` };
  }
  return {
    open: true,
    label: "Window is open",
    detail: `Until ${day === 5 || day === 6 ? "8:30 PM" : "7:30 PM"}`,
  };
}
