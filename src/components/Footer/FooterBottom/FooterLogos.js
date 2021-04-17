import { ListItem } from '@chakra-ui/layout';


function FooterLogos({ logos }) {
    return(
        <>
        {
        logos.map((logo, index) => (
            <ListItem
            key={index}>
               <img alt={logo.alt} src={logo.path}/>
               </ListItem>
        ))
        }
        </>
    )
}

export default FooterLogos;