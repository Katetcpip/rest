import Nav from 'Components/Navigation'
import Footer from 'Components/Footer'
import { Rest } from 'Components/RestPage'
import { CartType } from 'Components/App'

type Props = {
    children: JSX.Element
    cartItems: Array<CartType>
    copyArray: Array<Rest>
    onChange: (a: Array<Rest>) => void
}

const PageLayout = ({ children, cartItems, copyArray, onChange }: Props) => {
    return (
        <>
            <Nav
                copyArray={copyArray}
                onChange={onChange}
                cartItems={cartItems}
            />
            {children}
            <Footer />
        </>
    )
}

export default PageLayout
