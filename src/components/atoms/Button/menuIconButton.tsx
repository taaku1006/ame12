import { IconButton} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import {FC} from "react";

type Props={
    onOpen: () =>void;
};

export const MenuIconButton:FC<Props> = (props) => {
    const {onOpen} = props;
    return(
        <IconButton aria-label="menu" icon={<HamburgerIcon/>} size="30px" variant="unstyled" display={{base: "block",md: "none"}} onClick={onOpen}
        />
    );
};
