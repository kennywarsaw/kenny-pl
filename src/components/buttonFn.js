import React from 'react'
import Button from '../components/button'

const ButtonFn = ({ href, openModalFn }) => (
    <>
        {
            href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Zamów wycenę
                </a>
            ) : (
                    <Button onClick={openModalFn}>
                        Zamów wycenę
                    </Button>
                )
        }
    </>
)

export default ButtonFn