import { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import styled from 'styled-components'

const ScrollButton = () => {
    const Button = styled.div`
        position: fixed;
        width: 100%;
        left: 95%;
        bottom: 70px;
        height: 10px;
        font-size: 2.5rem;
        z-index: 1;
        cursor: pointer;
        color: black;
    `

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <Button className="sm:flex hidden">
            <FaArrowCircleUp
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            />
        </Button>
    )
}

export default ScrollButton
