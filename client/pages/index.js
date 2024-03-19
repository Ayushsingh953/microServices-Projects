import axios from 'axios';
import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {

  return currentUser ? <h1>You are signed in</h1> : <h1>You are not signed in</h1> ;
};

LandingPage.getInitialProps = async (context) => {
   const cleint=buildClient(context);

   const {data}=await cleint.get("/api/users/currentuser");
   return data;
};

export default LandingPage;
