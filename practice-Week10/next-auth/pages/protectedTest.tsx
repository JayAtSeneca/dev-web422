import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  
  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
  <Layout>
      <h1>Protected Test</h1>
      {session.user && (
        <>
          <p><strong>User: </strong> {session.user.name}</p>
          <img src={session.user.image || ""} alt="avatar" />
        </>
      )}
    </Layout>
  );
}