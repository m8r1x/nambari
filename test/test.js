import test from "ava";

import nambari from "../lib";

test("it correctly converts numbers < 10", t => {
  t.is(nambari(1), "moja");
});

test("it correctly converts numbers < 20", t => {
  t.is(nambari(13), "kumi na tatu");
});

test("it correctly converts numbers < 100", t => {
  t.is(nambari(28), "ishirini na nane");
  t.is(nambari(52), "hamsini na mbili");
  t.is(nambari(90), "tisini");
});
