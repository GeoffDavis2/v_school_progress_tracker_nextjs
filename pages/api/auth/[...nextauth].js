import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      // responseType: 'code',
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      // authorization: { params: { scope: 'openid profile email' } },
      redirectUri: 'http://localhost:3000/',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
