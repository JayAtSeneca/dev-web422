import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Products() {
  const { id } = router.query;
  const { data, error } = useSWR(`https://web422Test3.com/products/${id}`);
  const router = useRouter();
  return (
    <>
      <strong>Title:</strong> {data?.title}
      <br />
      <strong>Description:</strong> {data?.description}
      <br />
      <Link href={`/products?similarTo=${id}`} passHref>
        <a>Similar Products</a>
      </Link>
    </>
  );
}
