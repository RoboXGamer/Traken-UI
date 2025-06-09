import { Button } from "@traken-ui/react";

function ButtonVariants() {
  return (
    <>
      <Button
        color="primary"
        size="md"
        rounded="sm"
        variant="solid"
        className="cursor-pointer"
      >
        Solid Button
      </Button>
      <Button
        color="primary"
        size="md"
        rounded="md"
        variant="outline"
        className="cursor-pointer"
      >
        Outline Button
      </Button>
      <Button
        color="primary"
        size="md"
        rounded="lg"
        variant="ghost"
        className="cursor-pointer"
      >
        Ghost Button
      </Button>
      <Button
        color="primary"
        size="md"
        rounded="xl"
        variant="flat"
        className="cursor-pointer"
      >
        Flat Button
      </Button>
    </>
  );
}

export default ButtonVariants;
