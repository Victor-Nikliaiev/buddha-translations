import { Link, useLocation } from "react-router-dom";
import { articleFiles } from "../articles/article-files";

export const ArticleLinks = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    if (!isMainPage) {
        return null;
    }

    const articleLinks = articleFiles
        .map(article => (
            <Link to={`/articles/${article.id}`} key={article.id}>
                {article.name}
            </Link>
        ))
        .reverse();

    return <div>{articleLinks}</div>;
};
