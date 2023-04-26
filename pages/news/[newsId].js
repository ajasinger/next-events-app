import { useRouter } from 'next/router';

// domain.com/news/dynamicNewsId
// use [] to designate dynamic url

function DetailPage() {
    //allows us to make dynamic URLs
    const router = useRouter();
    router.query.newsId;

    return <h1>The details page</h1>
}

export default DetailPage;