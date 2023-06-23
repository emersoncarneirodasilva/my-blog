import React from "react";
import { Link } from "react-router-dom";

// CSS
import styles from "./Search.module.css";

// Components
import PostDetail from "../../components/PostDetail";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Resultados encontrados para: {search}</h2>
      {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
