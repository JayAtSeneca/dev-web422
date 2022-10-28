import Link from 'next/link';
import { cartListAtom } from '../store';
import { useAtom } from 'jotai';

export default function Layout(props) {
  const [cartList, setCartList] = useAtom(cartListAtom);
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h2>Online Shopping</h2>
        <Link href="/"><a>Home</a></Link> | <Link href="/products"><a>Products</a></Link> | <Link href="/cart"><a>Shopping Cart <span>({cartList.length})</span></a></Link>
        <hr />
        {props.children}
      </div>
    </>
  )
}

