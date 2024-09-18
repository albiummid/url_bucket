import { Button, Container, Flex, Text } from "@mantine/core";

export default function BucketItemListPage() {
    return (
        <Container>
            <Flex align={"center"} justify={"space-between"}>
                <Text>Link list</Text>
                <Button variant="outline" color="red">
                    Add link
                </Button>
            </Flex>
            <Flex></Flex>
        </Container>
    );
}
