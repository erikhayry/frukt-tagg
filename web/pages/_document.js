import Document, { Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="se">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="Tag or add labels toy your iTunes tracks" />

                <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}
