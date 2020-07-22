import styled from 'styled-components'

const ContactInfo = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing:0.1rem;
    margin: 5px 20px;
    color: hsl(242, 100%, 66%);

    a {
        font-weight: normal;
        font-size: 1.5rem;
        text-transform: lowercase;
        letter-spacing: 0;
        color: hsl(0, 0%, 0%);
        text-decoration: none;
    }

    a:hover {
        color: hsl(242, 100%, 66%);
    }
`

export default ContactInfo