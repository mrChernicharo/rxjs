import * as rx from 'rxjs';
import { delay, map, tap, take, takeLast, takeUntil } from 'rxjs/operators';

const domClick$ = rx.fromEvent(document, 'click').pipe(
  take(13),
  tap((event) => {
    console.log({ x: event.x, y: event.y });
  })
);

domClick$.subscribe((event) => console.log(event));
