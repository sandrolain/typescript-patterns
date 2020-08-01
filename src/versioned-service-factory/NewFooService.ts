import { DataA, DataB } from "./models";
import { FooService } from "./FooService";

// FooService class implementation for new endpoints versions
export class NewFooService extends FooService {
  public async getDataA (): Promise<DataA> {
    return (await this.get("endpointA")).json();
  }

  public async getDataB (): Promise<DataB> {
    return (await this.get("endpointB")).json();
  }
}
