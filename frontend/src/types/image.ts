export interface IImage {
  id: string;
  name: string;
  url: string;
  metadata: {
    width: string;
    height: string;
  };
}
