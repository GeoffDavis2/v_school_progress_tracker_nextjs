import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();

// export default handleAuth({
//   async profile(req, res) {
//     await handleProfile(req, res, { refetch: true });
//   },
// });
