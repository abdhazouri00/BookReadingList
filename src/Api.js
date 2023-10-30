import axios from "axios";

async function SearchImages(term) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "WW3pF4mIvm2eYj3LS8oNqLsmwgY2Sl4h7839bXFHGcE",
        query: term,
        w: 400,
        h: 300,
      },
    });
    const urls = response.data.results.map(
      (element) => element.urls["regular"]
    );
    return urls;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export default SearchImages;
