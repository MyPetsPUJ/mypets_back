import node_geocoder from "node-geocoder";

const options: node_geocoder.Options = {
  provider: "google",
  apiKey: "AIzaSyAh5NFAZ5AK5YHY5ybYWQm3rRQF4myY-q8",
};

const geoCoder = node_geocoder(options);

export default geoCoder;
