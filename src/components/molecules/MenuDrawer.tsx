import React from "react";
import {Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button} from "@chakra-ui/react";
import {FC} from "react";
import {Link} from "react-router-dom";

type Props={
    onClose: () =>void;
    isOpen: boolean;
};

export const MenuDrawer: FC<Props> = (props) =>{
    const {onClose,isOpen} = props;
    return(
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0}>
                        <Link to="./">
                            <Button w="100%">TOP</Button>
                        </Link>
                        <Link to="./page1">
                            <Button w="100%">Rainfall</Button>
                        </Link>
                        <Link to="./page2">
                            <Button w="100%">Temparacture</Button>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
};