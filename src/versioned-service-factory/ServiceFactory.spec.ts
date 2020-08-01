import { ServiceFactory } from "./ServiceFactory";
import { OldFooService } from "./OldFooService";
import { NewFooService } from "./NewFooService";

describe("ServiceFactory", () => {

  test("Should create OldFooService passing version 0.9.0", async () => {
    const oldService = ServiceFactory.getFooService("https://example.com", "0.9.0");
    expect(oldService).toBeInstanceOf(OldFooService);
  });

  test("Should create OldFooService passing version 1.5.0", async () => {
    const oldService = ServiceFactory.getFooService("https://example.com", "1.5.0");
    expect(oldService).toBeInstanceOf(OldFooService);
  });

  test("Should create NewFooService passing version 2.0.0", async () => {
    const oldService = ServiceFactory.getFooService("https://example.com", "2.0.0");
    expect(oldService).toBeInstanceOf(NewFooService);
  });

  test("Should create NewFooService passing version 3.5.0", async () => {
    const oldService = ServiceFactory.getFooService("https://example.com", "3.5.0");
    expect(oldService).toBeInstanceOf(NewFooService);
  });

});
