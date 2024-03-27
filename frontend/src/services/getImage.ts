import { IImage } from "../types/image";

const getImage = async (id: string) => {
  return new Promise<IImage>((resolve) => {
    const url = `http://someplace.com/${id}.png`;
    let image = new Image();
    image.onload = () =>
      resolve({
        id,
        name: `Image ${id}`,
        url,
        metadata: {
          width: `${image.width}px`,
          height: `${image.height}px`,
        },
      });
    image.src = url;
  });
};

export default getImage;
