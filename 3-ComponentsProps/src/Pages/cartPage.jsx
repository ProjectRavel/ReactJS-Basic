import DataTable from "./dataTablePage";
import NavigationProduct from "../components/Elements/navigation/navigationProducts";

const CartPage = () => {
    const items = JSON.parse(localStorage.getItem('cart'))
    const total = items.reduce((acc, item) => acc + (item.price * item.qty), 0)
    return (
        <>
        <NavigationProduct />
        <DataTable items={items}total={total}/>
        </>
    )
}

export default CartPage;