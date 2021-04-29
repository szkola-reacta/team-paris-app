import React from "react";
import {Flex, Link} from "@chakra-ui/react";
import {QuestionOutlineIcon} from "@chakra-ui/icons";

import {Logo} from "../components";

function Header() {

    return (
        <Flex bg="blue.600" w="100%" justify="center">
            <Flex padding="10px" h="100%" w="90%" align="center" justify="space-between">
                <Logo h="36px"/>
                <Flex align="center">
                    <Flex h="36px"
                          padding="5px"
                          _hover={{bgColor: "blue.400", borderRadius: "5px"}}>
                        <QuestionOutlineIcon
                            color="white"
                            fontSize="28px"/>
                    </Flex>
                    <Link size="sm" variant="login">Zarejestruj się</Link>
                    <Link size="sm" variant="login">Zaloguj się</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;