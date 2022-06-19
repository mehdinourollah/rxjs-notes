import { Observable, take } from "rxjs";

const source = new Observable((subscriber) => {
  setTimeout(() => subscriber.next("a"), 100);
  setTimeout(() => subscriber.next("b"), 200);
  setTimeout(() => subscriber.next("c"), 300);
  setTimeout(() => subscriber.next("d"), 400);
  setTimeout(() => subscriber.next("e"), 500);
});

const taken = source.pipe(take(3));

taken.subscribe((value) => {
  console.log(value);
});

/*
a
b
c
*/
