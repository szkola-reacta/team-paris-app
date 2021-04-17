import { Link } from '@chakra-ui/react'

function NavigationLinks({ items = [] }) {
    return(
        <>
        {
            items.map((item, index) => (
                <Link
                key={index}
                cursor='pointer'
                 href={item.to}
                 p='5px'
                 fontSize='0.8em'
                 fontWeight='600'
                 fontStyle='underline'
                 color='blue.500'
                 >{item.content}</Link>
            ))
        }
        </>
    )
}

export default NavigationLinks;