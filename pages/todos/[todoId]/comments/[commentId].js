import Link from "next/link";
import { useRouter } from "next/router";

export default function CommentsId() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <p>Exibindo Comment {commentId}</p>
    </>
  );
}
