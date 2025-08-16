import CredentialsProvider from 'next-auth/providers/credentials';
import Nextauth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const handler = Nextauth({
   providers: [
    CredentialsProvider({
        name: "Login with email",
        credentials: {
            username: {label: "username", type: "text", placeholder: "jsmith"},
            password: {label: "password", type: "password"}
        },
        async authorize(credentials, req) {

        } 
    })
   ]
})

export { handler as GET, handler as POST };