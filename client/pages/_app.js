import 'bootstrap/dist/css/bootstrap.css';
import buildClient from "../api/buildClient";

const AppComponent = ({Component,pageProps}) =>{
    return (
    <div>
        <h1>header</h1>
        <Component {...pageProps} />
    </div>
    )
}

AppComponent.getInitialProps = async(appContext) =>{
    const client = buildClient(appContext.ctx);

    const {data} = await client.get("/api/users/currentuser");

    console.log(data);
    return data;
}

export default AppComponent;