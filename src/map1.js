import * as rx from 'rxjs';
import { delay, map, tap, take, takeLast, takeUntil } from 'rxjs/operators';

function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}
const jsonString = '{"name": "rafael", "age":35}';
const apiCall = rx.of(jsonString);

apiCall.pipe(
  map((obj) => {
    return { name: obj.name, age: obj.age };
    // return obj;
  })
);

apiCall.subscribe((data) => print(data));
