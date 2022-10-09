import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./styles.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Marvin Destin",
      avatarUrl: "https://github.com/jdmarvin7.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare`,
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-10-08 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Skal Io",
      avatarUrl: "https://github.com/oliver-zyn.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare`,
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-10-08 20:00:00"),
  },
];

function App() {
  return (
    <div className="container">
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
