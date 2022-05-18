import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
// import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      redirectUri: 'http://localhost:3000/',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
