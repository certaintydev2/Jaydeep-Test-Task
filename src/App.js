import './App.css';

function App() {


  async function getapi() {

    const post_api_url = "https://jsonplaceholder.typicode.com/posts";
    const user_api_url = "https://jsonplaceholder.typicode.com/users";

    var response_posts = await fetch(post_api_url).catch(e => console.error('error posts api...' + e));
    var response_users = await fetch(user_api_url).catch(e => console.error('error users api...' + e));

    var data_users = await response_users.json();
    var data_posts = await response_posts.json();

    data_users.map((data, i) => {
      return data['post'] = data_posts.filter((user, i) => { return user.userId == data['id'] });
    })

    console.log('data', data_users)

  }

  getapi();
  return (
    <div className="App">
      <h2>API Response check in console</h2>
    </div>
  );

}

export default App;
