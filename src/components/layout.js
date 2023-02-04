import { Box, Container } from "@chakra-ui/react";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <Container>
            <Header/>
            <Box>
                {children}
            </Box>
        </Container>
    );
}

export default Layout;