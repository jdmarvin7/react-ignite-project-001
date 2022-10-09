import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jdmarvin7.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mael JD</strong>
              <time
                title="publicado 11 de maio às 08h13"
                dateTime="2022-05-11 08:13:00"
              >
                Cerca de 34min atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, Parabénss</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
