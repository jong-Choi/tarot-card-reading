import { atomFamily } from "recoil";
import getImage from "../../services/getImage";

const imageAtom = atomFamily({
  key: "imageState",
  default: async (id: string) => getImage(id),
});

export default imageAtom;
