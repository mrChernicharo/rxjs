import * as rx from 'rxjs';
import { delay, map, tap, take, takeLast, takeUntil } from 'rxjs/operators';

function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}

const promise = new Promise((resolve, reject) => {
  print('started!');
  setTimeout(() => {
    resolve('promise resolved!');
  }, 2000);
});

const obsvPromise = rx.from(promise);

obsvPromise.subscribe((result) => print(result));

// // // // // // // / / //

const interval = rx.interval(1000);
interval.pipe(take(13)).subscribe((num) => print(new Date().getSeconds(num)));
