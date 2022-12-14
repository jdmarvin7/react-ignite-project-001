import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

// author: { avatar_url: "", name: "",  role: "" }
// publishedAt: Date

function Post({ author, publishedAt, content }) {

  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt)
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true}
          src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

export { Post };
