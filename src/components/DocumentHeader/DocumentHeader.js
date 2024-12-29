/* eslint-disable camelcase */
import Head from 'next/head';

const DocumentHeader = ({
    defaultTitle,
    data, loadFonts,
}) => {
    const {
        page_title = null,
        meta_description = null,
        open_graph = [],
        keywords = '',
    } = data || {};
    return (
        <>
            <Head>
                <title>{page_title || defaultTitle}</title>
                <meta name="description" content={meta_description || ''} />
                <meta name="keywords" content={keywords || ''} />
                {loadFonts}
                {open_graph && open_graph.length > 0 && open_graph.map((d) => (<meta key={d.property} property={d.property} content={d.content} />))}
            </Head>
        </>
    );
};
export default DocumentHeader;
