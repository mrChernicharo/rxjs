import * as rx from 'rxjs';
import { delay, map, tap, take, takeLast, takeUntil } from 'rxjs/operators';

function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}

const domClick$ = rx.fromEvent(document, 'click').pipe(
  take(13),
  tap((event) => {
    console.log({ x: event.x, y: event.y });
  })
);

domClick$.subscribe((event) => console.log(event));
