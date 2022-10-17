import * as dotenv from 'dotenv'
dotenv.config()

async function getapi(posts, users) {
  if (posts === "" && users === "") {
    throw new Error("api not found");
  } else {
    let response_posts = await fetch(posts).catch((e) =>
      console.error("error posts api..." + e)
    );
    let response_users = await fetch(users).catch((e) =>
      console.error("error users api..." + e)
    );

    if (response_posts.status === 200 && response_users.status === 200) {
      let data_users = await response_users.json();
      let data_posts = await response_posts.json();

      if (data_users.length > 0 && data_posts.length > 0) {
        data_users.map((data, i) => {
          return (data["post"] = data_posts.filter((user, i) => {
            return user.userId == data["id"];
          }));
        });
        return data_users;
      } else {
        throw new Error("no data found");
      }
    } else {
      throw new Error("api not found");
    }
  }
}
module.exports = getapi;
