import styled from 'styled-components'

const ContactInfo = styled.p`
    font-size: 1.5rem;
    text-transform: lowercase;
    margin: 5px 15px;

    a {
        color: hsl(0, 0%, 30%);
        text-decoration: none;
    }

    a:hover {
        color: hsl(242, 100%, 66%);
    }
`

export default ContactInfo