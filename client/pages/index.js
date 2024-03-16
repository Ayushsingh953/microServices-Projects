import axios from 'axios';
import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {

  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async (context) => {
   const cleint=buildClient(context);

   const {data}=await cleint.get("/api/users/currentuser");
   return data;
};

export default LandingPage;
