
import getapi from './util';
const user_api_url = process.env.USER_API_URL;
const post_api_url = process.env.POST_API_URL;


// Test length of the data
test("Test the length of the response data", async () => {
  const data = await getapi(post_api_url, user_api_url);
  expect(data.length).toBe(10);
});

// Test the lenght of the attributes of the output data first object
test("Test the length of the attributes of the output data first object", async () => {
    const data = await getapi(post_api_url, user_api_url);
    expect(Object.keys(data[0]).length).toBe(9);
});

// Test the keys of the output data first object
test("Test the keys of the output data first object", async () => {
    const data = await getapi(post_api_url, user_api_url);
    expect(Object.keys(data[0])).toEqual(["id", "name", "username", "email", "address", "phone", "website", "company", "post"]);
});

// Test the keys of the ouput data first object address
test("Test the keys of the ouput data first object address", async () => {
    const data = await getapi(post_api_url, user_api_url);
    expect(Object.keys(data[0].address)).toEqual(["street", "suite", "city", "zipcode", "geo"]);
});

// Test the keys of the ouput data first object company
test("Test the keys of the ouput data first object company", async () => {
    const data = await getapi(post_api_url, user_api_url);
    expect(Object.keys(data[0].company)).toEqual(["name", "catchPhrase", "bs"]);
});

// Test the keys of the ouput data first object post
test("Test the keys of the ouput data first object post", async () => {
    const data = await getapi(post_api_url, user_api_url);
    expect(Object.keys(data[0].post[0])).toEqual(["userId", "id", "title", "body"]);
});



