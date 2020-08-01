import { DataA, DataB } from "./models";
import { Service } from "./Service";

// Expected FooService class and methods
export abstract class FooService extends Service {
  public abstract getDataA(): Promise<DataA>;
  public abstract getDataB(): Promise<DataB>;
}
