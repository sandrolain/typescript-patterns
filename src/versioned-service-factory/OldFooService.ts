import { OldDataA, OldDataB, DataA, DataB } from "./models";
import { FooService } from "./FooService";

// FooService class implementation for old endpoints versions with response normalization
export class OldFooService extends FooService {
  public async getDataA (): Promise<DataA> {
    const response: OldDataA = await (await this.get("endpointA")).json();
    return {
      foo: response.foo.shift()
    };
  }

  public async getDataB (): Promise<DataB> {
    const response: OldDataB = await (await this.get("endpointB")).json();
    return {
      bar: [response.bar]
    };
  }
}
