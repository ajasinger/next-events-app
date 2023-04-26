//domain.com/news

//link component for links instead of <a>
import Link from 'next/link';

function NewsPage() {
    return (
        <div>
            <h1>The news page</h1>
            <ul>
                {/* can also dynamically popluate from array */}
                <li>
                    {/* loads component and changes URL without reloading page */}
                    <Link href="/news/article-1">
                        article 1
                    </Link>
                </li>
                <li>article 2</li>
            </ul>
        </div>
        
    )
}

export default NewsPage;