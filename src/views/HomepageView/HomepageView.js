import HomepageViewFunc from './functionality/HomepageView.func';
import HomepageBlock from './HomepageBlock';
import HomepageViewSkeleton from './HomepageView.skeleton';

const HomepageView = ({
    url,
}) => {
    const { useHomepageView } = HomepageViewFunc;
    const { homePageCmsData, homePageLoading  } = useHomepageView({
        url,
    });

    return (
        <>

            {homePageLoading ? (
                <HomepageViewSkeleton />
            ) : (
                <>
                    {!homePageLoading
                && homePageCmsData?.findHomepage?.content?.entries?.[ 0 ]?.blocks?.map((item) => (
                    <HomepageBlock
                        key={item?.uid}
                        block={item}
                    />
                ))}
                </>
            )}
        </>

    );
};

export default HomepageView;
