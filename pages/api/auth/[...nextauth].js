import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '613985939864-bt936qssa8urngi01k8rtl59mok3j31d.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    GitHubProvider({
      clientId: dedf1ff2d1af38734846,
      clientSecret: a1006269a2a31cc684ae66956429bf15e2877900,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
