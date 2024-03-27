import { useRecoilValue } from "recoil";
import imageAtom from "../../recoil/image/atom";

const Image = ({ id }: { id: string }) => {
  const { name, url } = useRecoilValue(imageAtom(id));

  return (
    <div className="image">
      <div className="name">{name}</div>
      <img src={url} alt={name} />
    </div>
  );
};

export default Image;
