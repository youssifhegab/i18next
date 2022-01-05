import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  
  const { ctx, Component } = appContext;
  const pageProps = Component.getServerSideProps ? await Component.getServerSideProps(ctx) : {};
  
  return { pageProps }
}


export default appWithTranslation(MyApp)

