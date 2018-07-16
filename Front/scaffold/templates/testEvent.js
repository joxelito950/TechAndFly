import { call, put } from "redux-saga/effects";
import { delay } from "redux-saga";

import event from "../{{ComponentName}}Event";

describe("{{ComponentName}}Event - Executer", () => {
  const generator = event({ payload: "action" });

  it("Debe validar la secuencia", () => {
    expect(generator.next().value).toEqual(call(delay, 1000));
    expect(generator.next().value).toEqual(put({ type: "INCREMENT" }));
  });
});
