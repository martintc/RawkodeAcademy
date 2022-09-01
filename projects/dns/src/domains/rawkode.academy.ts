import { Domain } from "../types";
import { GSuite } from "../integrations";

export const RawkodeAcademy: Domain = {
  name: "rawkode.academy",
  records: {
    ...GSuite,
  },
};
