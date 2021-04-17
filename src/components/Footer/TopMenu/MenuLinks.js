import { Link } from '@chakra-ui/react';

function MenuLinks({ items = [] }) {
    return(
        <>
        {
            items.map((item, index) => (
                <Link
                key={index}
                cursor='pointer'
                 href={item.to}
                 p='15px'
                 fontSize='0.8em'
                 fontWeight='600'
                 fontStyle='underline'
                 color='#fff'
                 >{item.content}</Link>
            ))
        }
        </>
    )
}

export default MenuLinks;