import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { articleFiles } from "./articles/article-files";
import { ArticleLinks, HomeLink } from "./components";

const getArticleRoutes = () => {
    return articleFiles.map(article => {
        const ArticleComponent = React.lazy(() =>
            import(`./articles/${article.id}.jsx`)
        );

        return (
            <Route
                exact
                path={`/articles/${article.id}`}
                key={article.id}
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <ArticleComponent />
                    </Suspense>
                }
            />
        );
    });
};

const App = () => {
    const articleRoutes = getArticleRoutes();

    return (
        <Router>
            <div>
                <HomeLink />
                <h1>翻译</h1>

                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <quote>
                                <p>
                                    &quot;It does not matter how slowly you go
                                    as long as you do not stop.&quot;
                                </p>
                                <p>
                                    <i>Confucius</i>
                                </p>
                            </quote>
                        }
                    />
                    {articleRoutes}
                </Routes>
                <ArticleLinks />
            </div>
        </Router>
    );
};

export default App;
