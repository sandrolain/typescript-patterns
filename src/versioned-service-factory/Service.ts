
export abstract class Service {

  constructor (protected baseUrl = "") {
  }

  protected get (path: string, options: RequestInit = {}): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, options);
  }

  protected post (path: string, data: any, options: RequestInit = {}): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, {
      ...options,
      method: "POST",
      body: data
    });
  }

  protected put (path: string, data: any, options: RequestInit = {}): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, {
      ...options,
      method: "PUT",
      body: data
    });
  }

  protected delete (path: string, options: RequestInit = {}): Promise<Response> {
    return fetch(`${this.baseUrl}${path}`, {
      ...options,
      method: "DELETE"
    });
  }
}
