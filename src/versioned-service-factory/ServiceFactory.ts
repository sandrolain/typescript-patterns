import { FooService } from "./FooService";
import { OldFooService } from "./OldFooService";
import { NewFooService } from "./NewFooService";

export class ServiceFactory {
  private static fooServiceInstances: Map<string, FooService> = new Map();

  public static getFooService (baseUrl: string, version: string): FooService {
    if(!this.fooServiceInstances.has(version)) {
      this.fooServiceInstances.set(version, this.generateFooService(baseUrl, version));
    }
    return this.fooServiceInstances.get(version);
  }

  private static generateFooService (baseUrl: string, version: string): FooService {
    if(this.compareVersions(version, "2.0.0") < 0) {
      return new OldFooService(baseUrl);
    }
    return new NewFooService(baseUrl);
  }

  private static compareVersions (versionA: string, versionB: string): number {
    const partsVersionA = versionA.split(".");
    const partsVersionB = versionB.split(".");
    const maxLength     = Math.max(partsVersionA.length, partsVersionB.length);

    for(let i = 0; i < maxLength; i++) {
      if(!(i in partsVersionA)) {
        return 1;
      }

      if(!(i in partsVersionB)) {
        return -1;
      }

      const valueA = parseInt(partsVersionA[i], 10);
      const valueB = parseInt(partsVersionB[i], 10);

      if(valueA !== valueB) {
        return valueA - valueB;
      }
    }

    return 0;
  }
}
