import Layout from "components/Layout";
import useUser from "lib/useUser";

export default function ProtectedTest() {
  const { user } = useUser({
    redirectTo: "/login",
  });

  return (
    <Layout>
      <h1>Protected Test</h1>
      {user && (
        <>
          <p><strong>User: </strong> {user.login}</p>
          <img src={user.avatarUrl || ""} alt="avatar" />
        </>
      )}
    </Layout>
  );
}