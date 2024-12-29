import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import createEmotionServer from '@emotion/server/create-instance';
import Script from 'next/script';
import createEmotionCache from '../utility/createEmotionCache';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            const emotionStyles = extractCriticalToChunks(initialProps.html);
            const emotionStyleTags = emotionStyles.styles.map((style) => (
                <style
                    data-emotion={`${ style.key } ${ style.ids.join(' ') }`}
                    key={style.key}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: style.css }}
                />
            ));
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        {[ ...emotionStyleTags ]}
                    </>
                ),
            };
        } finally {
            ctx.renderPage(sheet);
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <Script id="creatigo-config" strategy="lazyOnload">
                        {`
                             window.creatigoConfig = {
                                REACT_APP_CREATIGO_API_BASE_URL: '%REACT_APP_CREATIGO_API_BASE_URL%',
                                REACT_APP_CREATIGO_IMAGE_BASE_URL: '%REACT_APP_CREATIGO_IMAGE_BASE_URL%',
                            };
                        `}
                    </Script>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
