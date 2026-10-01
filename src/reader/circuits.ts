// The time-circuit display: three rows of segment readouts, like the dashboard prop.

type RowName = 'destination' | 'present' | 'last';

const ROWS: { name: RowName; label: string }[] = [
  { name: 'destination', label: 'Destination time' },
  { name: 'present', label: 'Present time' },
  { name: 'last', label: 'Last time departed' },
];

/** Parses "NOV 12 1985 10:04 PM". */
function fields(time: string | null) {
  const m = time?.match(/^(\w{3}) (\d{2}) (\d{4}) (\d{2}):(\d{2}) (AM|PM)$/);
  if (!m) return null;
  const [, month, day, year, hour, min, ampm] = m;
  return { month, day, year, hour, min, ampm };
}

const seg = (text: string, ghost: string) => `<span class="seg"><i aria-hidden="true">${ghost}</i><b>${text}</b></span>`;

function row(name: RowName, label: string, time: string | null) {
  const f = fields(time);
  const cell = (text: string | undefined, ghost: string, caption: string) =>
    `<span class="tc-cell">${seg(text ?? '', ghost)}<small>${caption}</small></span>`;
  return `
    <div class="tc-row ${name}${f ? '' : ' off'}" aria-label="${label}: ${time ?? 'not set'}">
      <div class="tc-cells">
        ${cell(f?.month, '~~~', 'Month')}
        ${cell(f?.day, '~~', 'Day')}
        ${cell(f?.year, '~~~~', 'Year')}
        <span class="tc-cell ampm"><span class="lamp${f?.ampm === 'AM' ? ' on' : ''}"></span><small>AM</small><span class="lamp${f?.ampm === 'PM' ? ' on' : ''}"></span><small>PM</small></span>
        ${cell(f ? `${f.hour}:${f.min}` : undefined, '~~:~~', 'Time')}
      </div>
      <div class="tc-plate">${label}</div>
    </div>`;
}

export function circuits(times: { destination: string | null; present: string | null; last: string | null; only?: RowName }) {
  const rows = ROWS.filter((r) => !times.only || r.name === times.only).map((r) => row(r.name, r.label, times[r.name]));
  return times.only ? rows.join('') : `<div class="circuits">${rows.join('')}</div>`;
}

export function clockReadout(label: string, text: string, urgent: boolean) {
  return `<div class="clock${urgent ? ' urgent' : ''}" role="timer" aria-label="${label} ${text}">
    <span class="clock-label">${label}</span>${seg(text, '~:~~')}
  </div>`;
}
