/* eslint-disable @typescript-eslint/no-unused-vars */
import { ServiceFactory } from "./ServiceFactory";

const oldService = ServiceFactory.getFooService("https://example.com", "1.1.0");
const newService = ServiceFactory.getFooService("https://example.com", "2.0.0");
