import { createClient } from "@sanity/client";
import imageUrlBuidler from "@sanity/image-url";

export const client = createClient({
  projectId: "",
  dataset: "",
  apiVersion: "",
  useCdn: true,
  token: "",
});

const builder = imageUrlBuidler(client);
export const urlFor = (source) => builder.image(source);
